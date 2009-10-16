// ==========================================================================
// Project:   BigList - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BigList */

// This page describes the main user interface for your application.  
BigList.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'scrollView countLabel descLabel sourceLabel sourceOptions countOptions countValueLabel'.w(),
    
    scrollView: SC.ScrollView.design(SC.Border, {
      layout: { top: 100, bottom: 70, left: 280, right: 50 },
      borderStyle: SC.BORDER_GRAY,
      hasHorizontalScroller: NO,
      
      contentView: SC.ListView.design({
        contentValueKey: "subject",
        contentBinding: "BigList.rootController.arrangedObjects",
        canDeleteContent: YES,
        canReorderContent: YES
      })
    }),
    
    sourceLabel: SC.LabelView.design({
      layout: { top: 50, left: 280, width: 100, height: 18 },
      value: "Content Source:"
    }),
    
    sourceOptions: SC.RadioView.design({
      layout: { top: 50, left: 384, right: 50, height: 21 },
      items: 'Array SparseArray'.w(),
      valueBinding: 'BigList.sourceController.sourceName',
      layoutDirection: SC.LAYOUT_HORIZONTAL
    }),
    
    countLabel: SC.LabelView.design({
      layout: { top: 76, left: 280, width: 100, height: 18 },
      value: "Message Count:"
    }),
    
    countOptions: SC.SliderView.design({
      layout: { top: 76, left: 380, right: 100, height: 21 },
      minimum: 0,
      maximum: 1000,
      step: 1,
      valueBinding: 'BigList.sourceController.messageCount'
    }),
    
    countValueLabel: SC.LabelView.design({
      layout: { right: 50, top: 76, width: 50, height: 18 },
      valueBinding: 'BigList.sourceController.messageCount'
    }),
    
    descLabel: SC.LabelView.design({
      layout: { top: 50, left: 40, width: 220, bottom: 50 },
      escapeHTML: NO,
      value: '<h1>Incremental Rendering Demo</h1><p>Things to try:<ul><li>Switch between SparseArray vs regular Array mode</li><li>Adjust number of items in array</li><li>Scroll!</li></u></p>'
    })
  })

});
