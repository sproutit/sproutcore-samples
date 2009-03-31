// ==========================================================================
// Project:   MenuView - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals MenuView */

var iconURL = "http://www.freeiconsweb.com/Icons/16x16_people_icons/People_046.gif";
var method = function() { console.log("done"); };
var anchor, pane;
// This page describes the main user interface for your application.  
MenuView.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design()
    .childView( SC.PopupButtonView.design({
        title: 'Sample',
        action: 'showMenu',
        target: 'MenuView.menuController',
        layout: {left: 10, top: 10, height: 20, width: 80 }
      }))
  });
