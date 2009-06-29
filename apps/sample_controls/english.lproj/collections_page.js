// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// shows demonstration of various collection views...
SampleControls.collectionsPage = SC.Page.create({
  
  rowListView: SC.outlet('mainView.topLeftView.scrollView.contentView'),
  
  mainView: SC.SplitView.design({
    layout: { top:20, left:12, right:12, bottom:12 },
    classNames: ['collections-tab'],
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    defaultThickness: 250,
    autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    canCollapseViews: NO,
    
    topLeftMinThickness: 200,
    topLeftMaxThickness: 400,
    topLeftView: SC.View.design({
      childViews: 'scrollView rowHeightLabel rowHeightSlider customRowCheckbox customRowHeightSlider customRowHeightLabel'.w(),
      
      rowHeightLabel: SC.LabelView.design({
        layout: { bottom: 40, right: 8, width: 20, height: 18 },
        textAlign: SC.ALIGN_CENTER,
        valueBinding: "SampleControls.filesController.rowHeight"
      }),
      
      rowHeightSlider: SC.SliderView.design({
        layout: { bottom: 40, left: 8, right: 32, height: 18 },
        minimum: 12,
        maximum: 80,
        step: 1,
        valueBinding: "SampleControls.filesController.rowHeight"
      }),
      
      customRowCheckbox: SC.CheckboxView.design({
        layout: { bottom: 20, left: 8, right: 8, height: 18 },
        title: "Use custom row heights",
        valueBinding: "SampleControls.filesController.useCustomRowHeights"
      }),

      customRowHeightLabel: SC.LabelView.design({
        layout: { bottom: 0, right: 8, width: 20, height: 18 },
        textAlign: SC.ALIGN_CENTER,
        valueBinding: "SampleControls.filesController.customRowHeight"
      }),
      
      customRowHeightSlider: SC.SliderView.design({
        layout: { bottom: 0, left: 8, right: 32, height: 18 },
        minimum: 12,
        maximum: 80,
        step: 1,
        valueBinding: "SampleControls.filesController.customRowHeight"
      }),

      scrollView: SC.ScrollView.design({
        layout: { top: 0, left: 0, right: 0, bottom: 70 },
        hasHorizontalScroller: NO,
        contentView: SC.ListView.design({
          contentValueKey: 'title',
          contentIconKey:  'icon',
          contentUnreadCountKey: 'unread',
          hasContentIcon: YES,
          contentBinding: 'SampleControls.filesController',
          canEditContent: YES,
          canReorderContent: YES//,
          //selectionBinding: 'SampleControls.filesController.selection'
          // selectOnMouseDown: YES,
          // canReorderContent: YES
        })
      })
    }),
    
    dividerView: SC.SplitDividerView,
    
    bottomRightView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      contentView: SC.LabelView.design({
        value: "SC.GridView Coming Soon"
        // contentValueKey: 'title',
        // contentBinding: 'SampleControls.filesController.arrangedObjects',
        // selectionBinding: 'SampleControls.filesController.selection'
      })
    })
  })
  
});
