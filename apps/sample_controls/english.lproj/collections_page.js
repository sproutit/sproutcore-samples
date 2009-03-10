// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// shows demonstration of various collection views...
SampleControls.collectionsPage = SC.Page.create({
  
  mainView: SC.SplitView.design({
    layout: { top:12, left:0, right:0, bottom:0 },
    classNames: ['collections-tab'],
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    topLeftDefaultThickness: 0.25,
    autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    canCollapseViews: NO,
    
    topLeftMinThickness: 200,
    topLeftMaxThickness: 400,
    topLeftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      contentView: SC.SourceListView.design({
        // exampleView: SC.LabelView,
        contentValueKey: 'title',
        contentIconKey:  'icon',
        contentUnreadCountKey: 'unread',
        hasContentIcon: YES,
        contentBinding: 'SampleControls.filesController.arrangedObjects',
        selectionBinding: 'SampleControls.filesController.selection'
        // selectOnMouseDown: YES,
        // canReorderContent: YES
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
