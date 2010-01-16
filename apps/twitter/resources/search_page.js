// ==========================================================================
// Project:   Twitter - searchPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.searchPage = SC.Page.create({
  
  mainView: SC.SplitView.design({
    layout: { top: 0, bottom: 0, left: 0, right: 0 },
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    defaultThickness: 0.4,
    autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    canCollapseViews: YES,
    topLeftMinThickness: 200,
    topLeftMaxThickness: 900,
    topLeftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, bottom: 0, left: 0, right: 0 },
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
        textAlign: SC.ALIGN_RIGHT,
        layout: { top: 0, left: 10, right: 10, height: 25 }
      }),  
      webView: SC.WebView.design({
        layout: { top:25, left: 0, right: 0, bottom: 0 }
      })
    })
  }) 
});

