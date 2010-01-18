// ==========================================================================
// Project:   Twitter - listsPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.listsPage = SC.Page.create({
  
  mainView: SC.SplitView.design({
      defaultThickness: 0.4,
      
      topLeftView: SC.ListView.design({
        contentBinding: 'Twitter.listsController.arrangedObjects',
        contentValueKey: 'name'
      })
    })
});

