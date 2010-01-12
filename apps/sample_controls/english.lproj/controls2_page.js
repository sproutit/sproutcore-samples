// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.controls2Page = SC.Page.create({

  // needsDesigner: YES,
  
  radioViewValue: "Item1",

  mainView: SC.ScrollView.design({
    
    classNames: 'control-tab',
    layout: { left:0, right:0, bottom:0, top: 12 },
    hasVerticalScroller: NO,
    borderStyle: SC.BORDER_NONE,

    contentView: tile().height(24).title('SC.SegmentedView').height(24).width(240).sample(
    SC.SegmentedView.extend({
      valueProbe: function() { 
        console.log("%@ value=%@".fmt(this,this.get('value')));
      }.observes('value')
    }), {
      items: "Item1 Item2 Item3".w(),
      value: "Item2"
    }, {
      items: "Item1 Item2 Item3".w(),
      value: "Item2",
      isEnabled: NO
    }, null, {
      items: [
      { value: "Item1", icon: "sc-icon-user-16" },
      { value: "Item2", icon: "sc-icon-group-16" },
      { value: "Item3", icon: "sc-icon-options-16" }],
      itemTitleKey: 'value',
      itemValueKey: 'value',
      itemIconKey: 'icon',
      value: "Item1 Item3".w()
    }, {
      items: [
      { value: "Item1", icon: "sc-icon-user-16" },
      { value: "Item2", icon: "sc-icon-group-16" },
      { value: "Item3", icon: "sc-icon-options-16" }],
      itemTitleKey: 'value',
      itemValueKey: 'value',
      itemIconKey: 'icon',
      isEnabled: NO,
      value: "Item1 Item3".w()

    }, null, {
      items: ["Item1", "Very Long Item", "Item 3"],
      value: "Very Long Item",
      allowsEmptySelection: YES
    }, {
      items: ["Item1", "Very Long Item", "Item 3"],
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
      value: YES,
      needsEllipsis: YES
    }, null, {
      title: "Long Title Exceeds Frame",
      value: YES,
      height: 36
    }, null, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: 'Regular Small'
    }, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: 'Reg Small Disabled',
      isEnabled: NO
    }, null, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: "Selected Small",
      value: YES,
      icon: 'sc-icon-folder-16'
    }, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: "Selected Small Disabled",
      value: YES,
      isEnabled: NO,
      icon: 'sc-icon-trash-16'
    }, null, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: "Mixed Small",
      value: [YES, NO]
    }, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      title: "Mixed Small Disabled",
      value: [YES, NO],
      isEnabled: NO
    })

    
    .title('SC.TextFieldView').height(21).sample(SC.TextFieldView, {
      value: "Hello World",
      hint: "Test Me"
    }, {
      value: "Hello World",
      hint: "Test Me",
      isEnabled: NO
    }, null, {
      hint: "First Name"
    }, {
      hint: "First Name",
      isEnabled: NO
    }, null, {
      hint: "Credit Card",
      validator: 'CreditCard'
    }, {
      hint: "Date",
      validator: 'Date'
    }, {
      hint: "Email",
      validator: 'email'
    }, {
      hint: "Not Empty",
      validator: 'NotEmpty'
    }, {
      hint: "Number",
      validator: 'Number'
    }, null, {
      isTextArea: YES,
      hint: "TextArea - Multiline",
      value: 'TextArea - Multiline'
    }, {
      isTextArea: YES,
      hint: "TextArea - Multiline"
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
      fontWeight: SC.BOLD_WEIGHT,
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
      fontWeight: SC.BOLD_WEIGHT,
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
      fontWeight: SC.BOLD_WEIGHT,
      controlSize: SC.TINY_CONTROL_SIZE
    }, {
      value: "Disabled Tiny Size Label",
      height: 12,
      isEnabled: NO,
      controlSize: SC.TINY_CONTROL_SIZE
    }, null, {
      value: "Editable",
      isEditable: YES
    }, {
      value: "Editable icon",
      isEditable: YES,
      icon: "sc-icon-help-16"
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

    .title('SC.WellView').height(90).sample(SC.WellView, {
      contentView: SC.RadioView.design({
        items: 'Item1 Item2 Item3'.w(),
        value: ['Item1', 'Item3'],
        layoutDirection: SC.LAYOUT_VERTICAL
      }),
      nowShowing: true,
      layout: { left: 0, top: 0, bottom: 0, right: 0 }
    })


    
  })
});