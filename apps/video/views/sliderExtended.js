// ==========================================================================
// Project:   Video.SliderExtended
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals VideoApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
VideoApp.SliderExtended = SC.SliderView.extend({
  
  videoView: null,

  mouseDown: function(evt) {
    var video=this.get('videoView');
    if(video) video.stop();
    return sc_super();
  },

  mouseUp: function(evt) {
    var video=this.get('videoView');
    if(video) video.play();
    return sc_super();
  }
   
});

