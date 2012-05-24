// ==========================================================================
// Project:   Audio - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Audio */
Audio.audioURL= 'http://www.joshwoodward.com/mp3/JoshWoodward-IllBeRightBehindYouJosephine.mp3';

// This page describes the main user interface for your application.  
Audio.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'container'.w(),
    
    container: SC.View.design({
      layout: { centerX: 0, centerY: 0, width: 1024, height: 480 },
      childViews: 'warning html5container'.w(),
        
      warning: SC.LabelView.design({
        layout: { top: 0, centerX: 0, width: 400, height: 30 },
        value: "WARNING: This only works in HTML5 capable browsers."
      }),

    // Currently unnecessary
    /*
      list: SC.ScrollView.design({
        layout: { top: 0, left: 0, width: 256, bottom: 0 },
        contentView: SC.ListView.design({
          contentBinding: "Audio.audioController.arrangedObjects",
          selectionBinding: "Audio.audioController.selection",         
          // setup visual display
          contentValueKey: "name",
          rowHeight: 32
        })
      }),
    */

      html5container: SC.View.design({
        layout: { top: 100, left: 256, width: 256, bottom: 100 },
        childViews: 'audioPlayer audioProperties'.w(),
        audioPlayer:SC.AudioPlayerView.design({
          degradeList: ['html5'],
          layout: { top: 0, centerX:0, width: 200, height: 20},
          valueBinding: 'Audio.audioController.audioURL'
        }),
        
        audioProperties:Audio.AudioProperties.design({
          layout: { top: 40, bottom:0, left: 0, right: 0},
          audioViewBinding: 'Audio.mainPage.mainPane.container.html5container.audioPlayer'
        })
      })

    // These don't work right now
    /*
      qtcontainer: SC.View.design({
        layout: { top: 100, left:512, width: 256, bottom: 100 },
        childViews: 'audioPlayer audioProperties'.w(),
        audioPlayer:SC.AudioPlayerView.design({
          degradeList: ['quicktime'],
          layout: { top: 0, centerX:0, width: 200, height: 20},
          valueBinding: 'Audio.audioController.audioURL'
        }),
        
        audioProperties:Audio.AudioProperties.design({
          layout: { top: 40, bottom:0, left: 0, right: 0},
          audioViewBinding: 'Audio.mainPage.mainPane.container.qtcontainer.audioPlayer'
        })
      }),
      flashcontainer: SC.View.design({
        layout: { top: 100, left: 768, width: 256, bottom: 100 },
        childViews: 'audioPlayer audioProperties'.w(),
        audioPlayer:SC.AudioPlayerView.design({
          degradeList: ['flash'],
          layout: { top: 0, centerX:0, width: 200, height: 20},
          valueBinding: 'Audio.audioController.audioURL'
        }),
        
        audioProperties:Audio.AudioProperties.design({
          layout: { top: 40, bottom:0, left: 0, right: 0},
          audioViewBinding: 'Audio.mainPage.mainPane.container.flashcontainer.audioPlayer'
        })
      })
    */
    })

  })

});
