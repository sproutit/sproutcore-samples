// ==========================================================================
// Project:   BindingsOverload - mainPage
// Copyright: ©2009 Apple, Inc.
// ==========================================================================
/*globals BindingsOverload */

/**
  SC.Page is like a container that holds all of the bits and pieces of your
  user interface. Typically, that means your panes and views. If you come from
  a Cocoa background, you can think of a page as similar to a nib file.

  Panes are a special kind of view that do not require a parent view. They are
  appended directly to the DOM as a child of the body tag. The majority of
  your UI usually resides in an instance of MainPane.

  We define the UI of our app below, but note that it's not actually shown on
  the screen until we append it in BindingsOverload.main (main.js).
*/
BindingsOverload.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    // Set the childViews array to the name of the view's subviews.
    // w() is a String convenience method, short for words, that converts a
    // string (like 'view1 view2 view3') into an array (like ['view1',
    // 'view2','view3'])
    childViews: 'controlBox'.w(),

    controlBox: SC.View.design({
      layout: { width: 400, height: 140, centerX: 0, centerY: 0 },
      childViews: 'titleField enabledCheckbox instructions'.w(),

      // We set the classNames property so we can style the div
      // (in resources/main_page.css)
      classNames: 'bindings-controls'.w(),

      titleField: SC.TextFieldView.design({
        layout: { top: 15, left: 10, width: 200, height: 30 },

        // Create a binding by concatenating the property (value) with the
        // suffix 'Binding', followed by the property path to which we want to
        // bind.
        valueBinding: 'BindingsOverload.appController.title'
      }),

      enabledCheckbox: SC.CheckboxView.design({
        layout: { top: 25, right: 15, width: 80, height: 16 },
        title: "Enabled",

        // Same as above, we bind the value of the view to our controller
        valueBinding: 'BindingsOverload.appController.isEnabled'
      }),

      instructions: SC.LabelView.design({
        layout: { top: 80, left: 10, right: 10 },
        classNames: ['instructions'],
        value: 'Enter some text in the field above to change the title of the button, or click the checkbox to enable or disable the button.  Note that without any glue code, every button is updated instantaneously.'
      })
    })
  })

});
