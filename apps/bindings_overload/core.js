// ==========================================================================
// Project:   BindingsOverload
// Copyright: ©2009 Apple, Inc.
// ==========================================================================
/*globals BindingsOverload */

/** @namespace

  Bindings Overload demonstrates how easy it is to have lots of views in your
  app that get their state through bindings, rather than glue code. Simply
  updating the value of the property to which the views are bound updates them
  all instantaneously.

  In this case, we don't even have to write any code to update the bindings.

  The app consists of two controls: an SC.TextFieldView and an
  SC.CheckboxView. They are bound to the title and isEnabled properties of the
  appController (controllers/app.js), respectively. Whenever they are updated
  by the user, the bound properties update automatically.

  When the app starts, it creates a timer in BindingsOverload.main (in
  main.js) that calls appController.createNewButton() every few milliseconds.
  This method creates a new button and appends it to the main pane. To
  demonstrate the flexibility of bindings, each new button is bound to
  appController.title and appController.isEnabled. As you change these
  properties using the controls in the center of the screen, note that all of
  the buttons whizzing around the screen update in real-time.

  Keep in mind that this demo uses WebKit transitions to do its thing--it will
  work in Firefox or IE, but it won't look as cool.

  @extends SC.Object
*/
BindingsOverload = SC.Application.create(
  /** @scope BindingsOverload.prototype */ {

  NAMESPACE: 'BindingsOverload',
  VERSION: '0.1.0',

  /**
    Constant used to configure the timer. This determines how often the timer
    fires.

    @type Number
  */
  TIMER_INTERVAL: 200
}) ;
