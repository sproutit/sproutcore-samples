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
    childViews: 'middleView topView'.w(),

    topView: SC.View.design({
      classNames: 'topBar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: 'twitterLogo searchField'.w(),

      twitterLogo: SC.ImageView.design({
        layout: { centerY: 0, height: 55, left: 20, width: 225 },
        value: 'http://a1.twimg.com/a/1257878623/images/logo.png',
        useImageCache: NO
      }),
      searchField: SC.TextFieldView.design({
        layout: { centerY: 0, height: 25, left: 270, width: 300 },
        hint: "Type your search here"
      })
    }),
    
    
    middleView: SC.SplitView.design({
      layout: { top: 70, bottom: 0, left: 0, right: 0 },
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      defaultThickness: 0.5,
      autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
      canCollapseViews: YES,
      topLeftMinThickness: 200,
      topLeftMaxThickness: 900,
      topLeftView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        layout: { top: 70, bottom: 0, left: 0, right: 0 },
        backgroundColor: 'white',

        contentView: SC.ListView.design({   
          classNames: ['twetts'],
          hasContentIcon: YES,
          rowHeight: 60
        })
      }),

      dividerView: SC.SplitDividerView,

      bottomRightView: SC.View.design({
        childViews: 'address webView'.w(),
      
        address: SC.LabelView.design({
          layout: { top: 0, left: 10, right: 0, height: 25 }
        }),  
        webView: SC.WebView.design({
          layout: { top:25, left: 0, right: 0, bottom: 0 }
        })
      })
    })
  })
});
