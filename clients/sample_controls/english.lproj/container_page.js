// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls */

SampleControls.containerPage = SC.Page.create({
  
  mainPane: SC.MainPane.design({
    
    styleClass: ['container-tab'],
    
    childViews: [
      SC.ContainerView.design({
        nowShowingBinding: 'SampleControls.containerController.nowShowing',
        layout: { left: 200, top: 20, bottom: 20, right: 20 }
      }),
      
      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 20, height: 23 },
        title: "Show Container1",
        action: "showContainer1",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 51, height: 23 },
        title: "Show Container2",
        action: "showContainer2",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 82, height: 23 },
        title: "Show Container3",
        action: "showContainer3",
        target: "SampleControls.containerController"
      })
    ]
  }),

  container1: SC.LabelView.design({
    value: "Container1",
    layout: { left: 40, centerY: 0, right: 40, height: 40 },
    tagName: 'h1'
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