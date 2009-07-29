# Checkout copy of webpage from git and run a build.  Then push the build to
# demo.sproutcore.com and symlink pages.
require 'extlib'

# Config Settings
LANGUAGES = [:en]

# Autodetect some environment variables
HOSTNAME = "demo.sproutcore.com"
USERNAME = "sprout"
HOME_TARGET = "/sproutcore/welcome"
DOCROOT = "/home/sprout/demo.sproutcore.com"
SC_BUILD = 'sc-build'
WORKING = File.dirname(__FILE__)

# these targets will not be included in the targets.json feed
# add apps here that are not fully functioning and should not be listed
EXCLUDE_TARGETS = %w(chat video sproutcore/tests sproutcore/docs not_found drag)

# store global config options
OPTS = {}

# Make it so we can load Abbot as a library.  Once Abbot is installed as a 
# gem this 
$:
desc "builds the pages to prepare for deployment"
task :build do
  Dir.chdir WORKING
  puts `#{SC_BUILD} --all -rv --languages=#{LANGUAGES.join(',')}`
end

desc "cleans the build output"
task :clean do
  path = WORKING / 'tmp' / 'build' / 'static'
  puts "removing #{path}"
  puts `rm -r #{path}`
end

desc "installs gems needed for this Rakefile to run"
task :install_gems do
  puts "sudo gem install highline net-ssh net-scp sproutit-sproutcore"
  puts `sudo gem install highline net-ssh net-scp sproutit-sproutcore`
end

desc "collects the login password from the operator"
task :collect_password do
  
  begin
    require 'highline/import'
  rescue LoadError => e
    puts "\n ~ FATAL: sproutcore gem is required.\n          Try: rake install_gems"
    exit(1)
  end
  
  puts "Enter login password for #{HOSTNAME} to complete this task"
  OPTS[:password] = ask("Password: ") { |q| q.echo = '*' }
end

desc "finds all targets in the system and computes their build numbers" 
task :prepare_targets do
  
  begin
    require 'sproutcore'  
  rescue LoadError => e
    puts "\n ~ FATAL: sproutcore gem is required.\n          Try: rake install_gems"
    exit(1)
  end
  
  puts "discovering all installed targets"
  SC.build_mode = :production
  project = SC.load_project(WORKING) 
  
  # get all targets and prepare them so that build numbers work
  targets = project.targets.values
  
  puts "preparing build numbers"
  targets.each do |t| 
    puts " .. #{t.target_name}"
    t.prepare!.compute_build_number if !t.build_number
  end
  
  OPTS[:targets] = targets
  OPTS[:project] = project
end
  
desc "generates json feeds we need to update" 
task :json_feeds => :prepare_targets do
  require 'json'

  json_hash = []
  OPTS[:targets].each do |target|
    next if EXCLUDE_TARGETS.include?(target.target_name.to_s[1..-1])
    
    target.prepare!
    parent = target.parent_target
    parent = parent.kind_of?(SC::Target) ? parent.target_name : ''
    json_hash << { "name" => target.target_name,
      "kind" => target.target_type,
      "parent" => parent,
      "link_root" => target.url_root }
  end
  
  file_path = WORKING / 'tmp' / 'sc' / 'targets.json'
  FileUtils.mkdir_p(File.basename(file_path))
  File.open(file_path, 'w+') { |f| f.write(json_hash.to_json) }
  
  OPTS[:feeds] = {
    'sc/targets.json' => file_path
  }
end
   
desc "copies the built feeds onto the #{HOSTNAME} server"
task :deploy_feeds => [:collect_password, :json_feeds] do

  begin
    require 'net/ssh'
    require 'net/scp'  
  rescue LoadError => e
    puts "\n ~ FATAL: net-scp gem is required.\n          Try: rake install_gems"
    exit(1)
  end

  password = OPTS[:password]
  feeds    = OPTS[:feeds] || {} 
  
  puts "building directory structure"
  Net::SSH.start(HOSTNAME, USERNAME, :password => password) do |ssh|
    feeds.each do |dst_path, src_path|
      remote_path = "#{DOCROOT}/#{dst_path}"
      puts ssh.exec!(%[mkdir -p "#{File.basename(remote_path)}"]) || "%: mkdir -p #{remote_path}"
      puts ssh.exec!(%[rm -r "#{remote_path}"]) || "%: rm #{remote_path}"
    end

  end
        
  puts "copying static resources onto remote server"
  Net::SCP.start(HOSTNAME, USERNAME, :password => password) do |scp|
    feeds.each do |dst_path, local_path|
      remote_path = "#{DOCROOT}/#{dst_path}"
      puts " ~ uploading feed: #{dst_path}"
      scp.upload! local_path, remote_path, :recursive => true
    end
  end # Net::SCP.start
end

