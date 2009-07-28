// ==========================================================================
// Project:   VideoApp - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals VideoApp */

sc_require('views/video');
sc_require('views/sliderExtended');

// This page describes the main user interface for your application.  
VideoApp.mainPage = SC.Page.design({
  
  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'videoPlayer sproutcore'.w(),
        
    videoPlayer: SC.View.design({
      childViews: 'canvasView controllersView'.w(),
      layout: { centerX: 0, centerY: 0, width: 640, height: 480 },
      
      canvasView: SC.VideoView.design({
        layout: { top: 0, left: 0, width: 640, height: 480 },
        canPlayCB : VideoApp.appController.canPlay,
        classNames: 'reflector',
        src: 'http://images.apple.com/movies/us/hd_gallery/gl1800/480p/parks_on_fire_m480p.mov'
      }),
      controllersView: SC.View.design({
        layout: { bottom:58, left: 0, width: 640, height: 30 },
        childViews: 'playButton progressView theatherButton volumeView'.w(),
        classNames: 'controllers',
        playButton: SC.ButtonView.design({
          title: 'Play',
          titleMinWidth: 40,
          classNames: 'reflector',
          layout: { top: 0, left: 5, width: 50},
          action: "playPause",
          target: "VideoApp.appController"
        }),

        progressView: SC.SliderExtended.design({
          layout: { top: 0, left: 60, width: 400},
          value:0,
          valueBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.videoCurrentTime" ,
          minimum: 0,
          maximumBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.videoDuration",
          onMouseDown:VideoApp.appController.pause,
          onMouseUp:VideoApp.appController.play
          
        }),
        theatherButton: SC.ButtonView.design({
          title: 'Curtain',
          titleMinWidth: 40,
          layout: { top: 0, left: 460, width: 60},
          action: "theatherMode",
          target: "VideoApp.appController"
        }),
        volumeView: SC.SliderExtended.design({
          layout: { top: 0, left: 520, width: 115},
          value:0,
          valueBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.volume" ,
          minimum: 0,
          maximum: 1
        })
      })  
    }),
    sproutcore: SC.LabelView.design({
        value: 'Sproutcore video',
        classNames: 'sproutfont',
         textAlign: SC.ALIGN_RIGHT,
        layout: { top: 0, right: 0, width: 300, height: 30 }
      })
    
    
  })
});
