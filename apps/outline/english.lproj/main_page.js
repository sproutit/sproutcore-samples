// ==========================================================================
// Project:   Outline - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Outline */

// This page describes the main user interface for your application.  
Outline.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'scrollView countLabel descLabel'.w(),
    
    scrollView: SC.ScrollView.design(SC.Border, {
      layout: { top: 50, bottom: 70, left: 280, right: 50 },
      borderStyle: SC.BORDER_GRAY,
      hasHorizontalScroller: NO,
      
      contentView: SC.ListView.design({
        contentValueKey: "title",
        contentBinding: "Outline.rootController.arrangedObjects"
      })
    }),
    
    countLabel: SC.LabelView.design({
      layout: { bottom: 48, height: 18, left: 280, right: 50 },
      textAlign: SC.ALIGN_LEFT,
      valueBinding: "Outline.rootController.countLabel"
    }),
    
    descLabel: SC.LabelView.design({
      layout: { top: 50, left: 40, width: 220, bottom: 50 },
      escapeHTML: NO,
      value: '<h1>SC.TreeController Demo</h1><p style="color:#888; font-size: 80%;">(Warning: Alpha Code!)</p><p>Things to try:<ul><li>Show/hide items</li><li>Navigate with keyboard</li><li>left/right key to show/hide</li><li>Show deeply nested items</li></u></p>'
    })
  })

});
