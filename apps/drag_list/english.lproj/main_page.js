// ==========================================================================
// Project:   DragList - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals DragList */

// This page describes the main user interface for your application.  
DragList.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'descLabel wrapperView'.w(),
    
    wrapperView: SC.View.design({
      layout: { top: 0, bottom: 0, right: 0, left: 250 },
      childViews: 'containerView'.w(),
      
      containerView: SC.View.design(SC.Border, {
        classNames: 'main-container'.w(),

        borderStyle: SC.BORDER_GRAY,
        backgroundColor: "#dedede",
        layout: { top: 40, centerX: 0, width: 500, height: 300 },

        childViews: 'leftLabel left leftDesc rightLabel right rightDesc'.w(),

        // ..........................................................
        // LEFT SIDE
        // 

        leftLabel: SC.LabelView.design({
          layout: { top: 12, left: 20, height: 18, width: 220 },
          value: "_All Employees:",
          localize: YES
        }),

        left: SC.ScrollView.design({
          borderStyle: SC.BORDER_GRAY,
          layout: { top: 32, left: 20, bottom: 28, width: 220 },

          // IMPORTANT: configure the left-side list view
          contentView: SC.ListView.design({

            // data bindings
            contentBinding: "DragList.employeesController.arrangedObjects",
            selectionBinding: "DragList.employeesController.selection",
            delegate: DragList.dragController,

            // setup visual display
            contentValueKey: "fullName",
            hasContentIcon:  YES,
            contentIconKey:  "icon",
            rowHeight: 32,

            // enabled reordering and dragging
            canReorderContent: YES,
            isDropTarget: YES,
            
            // double-click action handling
            action: 'doubleClickedEmployees',
            target: DragList

          })
        }),

        leftDesc: SC.LabelView.design({
          layout: { bottom: 12, left: 20, height: 14, width: 220 },
          controlSize: SC.SMALL_CONTROL_SIZE,
          valueBinding: "DragList.employeesController.description"
        }),

        // ..........................................................
        // RIGHT SIDE
        // 

        rightLabel: SC.LabelView.design({
          layout: { right: 20, top: 12, height: 18, width: 220 },
          value: "_Meeting Invitees:",
          localize: YES
        }),

        right: SC.ScrollView.design({
          borderStyle: SC.BORDER_GRAY,
          layout: { right: 20, top: 32, bottom: 28, width: 220 },

          // IMPORTANT: Configure right-side of view
          contentView: SC.ListView.design({

            // data bindings
            contentBinding: "DragList.inviteesController.arrangedObjects",
            
            // note: share the same selection
            selectionBinding: "DragList.employeesController.selection",
            delegate: DragList.dragController,

            // setup visual display
            contentValueKey: "fullName",
            hasContentIcon:  YES,
            contentIconKey:  "icon",
            rowHeight: 32,

            // enabled reordering and dragging
            canReorderContent: YES,
            isDropTarget: YES

          })
        }),

        rightDesc: SC.LabelView.design({
          layout: { bottom: 12, right: 20, height: 14, width: 220 },
          controlSize: SC.SMALL_CONTROL_SIZE,
          valueBinding: "DragList.inviteesController.description"
        })
      })
      
    }),
        
    descLabel: SC.LabelView.design({
      layout: { top: 50, left: 40, width: 220, bottom: 50 },
      escapeHTML: NO,
      value: '_Demo.Description',
      localize: YES
    })
  })

});
