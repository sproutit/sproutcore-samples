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
    defaultThickness: 0.25,
    autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    canCollapseViews: NO,
    
    topLeftMinThickness: 200,
    topLeftMaxThickness: 400,
    topLeftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      contentView: SC.ListView.design({
        // exampleView: SC.LabelView,
        // exampleGroupView: SC.LabelView,
        // hasUniformRowHeights: NO,
        // rowHeightKey: 'rowHeight',
        // hasUniformGroupHeights: NO,
        // groupHeightKey: 'groupHeight',
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
      hasHorizontalScroller: NO,
      contentView: SC.GridView.design({
        contentValueKey: 'title',
        contentBinding: 'SampleControls.filesController.arrangedObjects',
        selectionBinding: 'SampleControls.filesController.selection'
      })
    })
  })
  
});
