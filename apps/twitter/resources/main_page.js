// ==========================================================================
// Project:   Twitter - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

// This page describes the main user interface for your application.  
Twitter.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'topView tabView'.w(),

    topView: SC.View.design({
      classNames: 'topBar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: 'twitterLogo searchField loginButton'.w(),

      twitterLogo: SC.LabelView.design({
        layout: { centerY: 0, height: 55, left: 20, width: 225 },
        value: 'Twitter',
      }),
      searchField: SC.TextFieldView.design({
        layout: { centerY: 0, height: 25, left: 270, width: 300 },
        hint: "Type your search here",
        valueBinding: 'Twitter.tweetController.query'
      }),
      loginButton: SC.ButtonView.design({
        layout: { top: -3, height: 25, right: 20, width: 100 },
        title: "Login",
        target: 'Twitter.loginController',
        action: 'openDialog'
      })
    }),
    
    tabView: SC.TabView.design({
      value: 'Twitter.searchPage.mainView',

      items: [
        { title: "Search", value: "Twitter.searchPage.mainView" },
        { title: "Lists", value: "Twitter.listsPage.mainView" }
      ],

      itemTitleKey: 'title',
      itemValueKey: 'value',

      layout: { left:0, right:0, top:58, bottom:0 },

      userDefaultKey: "mainPane"

    })
  })
});
