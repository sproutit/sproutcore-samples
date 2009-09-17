// ==========================================================================
// Project:   Dot - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Dot */

// This page describes the main user interface for your application.  
Dot.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'dotView'.w(),

    dotView: Dot.DotView.design({
      layout: { top: 50, left: 50, width: 100, height: 100 }
    })
  })

});
