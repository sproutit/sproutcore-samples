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
      
      //Code for Selector
      .title('Selector').height(24).sample(SC.Selector, {

        //Type1 - selectionValue not defined by the user
        title: 'SC.Selector',
        objects: [ { title: "Type 1", icon: 'selector-icon'},
          { title: "vanilla", icon: 'selector-icon', pos: 1 },
          { title: "chocolate", icon: 'selector-icon', pos: 2 },
          { title: "straberry", icon: 'selector-icon', pos: 3 },
          { title: "lemon", icon: 'selector-icon', pos: 4 }],
        nameKey: 'title',
        iconKey: 'icon',
        value: 'chicolate',
        valueKey: 'title',
        sortKey: 'pos',
        checkboxEnabled: YES
      }, null, {

        //Type2 - selectionValue specified by user
        title: 'SC.Selector',
        objects: [{ title: "None", icon: 'selector-icon'},
          { title: "Low", icon: 'selector-icon' },
          { title: "Medium", icon: 'selector-icon' },
          { title: "High", icon: 'selector-icon' },
          { title: "Type 2", icon: 'selector-icon' }],
        nameKey: 'title',
        value: 'Type 2',
        valueKey: 'title',
        checkboxEnabled: YES
      })
      //End of Selector
  })
});