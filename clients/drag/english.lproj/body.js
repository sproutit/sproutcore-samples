// ==========================================================================
// Drag
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================

Drag.bodyPage = SC.Page.create({
  
  pageName: 'Drag.bodyPage',
  
  mainPane: SC.MainPane.design({

    childViews: [SC.TabView.design({
      
      nowShowing: 'welcome',

      items: [
        { title: "Welcome", value: "welcome" } //,
        // { title: "Controls", value: "SampleControls.controlsPage.mainView" },
        // { title: "Collections", value: "SampleControls.collectionsPage.mainView" },
        // { title: "Form", value: "SampleControls.formsPage.mainView" },
        // { title: "Icons", value: "SampleControls.iconsPage.mainView" }
      ],
      
      itemTitleKey: 'title',
      itemValueKey: 'value',
            
      layout: { left:12, right:12, top:12, bottom:12 },

    })]
    
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    styleClass: 'welcome-tab',
    value: "<h1>Drag and Drop</h1><p>SproutCore comes with a full-featured, easy-to-use and robust drag and drop architecture. This sample application shows how to use it.</p>"
  })
  
});
