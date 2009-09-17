// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
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
  time: '00:00/00:00',
  
  render: function(context, firstTime) {
    context.attr('src', this.src);
    context.attr('poster', this.poster);
    context.push('video tag not supported by your browser');
  },
  
  seek:function(){
    var video=this.get('v');
    if(video.paused) video.currentTime=this.get('videoCurrentTime');
    var timeInSecs = this.get('videoCurrentTime');
    var totaltimeInSecs = this.get('videoDuration');
    var formattedTime = this.addZeros(Math.floor(timeInSecs/60))+':'+this.addZeros(Math.floor(timeInSecs%60))+"/"+this.addZeros(Math.floor(totaltimeInSecs/60))+':'+this.addZeros(Math.floor(totaltimeInSecs%60));
    this.set('time', formattedTime);
  }.observes('videoCurrentTime'),
  
  addZeros:function(value){
    if(value.toString().length<2) return "0"+value;
    return value;
  },
  
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
    }, false);
    vid.addEventListener("timeupdate", function () {
      SC.RunLoop.begin();
      xx.set('videoCurrentTime',vid.currentTime);
      SC.RunLoop.end();
    }, false);     
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
