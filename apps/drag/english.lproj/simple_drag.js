// ==========================================================================
// Drag
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================

require('views/red_box');
require('views/red_box_holder');

Drag.simpleDragPage = SC.Page.create({
  
  pageName: 'Drag.simpleDragPage',
  
  mainView: SC.View.design({

    childViews: [
      SC.LabelView.design({
        layout: { top: 0, left: 0, width: 400, bottom: 0 },
        escapeHTML: NO,
        classNames: 'welcome-tab',
        value: "<h1>Simple Drag and Drop</h1><p>Drag the red box from between the two boxes.</p>"
      }),
      
      Drag.RedBoxHolderView.design({
        layout: { top: 40, left: 440, width: 100, height: 100 },
        
        childViews: [
          Drag.RedBoxView.design({
            layout: { centerX: 0, centerY: 0, width: 60, height: 60 }
          })
        ]
      }),

      Drag.RedBoxHolderView.design({
        layout: { top: 180, left: 440, width: 100, height: 100 },
      })
    ]
  })
  
});
