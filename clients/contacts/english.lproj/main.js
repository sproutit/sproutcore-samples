// ==========================================================================
// Design: Contacts.mainPage
// ==========================================================================
/*globals Contacts sc_stub */

SC.namespace('Contacts', function() {
  Contacts.mainPage = SC.Page.design({
    
    mainPane: SC.MainPane.design()
    
      // split view with source list for groups and grid view...
      .childView(SC.SplitView.design({
        
        // leave room for bar at the bottom...
        layout: SC.merge(SC.FILL_WIDTH, { top: 0, bottom: 48 }),
        
        // source list view goes inside of a scroll view.  Add ruler view to
        // bottom...this will hold the ADD button and a contact count...
        topLeftView: SC.View.design()
          .childView(SC.ScrollView.design({
            contentView: SC.SourceListView.design({
              contentBinding: 'Contacts.groupsController.arrangedObjects',
              selectionBinding: 'Contacts.groupsController.selection'
            }),
            
            layout: SC.merge(SC.ANCHOR_TOP, SC.FILL_WIDTH, { bottom: 48 })
          }))
          
          .childView(SC.ToolbarView
            .styleClass('sc-source-list-style')
            .childView(SC.ButtonView.design({
              icon: 'sc-add-icon',
              action: 'Contacts.groupsController.addGroup'
            })))
        }),
        
        // grid view.  shoow contact card.
        bottomRightView: SC.GridView.design({
          exampleView: Contacts.ContactCardView,
          contentBinding: 'Contacts.cardsController.arrangedObjects',
          selectionBinding: 'Contacts.cardsController.selection',
          
          itemWidth: 200, itemHeight: 180
        }),
        
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        topLeftThickness: 180
      }))
      
      .childView(SC.View.design()
        .layout(SC.FILL_WIDTH, SC.ANCHOR_BOTTOM, { height: 48 })
        .childView(SC.ButtonView.design({
          title: 'Edit',
          layout: { bottom: 4, left: 20, width: 100 },
          action: 'Contacts.detailController.editContact'
        }))
        
        .childView(SC.LabelView.design({
          valueBinding: 'Contacts.cardsController.displayCount'
        })))
      
  });
});