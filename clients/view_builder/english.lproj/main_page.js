// ==========================================================================
// Main Page Design
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global ViewBuilder */

console.log('mainPage');

ViewBuilder.mainPage = SC.Page.create({
  
  mainPane: SC.MainPane.design({
    childViews: [
      SC.View.design({
        childViews: [
          SC.View.design({
          })
        ]
      })
      // SC.ButtonView.design({
      //   title: "OK",
      //   layout: { bottom: 20, right: 20, width: 80, height: 21 }
      // }),
      // 
      // SC.ButtonView.design({
      //   title: "Cancel",
      //   layout: { centerX: 0, centerY: -40, width: 80, height: 21 }
      // }),
      // 
      // SC.LabelView.design({
      //   layout: { top: 20, left: 20, width: 100, height: 21 },
      //   value: "Hello!",
      //   valueBinding: "ViewBuilder.mainController.title"
      // }) 
    ]//,  

    // outlets point to particular views.  You can use these to build new 
    // views that are not in the view hierarchy, or to point to other views
    // or other objects.
    // okButton: SC.outlet('page.mainPane.childViews.0'),
    // cancelButton: SC.outlet('page.mainPane.childViews.1'),
    // label: SC.outlet('page.mainPane.childViews.2')
  })
  
});