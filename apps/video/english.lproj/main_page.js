// ==========================================================================
// Project:   VideoApp - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals VideoApp */

sc_require('views/controls');
sc_require('views/videoProperties');

VideoApp.videoURL = 'http://mirror.cessen.com/blender.org/peach/trailer/trailer_iphone.m4v';

// This page describes the main user interface for your application.  
VideoApp.mainPage = SC.Page.design({
  
  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'playerContainer sproutcore credits playAll'.w(),
    
    playAll: SC.ButtonView.design({
      layout: { centerX: 0, top: 0.40, height: 24, width: 200},
      title: 'Play All',
      target:'VideoApp.appController',
      action:'playAll'
    }),
    
    playerContainer: SC.View.design({
      childViews: 'videoPlayer1 propertiesView1 videoPlayer2 propertiesView2 videoPlayer3 propertiesView3'.w(),
      layout: { centerX: 0, top: 0, height: 0.95, width: 0.95},
       
      videoPlayer1: SC.View.design({
        childViews: 'canvasView'.w(),
        classNames: 'videoWrapper',
        layout: { left: 0, top: 0, width: 0.3, height: 0.4 },

        canvasView: SC.VideoView.design({
          layout: { top: 0, left: 0, right: 0, bottom: 0 },
          degradeList: ['html5'],
          classNames: 'reflector',
          value: VideoApp.videoURL
        })        
      }),
      propertiesView1: VideoApp.VideoProperties.design({
        layout: { bottom:0, left: 0, width: 0.3, height: 0.5 },
        videoViewBinding: 'VideoApp.mainPage.mainPane.playerContainer.videoPlayer1.canvasView'
      }),
      videoPlayer2: SC.View.design({
        childViews: 'canvasView'.w(),
        classNames: 'videoWrapper',
        layout: { centerX: 0, top: 0, width: 0.3, height: 0.4 },
        
        canvasView: SC.VideoView.design({
          degradeList: ['quicktime', 'flash'],
          layout: { top: 0, left: 0, right: 0, bottom: 0 },
          classNames: 'reflector',
          value: VideoApp.videoURL
        })
      }),
      propertiesView2: VideoApp.VideoProperties.design({
        layout: { bottom:0, centerX: 0, width: 0.3, height: 0.5 },
        videoViewBinding: 'VideoApp.mainPage.mainPane.playerContainer.videoPlayer2.canvasView'
      }),
      videoPlayer3: SC.View.design({
        childViews: 'canvasView'.w(),
        classNames: 'videoWrapper',
        layout: { right: 0, top: 0, width: 0.3, height: 0.4 },
        
        canvasView: SC.VideoView.design({
          degradeList: ['flash'],
          layout: { top: 0, left: 0, right: 0, bottom: 0 },
          classNames: 'reflector',
          value: VideoApp.videoURL
        })
      }),
      propertiesView3: VideoApp.VideoProperties.design({
        layout: { bottom:0, right: 0, width: 0.3, height: 0.5 },
        videoViewBinding: 'VideoApp.mainPage.mainPane.playerContainer.videoPlayer3.canvasView'
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
