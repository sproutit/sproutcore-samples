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
    childViews: 'videoPlayer sproutcore credits'.w(),
        
    videoPlayer: SC.View.design({
      childViews: 'canvasView controllersView'.w(),
      layout: { centerX: 0, centerY: 0, width: 640, height: 480 },
      
      canvasView: SC.VideoView.design({
        layout: { top: 0, left: 0, width: 640, height: 480 },
        canPlayCB : VideoApp.appController.canPlay,
        classNames: 'reflector',
        src: 'http://tinyvid.tv/vfe/big_buck_bunny.mp4'
          //'http://tinyvid.tv/vfe/big_buck_bunny.ogv')
      }),
      controllersView: SC.View.design({
        layout: { bottom:0, left: 0, width: 640, height: 30 },
        childViews: 'playButton progressView timeView minusLabelView volumeView plusLabelView theaterButton'.w(),
        classNames: 'controllers',
        playButton: SC.ButtonView.design({
          title: '',
          titleMinWidth: 25,
          icon: 'play',
          layout: { top: 0, left: 5, width: 30},
          action: "playPause",
          target: "VideoApp.appController"
        }),

        progressView: SC.SliderExtended.design({
          layout: { top: 2, left: 40, width: 340},
          value:0,
          valueBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.currentTime" ,
          minimum: 0,
          maximumBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.duration",
          onMouseDown:VideoApp.appController.pause,
          onMouseUp:VideoApp.appController.play
          
        }),
        
        timeView: SC.LabelView.design({
          layout: { top: 2, left: 380, width: 85, height:20},
          classNames: 'time',
          textAlign: SC.ALIGN_CENTER,
          valueBinding: 'VideoApp.mainPage.mainPane.videoPlayer.canvasView.time'
        }),
        minusLabelView: SC.LabelView.design({
          layout: { top: 0, left: 470, width: 25},
          value: '',
          icon: 'minus'
        }),
        volumeView: SC.SliderExtended.design({
          layout: { top: 2, left: 485, width: 100},
          value:0,
          valueBinding: "VideoApp.mainPage.mainPane.videoPlayer.canvasView.volume" ,
          minimum: 0,
          maximum: 1,
          step: 0.01
        }),
        plusLabelView: SC.LabelView.design({
          layout: { top: 0, left: 580, width: 25},
          value: '',
          icon: 'plus'
        }),
        theaterButton: SC.ButtonView.design({
          title: '',
          icon: 'theater',
          titleMinWidth: 30,
          layout: { top: 0, right: 5, width: 30},
          action: "theatherMode",
          target: "VideoApp.appController"
        })
      })  
    }),
    sproutcore: SC.LabelView.design({
        value: 'Sproutcore video',
        classNames: 'sproutfont',
         textAlign: SC.ALIGN_RIGHT,
        layout: { top: 0, right: 0, width: 300, height: 30 }
      }),
      
      credits: SC.LabelView.design({
        tag: 'a',
        classNames: 'credits',
          value: '(c) copyright Blender Foundation | www.bigbuckbunny.org',
           textAlign: SC.ALIGN_RIGHT,
          layout: { bottom: 0, right: 0, width: 500, height: 20 }
        })
    
    
  })
});
