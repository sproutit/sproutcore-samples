// ==========================================================================
// Project:   UserDefaults - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals UserDefaults */

// This page describes the main user interface for your application.  
UserDefaults.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'descLabel working'.w(),
    
    working: SC.View.design({
      classNames: "working",
      layout: { left: 280, top: 50, height: 250, right: 50 },
      childViews: "pref".w(),
      
      pref: SC.View.design({
        layout: { left: 20, centerY: 0, height: 90, right: 20 },
        childViews: "userLabel userRadio label slider valueLabel buttons".w(),
        
        userLabel: SC.LabelView.design({
          layout: { top: 0, left: 0, width: 80, height: 21 },
          textAlign: SC.ALIGN_RIGHT,
          value: "User:"
        }),
        
        userRadio: SC.RadioView.design({
          layout: { left: 90, right: 0, height: 24, top: 2 },
          layoutDirection: SC.LAYOUT_HORIZONTAL,
          items: [
            { title: "anonymous", value: null },
            { title: "User1", value: "user1"  },
            { title: "User2", value: "user2"  }],
          itemValueKey: 'value',
          itemTitleKey: 'title',
          
          valueBinding: "UserDefaults.userDefaults.userDomain" 
        }),
        
        label: SC.LabelView.design({
          layout: { top: 28, left: 0, width: 80, height: 21 },
          textAlign: SC.ALIGN_RIGHT,
          value: "Pref Value:"
        }),
        
        slider: SC.SliderView.design({
          layout: { top: 30, left: 80, right: 40, height: 20 },
          minimum: 0,
          maximum: 100,
          step: 1,
          valueBinding: "UserDefaults.userDefaults.sliderValue"
        }),
        
        valueLabel: SC.LabelView.design({
          layout: { top: 28, right: 0, width: 30, height: 21 },
          valueBinding: "UserDefaults.userDefaults.sliderValue"
        }),
        
        buttons: SC.View.design({
          layout: { top: 60, width: 250, centerX: 0, height: 30 },
          childViews: "resetButton loadButton".w(),
          
          resetButton: SC.ButtonView.design({
            layout: { left: 0, width: 120, height: 24, top: 0 },
            title: "Reset Defaults",
            action: "reset",
            target: "UserDefaults"
          }),

          loadButton: SC.ButtonView.design({
            layout: { right: 0, width: 120, height: 24, top: 0 },
            isDefault: YES,
            title: "Load Defaults",
            action: "load",
            target: "UserDefaults"
          })
          
        })
      })
      
    }),
    
    descLabel: SC.LabelView.design({
      layout: { top: 50, left: 40, width: 220, bottom: 50 },
      escapeHTML: NO,
      classNames: 'desc',
      value: '<h1>SC.UserDefaults Demo</h1><p>Things to try:<ul><li>Adjust the slider, then reload page</li><li>Choose "Load Defaults"</li><li>Choose "Reset Defaults"</li></u></p>'
    })
  })

});
