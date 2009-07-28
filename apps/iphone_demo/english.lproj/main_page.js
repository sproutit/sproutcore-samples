// ==========================================================================
// Project:   IphoneDemo - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals IphoneDemo */

// This page describes the main user interface for your application.  
IphoneDemo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'imageView buttonView'.w(),
    
    imageView: SC.View.design({
      layout: { top: 140, centerX: 0, height: 64, width: 64 },
      tagName: 'img',
      render: function(context) { 
        var url = sc_static('images/sproutcore-logo');
        context.attr('src', url);
      }
    }),
    
    buttonView: SC.ButtonView.design({
      layout: { centerY: 0, left: 10, right: 10, height: 46 },
      title: "SproutCore!"
    })
  })

});
