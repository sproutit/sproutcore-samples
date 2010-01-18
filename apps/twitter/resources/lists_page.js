// ==========================================================================
// Project:   Twitter - listsPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.listsPage = SC.Page.create({
  
  mainView: SC.SplitView.design({
      layout: { bottom: 30 },
      defaultThickness: 0.4,
      
      topLeftView: SC.ListView.design({
        contentBinding: 'Twitter.listsController.arrangedObjects',
        selectionBinding: 'Twitter.listsController.selection',

        contentValueKey: 'name'
      }),
      
      bottomRightView: SC.ListView.design({
        contentBinding: 'Twitter.usersController.arrangedObjects',

        contentValueKey: 'screen_name'
      })
    })
});

