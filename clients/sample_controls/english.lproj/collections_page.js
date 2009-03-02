// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// shows demonstration of various collection views...
SampleControls.collectionsPage = SC.Page.create({
  
  mainView: SC.SplitView.design({
    classNames: ['collections-tab'],
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    topLeftDefaultThickness: 0.25,
    autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    
    topLeftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      contentView: SC.ListView.design({
        contentValueKey: 'title',
        contentIconKey:  'icon',
        contentUnreadCountKey: 'unread',
        hasContentIcon: YES,
        contentBinding: 'SampleControls.filesController.arrangedObjects',
        selectionBinding: 'SampleControls.filesController.selection',
        selectOnMouseDown: YES,
        canReorderContent: YES
      })
    }),
    
    dividerView: SC.SplitDividerView,
    
    bottomRightView: SC.ScrollView.design({
      // contentView: SC.ListView.design({
      //   contentBinding: 'SampleControls.filesController.arrangedObjects',
      //   selectionBinding: 'SampleControls.filesController.selection'
      // })
    })
  })
  
});
