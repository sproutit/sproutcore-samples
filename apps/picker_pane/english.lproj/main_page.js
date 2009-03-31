// ==========================================================================
// Project:   PickerPane - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals PickerPane */
sc_require('views/content_data');
PickerPane.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
  childViews: "newButton".w(),  
  newButton:SC.ButtonView.design({
      title:'test',
      layout: {left:120,right:0,bottom:0,top:360,width:100,height:20},
      action:'showPickerPanePointer',
      target:'PickerPane.panelController'
  })
  })
});

// Clock.mainPage = SC.Page.design({
// 
//   // create the wrapper mainPane to handle display
//   mainPane: SC.MainPane.design()
//     .layout({ centerX: 0, centerY: 0, width: 320, height: 120 })
//     .classNames('clock')
//     
//     // add labelView child...
//     .childView(SC.LabelView.design()
//       .layout({ left: 10, right: 10, centerY: 0, height: 48 })
//       .tagName('h1')
//       .bind('value', 'Clock.clockController.value'))
//       
//     .childView(SC.CheckboxView.design()
//       .layout({ centerX: 0, width: 130, bottom: 10, height: 18 })
//       .prop('title', 'Show Greeting')
//       .bind('value', 'Clock.clockController.showGreeting'))
// 
// }) ;
