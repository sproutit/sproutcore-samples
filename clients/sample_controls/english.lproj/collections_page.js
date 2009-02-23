// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// shows demonstration of various collection views...
SampleControls.collectionsPage = SC.Page.create({
  
  // mainView: SC.View.design({ styleClass: 'collections-tab' })
  mainPane: SC.MainPane.design({ styleClass: 'collections-tab' })
    // LIST VIEW DEMO
    .childView(SC.ScrollView.design({
      classNames: 'sc-bezel-border',
      layout: { left: 20, top: 20, width: 180, bottom: 20 },
      hasHorizontalScroller: NO,
      contentView: SC.ListView.design({
        contentValueKey: 'title',
        contentIconKey:  'icon',
        hasContentIcon: YES,
        contentBinding: 'SampleControls.filesController.arrangedObjects',
        selectionBinding: 'SampleControls.filesController.selection',
        canReorderContent: YES,
        exampleView: SC.ListItemView
      })
    }))

    // COLLECTION VIEW DEMO
    .childView(SC.ScrollView.design({
      classNames: 'sc-bezel-border',
      layout: { left: 210, top: 20, right: 20, bottom: 20 }//,
      // contentView: SC.ListView.design({
      //   contentBinding: 'SampleControls.filesController.arrangedObjects',
      //   selectionBinding: 'SampleControls.filesController.selection'
      // })
    }))

});
