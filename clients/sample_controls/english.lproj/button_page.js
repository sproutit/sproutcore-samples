// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.buttonPage = SC.Page.create({
  
  radioViewValue: "Item1",
  
  mainPane: SC.MainPane.design({
        
    styleClass: ['button-tab'],
    
    childViews: [
      tile().title('SC.ButtonView').sample(SC.ButtonView, {
        theme: 'regular',
        title: 'Regular'
      }, {
        theme: 'regular',
        title: 'Reg Disabled',
        isEnabled: NO
      }, null, {
        theme: 'regular',
        title: 'Default',
        isDefault: YES
      }, {
        theme: 'regular',
        title: 'Def Disabled',
        isDefault: YES,
        isEnabled: NO
      }, null, {
        theme: 'regular',
        title: 'Selected',
        isSelected: YES
      }, {
        theme: 'regular',
        title: 'Sel Disabled',
        isSelected: YES,
        isEnabled: NO
      }, null, {
        theme: 'regular',
        title: 'Cancel',
        icon: 'sc-icon-info-16',
        isCancel: YES
      }, null, {
        theme: 'regular',
        title: 'Long Title Exceeds the Frame',
        isDefault: YES
      }, null, {
        theme: 'regular',
        
        content: SC.Object.create({
          myTitle: "Title From Content",
          myValue: YES,
          myIcon: "sc-icon-options-16"
        }),
        
        contentValueKey: 'myValue',
        contentTitleKey: 'myTitle',
        contentIconKey: 'myIcon'
      })

      .title('SC.ButtonView[Square]').sample(SC.ButtonView, {
        theme: 'square',
        title: 'Regular'
      }, {
        theme: 'square',
        title: 'Reg Disabled',
        isEnabled: NO
      }, null, {
        theme: 'square',
        title: 'Default',
        icon: 'sc-icon-user-16',
        isDefault: YES
      }, {
        theme: 'square',
        title: 'Def Disabled',
        isDefault: YES,
        isEnabled: NO
      }, null, {
        theme: 'square',
        title: 'Selected',
        isSelected: YES
      }, {
        theme: 'square',
        title: 'Sel Disabled',
        isSelected: YES,
        isEnabled: NO
      }, null, {
        theme: 'square',
        title: 'Cancel',
        isCancel: YES
      }, null, {
        theme: 'square',
        title: 'Active',
        isActive: YES
      }, {
        theme: 'square',
        title: 'Active Def',
        isActive: YES,
        isDefault: YES
      }, null, {
        theme: 'square',
        title: 'Long Title Exceeds the Frame',
        isDefault: YES
      })
            
      .title('SC.CheckboxView').height(18).sample(SC.CheckboxView, {
        title: "Regular"
      }, {
        title: "Reg Disabled",
        isEnabled: NO
      }, null, {
        title: "Selected",
        value: YES,
        icon: 'sc-icon-folder-16'
      }, {
        title: "Selected Disabled",
        value: YES,
        isEnabled: NO,
        icon: 'sc-icon-trash-16'
      }, null, {
        title: "Mixed",
        value: [YES, NO]
      }, {
        title: "Mixed Disabled",
        value: [YES, NO],
        isEnabled: NO
      }, null, {
        title: "Long Title Exceeds Frame",
        value: YES
      }, null, {
        title: "Long Title Exceeds Frame",
        value: YES,
        height: 36
      })

      .title('SC.RadioView').height(60).sample(SC.RadioView, {
        items: 'Item1 Item2 Item3'.w(),
        value: ['Item1', 'Item3'],
        layoutDirection: SC.LAYOUT_VERTICAL
      }, null, {
        items: 'Item1 Item2 Item3'.w(),
        value: ['Item1', 'Item3'],
        isEnabled: NO,
        layoutDirection: SC.LAYOUT_VERTICAL
      }, null, {
        items: 'Item1 Item2'.w(),
        value: 'Item1',
        height: 23,
        layoutDirection: SC.LAYOUT_HORIZONTAL
      }, null, {
        items: 'Item1 Item2'.w(),
        value: 'Item1',
        isEnabled: NO,
        height: 23,
        layoutDirection: SC.LAYOUT_HORIZONTAL
      }, null, {
        items: [{ title: "First Item", value: "Item1" },
          { title: "Very long title goes onto the next line", value: "Item2" },
          { title: "Loc.Title", value: "Item3" }],
        itemTitleKey: 'title',
        itemValueKey: 'value',
        height: 80,
        value: 'Item2',
        localize: YES,
        layoutDirection: SC.LAYOUT_VERTICAL
      }, null, {
        items: [
          { title: "First Item", value: "Item1", enabled: YES, icon: 'sc-icon-user-16' },
          { title: "Second Item", value: "Item2", enabled: NO, icon: 'sc-icon-options-16' },
          { title: "Third Item", value: "Item3", enabled: YES, icon: 'sc-icon-bookmark-16' }],
        itemTitleKey: 'title',
        itemValueKey: 'value',
        itemIsEnabledKey: 'enabled',
        itemIconKey: 'icon',
        height: 80,
        value: 'Item2',
        localize: YES,
        layoutDirection: SC.LAYOUT_VERTICAL
      })
      
      .title('SC.LabelView').height(18).sample(SC.LabelView, {
        value: "Basic Label"
      }, {
        value: "Loc.Label",
        localized: YES
      }, null, {
        value: "Centered Label",
        textAlign: SC.ALIGN_CENTER,
        icon: "sc-icon-group-16"
      }, null, {
        value: "Disabled Label",
        isEnabled: NO
      }, null, {
        value: "Selectable Label",
        icon: "sc-icon-help-16",
        isTextSelectable: YES
      }, null, {
        value: "Regular Size Label",
        controlSize: SC.REGULAR_CONTROL_SIZE
      }, {
        value: "Bold Regular Size Label",
        fontWeight: SC.BOLD_FONT,
        controlSize: SC.REGULAR_CONTROL_SIZE
      }, {
        value: "Dis Regular Size Label",
        isEnabled: NO,
        controlSize: SC.REGULAR_CONTROL_SIZE
      }, null, {
        value: "Small Size Label",
        height: 14,
        controlSize: SC.SMALL_CONTROL_SIZE
      }, {
        value: "Bold Small Size Label",
        height: 14,
        fontWeight: SC.BOLD_FONT,
        controlSize: SC.SMALL_CONTROL_SIZE
      }, {
        value: "Dis Small Size Label",
        height: 14,
        isEnabled: NO,
        controlSize: SC.SMALL_CONTROL_SIZE
      }, null, {
        value: "Tiny Size Label",
        height: 12,
        controlSize: SC.TINY_CONTROL_SIZE
      }, {
        value: "Bold Tiny Size Label",
        height: 12,
        fontWeight: SC.BOLD_FONT,
        controlSize: SC.TINY_CONTROL_SIZE
      }, {
        value: "Disabled Tiny Size Label",
        height: 12,
        isEnabled: NO,
        controlSize: SC.TINY_CONTROL_SIZE
      })

      .title('SC.DisclosureView').height(18).sample(SC.DisclosureView, {
        title: "Closed Disclosure"
      }, {
        title: "Reg Disabled",
        isEnabled: NO
      }, null, {
        title: "Open Disclosure",
        value: YES
      }, {
        title: "Open Disabled",
        value: YES,
        isEnabled: NO
      }, null, {
        title: "Mixed",
        value: [YES, NO]
      }, {
        title: "Mixed Disabled",
        value: [YES, NO],
        isEnabled: NO
      }, null, {
        title: "Long Title Exceeds Frame",
        value: YES
      })

      .title('SC.SegmentedView').width(200).sample(
        SC.SegmentedView.extend({
          valueProbe: function() { 
            console.log("%@ value=%@".fmt(this,this.get('value')));
          }.observes('value')
        }), 
      {
        items: "Item1 Item2 Item3".w(),
        value: "Item2"
      }, {
        items: "Item1 Item2 Item3".w(),
        value: "Item2",
        isEnabled: NO
      }, null, {
        items: "Item1 Item2 Item3".w(),
        value: "Item1 Item3".w()
      }, {
        items: "Item1 Item2 Item3".w(),
        value: "Item1 Item3".w(),
        isEnabled: NO
        
      }, null, {
        items: "Item1 Item2 Item3".w(),
        value: "Item2",
        allowsEmptySelection: YES
      }, {
        items: "Item1 Item2 Item3".w(),
        value: "Item1 Item3".w(),
        allowsEmptySelection: YES
        
      }, null, {
        items: "Item1 Item2 Item3".w(),
        value: "Item2",
        allowsMultipleSelection: YES
      }, {
        items: "Item1 Item2 Item3".w(),
        value: "Item1 Item3".w(),
        allowsMultipleSelection: YES

      }, null, {
        items: "Item1 Item2 Item3".w(),
        value: "Item2",
        allowsEmptySelection: YES,
        allowsMultipleSelection: YES
      }, {
        items: "Item1 Item2 Item3".w(),
        value: "Item1 Item3".w(),
        allowsEmptySelection: YES,
        allowsMultipleSelection: YES
      })

      
    ]
  })
  
});