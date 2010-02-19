// ==========================================================================
// Project:   BundleTest - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BundleTest */

"import package sproutcore";
"import core";

// This page describes the main user interface for your application.
BundleTest.mainPage = SC.Page.design({
  
  mainPane: SC.MainPane.design({
    childViews: 'builtinView staticView dynamicView'.w(),
    
    builtinView: SC.View.design({
      classNames: 'builtin',
      layout: {left:0, top:0, height: 50, right: 0}
    }),
    
    dynamicView: SC.View.design({
      classNames: 'dynamic',
      layout: {left:0, top:50, bottom: 50, right: 0},
      childViews: 'buttonView'.w(),
      
      buttonView: SC.ButtonView.design({
        layout: { width:250, height:24, centerX:0, centerY:0 },
        title: "Load 'bundle_test/dynamic' framework",
        target: BundleTest,
        action: 'loadDynamicFramework'
      })
    }),
    
    staticView: SC.View.design({
      classNames: 'static',
      layout: {left:0, height:50, bottom: 0, right: 0}
    })
  })
  
});
