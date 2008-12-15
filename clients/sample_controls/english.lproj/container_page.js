// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls */

SampleControls.containerPage = SC.Page.create({
  
  mainView: SC.View.design({
    
    styleClass: ['container-tab'],
    
    childViews: [
      SC.ContainerView.design({
        nowShowingBinding: 'SampleControls.containerController.nowShowing',
        layout: { left: 200, top: 20, bottom: 20, right: 20 }
      }),
      
      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 20, height: 21 },
        title: "Show Split View",
        action: "showContainer1",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 51, height: 21 },
        title: "Show Container2",
        action: "showContainer2",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 82, height: 21 },
        title: "Show Container3",
        action: "showContainer3",
        target: "SampleControls.containerController"
      })
    ]
  }),

  container1: SC.SplitView.design({
    layout: { left: 0, top: 0, right: 0, bottom: 0 },
    layoutDirection: SC.LAYOUT_VERTICAL,
    topLeftDefaultThickness: 0.5, // a number between 0 and 1.0
    // topLeftMinSpan: 0,
    // topLeftMaxSpan: 0, // denotes "unlimited"
    // bottomRightMinSpan: 0,
    // bottomRightMaxSpan: 0, // denotes "unlimited"
    autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    dividerThickness: 7,
    
    childViews: [
      SC.View.design({
        layout: {},
        styleClass: 'red'.w(),
        childViews: [
          SC.LabelView.design({
            value: "Top/Left",
            layout: { left: 40, centerY: 0, right: 40, height: 20 },
            tagName: 'h1'
          })
        ]
      }),
      SC.SplitDividerView.design({
        layout: {},
        styleClass: 'green'.w()
      }),
      SC.View.design({
        layout: {},
        styleClass: 'blue'.w(),
        childViews: [
          SC.LabelView.design({
            value: "Bottom/Right",
            layout: { left: 40, centerY: 0, right: 40, height: 20 },
            tagName: 'h1'
          })
        ]
      })
    ],
    
    topLeftView: SC.outlet('page.container1.childViews.0'),
    dividerView: SC.outlet('page.container1.childViews.1'), // a divider view *is* repositioned by SC.SplitView (optional)
    bottomRightView: SC.outlet('page.container1.childViews.2'),
    // thumbViews: ['page.thumbViewOne', 'page.thumbViewTwo'] // thumbViews are not repositioned by SC.SplitView
  }),

  container2: SC.LabelView.design({
    value: "Container2",
    layout: { left: 40, centerY: 0, right: 40, height: 40 },
    tagName: 'h1'
  }),

  container3: SC.LabelView.design({
    value: "Container3",
    layout: { left: 40, centerY: 0, right: 40, height: 40 },
    tagName: 'h1'
  })
  
});