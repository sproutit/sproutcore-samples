// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

sc_require('views/control_sample');


SampleControls.panePage = SC.Page.create({

  mainView: SC.ScrollView.design({
    
    classNames: 'control-tab',
    layout: { left:0, right:0, bottom:0, top: 12 },
    hasVerticalScroller: NO,

    contentView: tile().title('Panel').height(24).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PanelPane',
        action: "showPanelPane",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.SheetPane',
        action: "showSheetPane",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.warn',
        action: "showAlertPaneWarn",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.error',
        action: "showAlertPaneError",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.info',
        action: "showAlertPaneInfo",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.plain',
        action: "showAlertPanePlain",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.show',
        action: "showAlertPaneShow",
        target: "SampleControls.paneController"
      })
 
      .title('Palette').height(24).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PalettePane',
        action: "showPalettePane",
        target: "SampleControls.paneController"
      })

      .title('Picker').height(24).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PickerPane.default',
        action: "showPickerPaneDefault",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.menu',
        action: "showPickerPaneMenu",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.fixed',
        action: "showPickerPaneFixed",
        target: "SampleControls.paneController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.pointer',
        action: "showPickerPanePointer",
        target: "SampleControls.paneController"
      })

      .title('Menu').height(24).sample(SC.PopupButtonView, {
        theme: 'square',
        title: 'SC.Menu.popup',
        action: "showMenuPane",
        target: "SampleControls.paneController"
      })
      
      //Code for DropDownMenu
      .title('Drop Down').height(24).sample(SC.DropDownMenu, {

        //Type1 - selectionValue not defined by the user
        title: 'SC.DropDownMenu',
        objects: [ { title: "Type 1", icon: 'drop-down-icon'},
          { title: "vanilla", icon: 'drop-down-icon', pos: 1 },
          { title: "chocolate", icon: 'drop-down-icon', pos: 2 },
          { title: "straberry", icon: 'drop-down-icon', pos: 3 },
          { title: "lemon", icon: 'drop-down-icon', pos: 4 }],
        nameKey: 'title',
        iconKey: 'icon',
        value: 'chicolate',
        valueKey: 'title',
        sortKey: 'pos',
        checkboxEnabled: YES
      }, null, {

        //Type2 - selectionValue specified by user
        title: 'SC.DropDownMenu',
        objects: [{ title: "None", icon: 'drop-down-icon'},
          { title: "Low", icon: 'drop-down-icon' },
          { title: "Medium", icon: 'drop-down-icon' },
          { title: "High", icon: 'drop-down-icon' },
          { title: "Type 2", icon: 'drop-down-icon' }],
        nameKey: 'title',
        value: 'Type 2',
        valueKey: 'title',
        checkboxEnabled: YES
      })
      //End of DropDownMenu
  })
});