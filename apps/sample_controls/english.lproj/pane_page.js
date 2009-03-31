// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.panelPage = SC.Page.create({

  mainView: SC.ScrollView.design({
    
    classNames: 'control-tab',
    layout: { left:0, right:0, bottom:0, top: 12 },
    hasVerticalScroller: NO,

    contentView: tile().title('Panel').height(21).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.Panel',
	      action: "showPanel",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.SheetPane',
	      action: "showSheetPane",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPanel.warn',
	      action: "showAlertPanelWarn",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPanel.error',
	      action: "showAlertPanelError",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPanel.info',
	      action: "showAlertPanelInfo",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPanel.plain',
	      action: "showAlertPanelPlain",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.AlertPane.show',
	      action: "showAlertPanelShow",
	      target: "SampleControls.panelController"
      })
 
      .title('Palette').height(21).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PalettePane',
	      action: "showPalettePane",
	      target: "SampleControls.panelController"
      })

      .title('Picker').height(21).sample(SC.ButtonView, {
        theme: 'square',
        title: 'SC.PickerPane.default',
	      action: "showPickerPaneDefault",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.menu',
	      action: "showPickerPaneMenu",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.fixed',
	      action: "showPickerPaneFixed",
	      target: "SampleControls.panelController"
      }, null, {
        theme: 'square',
        title: 'SC.PickerPane.pointer',
	      action: "showPickerPanePointer",
	      target: "SampleControls.panelController"
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