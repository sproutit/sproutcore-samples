# SPROUTCORE CONFIGURATION FILE
# Use this file to customize the URLs, source and output paths and and other
# options used by the SproutCore build system to create the output for your
# SproutCore applications.

# If you want to use the libraries provided by other gems, require those gems
# here.  SproutCore will automatically locate and load any bundles found in
# your load path.  The sproutcore gem is automatically loaded for you.
#
# require 'sproutcore'

# This configuration section will be applied to all bundles used by your
# application, even bundles that come from other gems.
config :all do |c|

  c[:build_languages] = [:en, :fr, :de, :ja, :es, :it]
  
  # Name any other frameworks your bundles depend upon.  The stylesheets and
  # JavaScript for required bundles will be loaded before your bundle on your
  # page.
  c[:required] = [:sproutcore, :common_assets]

  # This string will be prepended before any URLs that reference JavaScript,
  # CSS or images in your files.
  c[:resources_at] = 'static'

  # This string will be prepended before any index.html urls that actually
  # load your clients.  Setting this to an empty string will mount all
  # of your clients at the root URL level.
  c[:index_at] = ''

  # If you also need to load external stylesheets not managed by the bundle
  # system, name the URLs you want to reference here.
  # c[:stylesheet_libs] = ['/stylesheets/public.css']

  # If you also need to load external javascripts not managed by the bundle
  # system, name the URLs you want to reference here.  These will be loaded
  # automatically.
  # c[:javascript_libs] = ['/javascript/scriptaculous.js']

  # This is the preferred language.  When the user visits the root URL of
  # your client, this is the language they will get.  When looking for a
  # resource (such as an image or stylesheet), SproutCore will also try
  # your preferred language .lproj if it cannot find the resource in the
  # current language.
  # c[:preferred_language] = :fr

  # If you want to use a default root layout template other than the default
  # provided by SproutCore, you can specifiy the path name to the index.html
  # here.  If you provide a relative path, SproutCore will assume the file
  # is relative to the root of this project.
  # c[:layout] = 'lib/index.rhtml'

  # This is the fully qualified path to the directory you want all of your
  # static files stored in.  You can place any files not managed by the build
  # system here.  SproutCore will also save its cached resources here.
  # c[:public_root] = File.join(File.dirname(__FILE__), 'public')

  # The default build mode.  Normally you can specify this on the command
  # line as well using the -e option, but you can override the default
  # using this config as well.
  #c[:build_mode] = :production

end

mode :debug do
  config :all, :combine_stylesheets => false
end

# Add configurations for specific bundles here as well.  Any options you
# provide here will override the defaults provided by the bundles themselves
# as well as any options you place in the :all category above.
#

config :common_assets do |c|
  c[:required] = [:sproutcore]
end

# Costello example.  Does not use the rest of SproutCore
config :store_configurator, 
  :required => 'sproutcore/runtime'#, :theme => nil

# Vanilla requires only the empty theme and foundation.  It is used to test
# just the plain vanilla, platform-independent components of SproutCore.
config :vanilla, 
  :required => 'sproutcore/foundation',
  :theme    => 'sproutcore/empty_theme'
  
config :iphone_demo, 
  :required => 'sproutcore/mobile',
  :theme    => 'sproutcore/iphone_theme',
  :layout   => 'sproutcore/mobile:lib/index.rhtml'

# Setup extra services to proxy.  This is used only in dev mode so you can
# talk to backend services.

# This will proxy all requests to /* -> http://www.twitter.com/*
proxy '/statuses', :to => 'twitter.com'

config :clock, :required => ['sproutcore/deprecated']