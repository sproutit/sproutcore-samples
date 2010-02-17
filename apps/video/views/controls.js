// ==========================================================================
// Project:   Video.VideoProperties
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals VideoApp */

sc_require('views/sliderExtended');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
VideoApp.ControlsView = SC.View.extend({

  target: null,
  
  childViews: 'playButton progressView timeView minusLabelView volumeView plusLabelView theaterButton'.w(),
  classNames: 'controllers',
  
  // targetObserver: function(){
  //   var ob = this.getPath(this.get('target'));
  //   debugger;
  //   if(ob) this.set('targetObject', ob);
  // }.observes('target'),
  
  
  playButton: SC.ButtonView.design({
       title: '',
       titleMinWidth: 35,
       classNames: 'play',
       noStyle: YES,
       layout: { top: 0, left: 0, width: 20, height:20},
       action: "playPause",
       targetBinding: "*owner.target",
       renderStyle: 'renderImage',
       theme: ''
     }),
      progressView: VideoApp.SliderExtended.design({
        layout: { top: 0, left: 20, right: 220, height:20},
        value:0,
        minimum: 0,
        valueBinding: "*owner.target.currentTime" ,
        maximumBinding: "*owner.target.duration",
        videoViewBinding: "*owner.target"
      }),
    
      timeView: SC.LabelView.design({
        layout: { top: 0, right: 160, width: 60, height:20},
        classNames: 'time',
        textAlign: SC.ALIGN_CENTER,
        valueBinding: '*owner.target.time'
      }),
      theaterButton: SC.ButtonView.design({
        title: '',
        classNames: 'theater',
        renderStyle: 'renderImage',
        theme: '',
        titleMinWidth: 35,
        layout: { top: 0, right: 140, width: 20, height:20},
        action: "fullScreen",
        targetBinding: "*owner.target"
      }),
      minusLabelView: SC.LabelView.design({
        layout: { top: 0, right: 120, width: 20, height:20},
        value: '',
        icon: 'minus'
      }),
      volumeView: SC.SliderView.design({
        layout: { top: 0, right: 20, width: 100, height:20},
        value:0,
        valueBinding: "*owner.target.volume" ,
        minimum: 0,
        maximum: 1,
        step: 0.01
      }),
      plusLabelView: SC.LabelView.design({
        layout: { top: 0, right: 0, width: 20, height:20},
        value: '',
        icon: 'plus'
      })
      
});