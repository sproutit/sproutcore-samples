// ==========================================================================
// Project:   Chat - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Chat */

sc_require('core');
sc_require('controllers/buddy');

// This page describes the main user interface for your application.  
Chat.mainPage = SC.Page.design({
  
  mainPane: SC.MainPane.design({
    childViews: 'scroller'.w(),
    
    scroller: SC.ScrollView.design({
      layout: { centerX: 50, top: 50, width: 300, bottom: 50 },
      hasHorizontalScroller: NO,
      contentView: SC.SourceListView.design({
        contentBinding: 'Chat.buddyController.arrangedObjects',
        selectionBinding: 'Chat.buddyController.selection',
        contentValueKey: 'fullName',
        canReorderContent: YES
      })
    })
  })
  
});
