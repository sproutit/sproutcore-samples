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

    contentView: tile().title('Panel').sample(SC.ButtonView, {
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
 
      .title('Palette').height(21).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PalettePane',
        action: "showPalettePane",
        target: "SampleControls.paneController"
      })

      .title('Picker').height(21).sample(SC.ButtonView, {
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

      .title('Menu').height(21).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.Menu.popup'
      }, null, {
        theme: 'square',
        title: 'SC.Menu.dropdown'
      })
 
  })
});