desc "copies the built files onto the #{HOSTNAME} server"
task :deploy_assets => [:collect_password, :build, :prepare_targets] do

  begin
    require 'net/ssh'
    require 'net/scp'  
  rescue LoadError => e
    puts "\n ~ FATAL: net-scp gem is required.\n          Try: rake install_gems"
    exit(1)
  end

  password = OPTS[:password]
  targets  = OPTS[:targets]
  
  installed = {}
  
  puts "building directory structure"
  Net::SSH.start(HOSTNAME, USERNAME, :password => password) do |ssh|
    targets.each do |target|
      LANGUAGES.each do |lang|
        remote_path = "#{DOCROOT}/static#{target.index_root}/#{lang}"
        puts ssh.exec!(%[mkdir -p "#{remote_path}"]) || "%: mkdir -p #{remote_path}"
        
        # see if this guy is already installed
        remote_path = "#{remote_path}/#{target.build_number}"
        installed[remote_path] = !(ssh.exec!("ls #{remote_path}") =~ /No such file or directory/)
        
      end
    end
  end
        
  puts "copying static resources onto remote server"
  Net::SCP.start(HOSTNAME, USERNAME, :password => password) do |scp|

    targets.each do |target|
      LANGUAGES.each do |lang|
        local_path = target.build_root / lang / target.build_number
        remote_path = "#{DOCROOT}/static#{target.index_root}/#{lang}"

        short_path = local_path.gsub /^#{Regexp.escape(target.build_root)}/,''

        if installed["#{remote_path}/#{target.build_number}"]
          puts " ~ #{target.target_name}#{short_path} already installed"
          
        elsif File.directory?(local_path)
          puts " ~ uploading #{target.target_name}#{short_path}"
          scp.upload! local_path, remote_path, :recursive => true

        else
          puts "\n\n ~ WARN: cannot install #{target.target_name}:#{lang} - local path #{local_path} does not exist\n\n"
        end
        
      end # LANGUAGES.each
    end # targets.each
    
  end # Net::SCP.start
  
end

desc "creates symlinks to the latest versions of all pages and apps. Make sure you deploy your assets also!"
task :link_current => [:collect_password, :prepare_targets] do

  # don't require unless this task runs to avoid dependency problems
  begin
    require 'net/ssh'
  rescue LoadError => e
    puts "\n ~ FATAL: net-ssh gem is required.\n          Try: rake install_gems"
    exit(1)
  end
    

  
  # now filter out only app targets living in the current project
  targets = OPTS[:targets]
  project = OPTS[:project]
  targets = targets.select { |t| t.target_type == :app }
  targets = targets.select do |t| 
    t.source_root =~ /^#{Regexp.escape(project.project_root)}/
  end

  puts "linking targets:\n  #{targets.map {|t| t.target_name} * "\n  " }"
  
  # SSH in and do the symlink
  password = OPTS[:password]
  Net::SSH.start(HOSTNAME, USERNAME, :password => password) do |ssh|
    targets.each do |target|
      # find the local build number
      build_number = target.prepare!.compute_build_number

      puts "Installing #{target.target_name}..."
      
      # first, link index.html
      from_path = "#{DOCROOT}/static#{target.index_root}/en/#{build_number}/index.html"
      to_path   = "#{DOCROOT}#{target.target_name}"
      
      puts ssh.exec!("mkdir -p #{to_path}") || "% mkdir -p #{to_path}"
      to_path = "#{to_path}/index.html"
      unless ssh.exec!("ls #{to_path}").empty? # check for existance
        puts ssh.exec!("rm #{to_path}") || " ~ Removed link at #{to_path}"
      end
      puts ssh.exec!("ln -s #{from_path} #{to_path}") || " ~ Linked #{from_path} => #{to_path}"

      # link each language
      LANGUAGES.each do |lang|
        from_path = "#{DOCROOT}/static#{target.index_root}/#{lang}/#{build_number}"
        to_path   = "#{DOCROOT}#{target.target_name}/#{lang}"

        puts " ~ installing language: #{lang}"
        unless ssh.exec!("ls #{to_path}").empty? # check for existance
          puts ssh.exec!("rm #{to_path}") || " ~ Removed link at #{to_path}"
        end
        puts ssh.exec!("ln -s #{from_path} #{to_path}") || " ~ Linked #{from_path} => #{to_path}"
      end
      
      # Also - this is for home only
      if target.target_name.to_s == HOME_TARGET
        to_path = "#{DOCROOT}/index.html"
        from_path = "#{DOCROOT}/static#{target.index_root}/en/#{build_number}/index.html"
        unless ssh.exec!("ls #{to_path}").empty? # check for existance
          puts ssh.exec!("rm #{to_path}") || " ~ Removed link at #{to_path}"
        end
        puts ssh.exec!("ln -s #{from_path} #{to_path}") || " ~ Linked #{from_path} => #{to_path}"
      end
        
    end
      
  end
  
end

desc "builds and then deploys the files to the server.  This will not clean the build first, which will be faster.  If you have trouble try deploy_clean"
task :deploy => [:collect_password, :build, :deploy_assets, :deploy_feeds, :link_current]

desc "first cleans, then deploys the files"
task :deploy_clean => [:clean, :deploy]
  
  
