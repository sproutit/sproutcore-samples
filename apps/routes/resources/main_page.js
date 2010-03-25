// ==========================================================================
// Project:   Routes - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Routes */

// This page describes the main user interface for your application.  
Routes.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'oneButton twoButton threeButton funnyButton'.w(),
    
    defaultResponder: Routes,
    
    oneButton: SC.ButtonView.design({
      layout: { top: 27, left: 27, width: 81 },
      title: 'one',
      action: 'go',
      isEnabledBinding: SC.Binding.transform(function(state) {
        return state !== Routes.states.one;
      }).oneWay('Routes.firstResponder')
    }),
    
    twoButton: SC.ButtonView.design({
      layout: { top: 27, left: 137, width: 81 },
      title: 'two',
      action: 'go',
      isEnabledBinding: SC.Binding.transform(function(state) {
        return state !== Routes.states.two;
      }).oneWay('Routes.firstResponder')
    }),
    
    threeButton: SC.ButtonView.design({
      layout: { top: 27, left: 243, width: 81 },
      title: 'three',
      action: 'go',
      isEnabledBinding: SC.Binding.transform(function(state) {
        return state !== Routes.states.three;
      }).oneWay('Routes.firstResponder')
    }),
    
    funnyButton: SC.ButtonView.design({
      layout: { top: 27, left: 351, width: 81 },
      title: 'éàçùß€',
      action: 'go',
      isEnabledBinding: SC.Binding.transform(function(state) {
        return state !== Routes.states['éàçùß€'];
      }).oneWay('Routes.firstResponder')
    })
    
  })

});
