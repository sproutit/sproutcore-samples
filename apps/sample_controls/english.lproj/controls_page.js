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
    borderStyle: SC.BORDER_NONE,

    contentView: tile().height(24).title('SC.ButtonView').sample(SC.ButtonView, {
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

    .title('SC.ButtonView[Square]').height(24).sample(SC.ButtonView, {
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

    .title('SC.ButtonView[Capsule]').height(24).sample(SC.ButtonView, {
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
    }, null, {
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

    .title('SC.SliderView').height(21).sample(SC.SliderView, {
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

    .title('SC.ProgressView').height(20).sample(SC.ProgressView, {
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
        this.timerProgress.invokeLater(this, 30);
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
    
  })
}); 
