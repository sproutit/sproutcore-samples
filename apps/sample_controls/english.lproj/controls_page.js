// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.controlsPage = SC.Page.create({

  // needsDesigner: YES,
  
  radioViewValue: "Item1",

  mainView: SC.ScrollView.design({
    
    classNames: 'control-tab',
    layout: { left:0, right:0, bottom:0, top: 12 },
    hasVerticalScroller: NO,

    contentView: tile().title('SC.ButtonView').sample(SC.ButtonView, {
      title: 'Regular'
    }, {
      title: 'Reg Disabled',
      isEnabled: NO
    }, null, {
      title: 'Default',
      icon: 'sc-icon-user-16',
      isDefault: YES
    }, {
      title: 'Def Disabled',
      isDefault: YES,
      isEnabled: NO
    }, null, {
      title: 'Selected',
      isSelected: YES,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
    }, {
      title: 'Sel Disabled',
      isSelected: YES,
      isEnabled: NO,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
    }, null, {
      title: 'Cancel',
      icon: 'sc-icon-info-16',
      isCancel: YES
    }, null, {
      title: 'Long Title Exceeds the Frame',
      isDefault: YES
    }, null, {
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      content: SC.Object.create({
        myTitle: "Title From Content",
        myValue: YES,
        myIcon: "sc-icon-options-16"
      }),

      contentValueKey: 'myValue',
      contentTitleKey: 'myTitle',
      contentIconKey: 'myIcon'
    })

    .title('SC.ButtonView[Square]').height(21).sample(SC.ButtonView, {
      title: 'Regular'
    }, {
      title: 'Reg Disabled',
      isEnabled: NO
    }, null, {
      title: 'Default',
      isDefault: YES
    }, {
      title: 'Def Disabled',
      isDefault: YES,
      isEnabled: NO
    }, null, {
      title: 'Selected',
      isSelected: YES,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
    }, {
      title: 'Sel Disabled',
      isSelected: YES,
      isEnabled: NO,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
    })

    .title('SC.ButtonView[Capsule]').height(21).sample(SC.ButtonView, {
      theme: 'capsule',
      title: 'Regular'
    }, {
      theme: 'capsule',
      title: 'Reg Disabled',
      isEnabled: NO
    }, null, {
      theme: 'capsule',
      title: 'Default',
      isDefault: YES
    }, {
      theme: 'capsule',
      title: 'Def Disabled',
      isDefault: YES,
      isEnabled: NO
    }, null, {
      theme: 'capsule',
      title: 'Selected',
      isSelected: YES,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
    }, {
      theme: 'capsule',
      title: 'Sel Disabled',
      isSelected: YES,
      isEnabled: NO,
      buttonBehavior: SC.TOGGLE_BEHAVIOR
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
    }, null, null, null, {
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
    }, null, null, null, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      items: 'Item1 Item2 Item3'.w(),
      value: ['Item1', 'Item3'],
      layoutDirection: SC.LAYOUT_VERTICAL
    }, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      items: 'Item1 Item2 Item3'.w(),
      value: ['Item1', 'Item3'],
      isEnabled: NO,
      layoutDirection: SC.LAYOUT_VERTICAL
    }, null, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      items: 'Item1 Item2'.w(),
      value: 'Item1',
      height: 23,
      layoutDirection: SC.LAYOUT_HORIZONTAL
    }, {
      controlSize: SC.SMALL_CONTROL_SIZE,
      items: 'Item1 Item2'.w(),
      value: 'Item1',
      isEnabled: NO,
      height: 23,
      layoutDirection: SC.LAYOUT_HORIZONTAL
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
      })

      .title('SC.SliderView').height(18).sample(SC.SliderView, {
        value: 50, minimum: 0, maximum: 100
      },{
        value: 50, minimum: 0, maximum: 100,
        isEnabled: NO

      }, null, {
        value: 0, minimum: 0, maximum: 100
      },{
        value: 0, minimum: 0, maximum: 100,
        isEnabled: NO

      }, null, {
        value: 100, minimum: 0, maximum: 100, step: 20
      },{
        value: 100, minimum: 0, maximum: 100,
        isEnabled: NO

      })


      .title('SC.ProgressView').height(14).sample(SC.ProgressView, {
        value: 25,
        minimum: 0,
        maximum: 100
      }, {  
        value: 25,
        minimum: 0,
        maximum: 100,
        isEnabled: NO
      }, null, {
        value: 0,
        minimum: 0,
        maximum: 100,

        init: function() {
          sc_super();
          this.timerProgress.invokeLater(this, 1000);
        },

        change: 1,

        timerProgress: function() {
          var v=  this.get('value')+this.change;
          if (this.change>0 && v>=100) {
            this.change = -1;
          } else if (this.change<0 && v<=0) {
            this.change = 1 ;
          }

          this.set('value', v);
          this.timerProgress.invokeLater(this, 1000/30);
        }
      }, {  
        value: 0,
        minimum: 0,
        maximum: 100,
        isEnabled: NO
      }, null, {
        value: 100,
        minimum: 0,
        maximum: 100
      }, {  
        value: 100,
        minimum: 0,
        maximum: 100,
        isEnabled: NO
      }, null, {
        isIndeterminate: YES,
        value: 50,
        minimum: 0,
        maximum: 100,
        isRunning: YES
      }, {  
        isIndeterminate: YES,
        value: 50,
        minimum: 0,
        maximum: 100,
        isEnabled: NO,
        isRunning: YES
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

      .title('SC.SegmentedView').width(240).sample(
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
    })
  }); 