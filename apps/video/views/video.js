// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple, Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

SC.VideoView = SC.View.extend({

  classNames: 'sc-video-view',
  displayProperties: ['value', 'shouldAutoResize'],
  tagName: 'video',
  videoCurrentTime : 0,
  videoDuration : 0,
  v:null,
  volume:0,
  
  render: function(context, firstTime) {
    context.attr('src', this.src);
    context.push('video tag not supported by your browser');
  },
  
  seek:function(){
    var video=this.get('v');
    if(video.paused) video.currentTime=this.get('videoCurrentTime');
  }.observes('videoCurrentTime'),
  
  setVolume:function(){
    var video=this.get('v');
    video.volume=this.get('volume');
  }.observes('volume'),
  
  didCreateLayer :function(){
    var vid=this.$()[0];
    var xx=this;
    this.set('v', vid);
    this.set('volume', vid.volume);
    vid.addEventListener("durationchange", function () {
      SC.RunLoop.begin();
      xx.set('videoDuration', vid.duration);
      SC.RunLoop.end();
    });
    vid.addEventListener("timeupdate", function () {
      SC.RunLoop.begin();
      xx.set('videoCurrentTime',vid.currentTime);
      SC.RunLoop.end();
    });     
  },
  
  play: function(){
    var myVideo=this.get('v');  
    myVideo.play();
  },
  
  pause: function(){
    var myVideo=this.get('v');  
    myVideo.pause();
  },
  
  playPause: function(){
    var myVideo=this.get('v');  
    if(myVideo.paused){
      myVideo.play();
    }else{
      myVideo.pause();
    }
  }
});
