// ==========================================================================
// Project:   Twitter - listsPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.listsPage = SC.Page.create({
  
  mainView: SC.SplitView.design({

     layout: { top: 0, bottom: 0, left: 0, right: 0 },
     layoutDirection: SC.LAYOUT_HORIZONTAL,
     defaultThickness: 0.3,
     autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
     canCollapseViews: YES,
     topLeftMinThickness: 200,
     topLeftMaxThickness: 900,
     topLeftView: SC.ScrollView.design({
       hasHorizontalScroller: NO,
       layout: { top: 0, bottom: 0, left: 0, right: 0 },
       backgroundColor: 'white',

       contentView: SC.ListView.design({   
         classNames: ['lists'],
         hasContentIcon: YES,
         rowHeight: 60,
           contentBinding: 'Twitter.listsController.arrangedObjects',
           selectionBinding: 'Twitter.listsController.selection',

           contentValueKey: 'name'
         
       })
     }),

     dividerView: SC.SplitDividerView,

     bottomRightView: SC.SplitView.design({
        layout: { top: 0, bottom: 0, left: 0, right: 0 },
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        defaultThickness: 0.5,
        autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
        canCollapseViews: YES,
        topLeftMinThickness: 200,
        topLeftMaxThickness: 900,
        topLeftView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.ListView.design({   
            classNames: ['users'],
            hasContentIcon: YES,
            rowHeight: 60,
              contentBinding: 'Twitter.usersController.arrangedObjects',

              contentValueKey: 'screen_name'
          })
        }),

        dividerView: SC.SplitDividerView,

        bottomRightView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.ListView.design({   
            classNames: ['tweets'],
            hasContentIcon: YES,
            rowHeight: 60,
            contentBinding: 'Twitter.userTweetsController.arrangedObjects',
            selectionBinding: 'Twitter.userTweetsController.selection',
            contentValueKey: "text",     
            contentIconKey: 'profileImage'
          })
        })
      })
   })
  
});

