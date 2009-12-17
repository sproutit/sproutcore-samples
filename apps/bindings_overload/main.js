// ==========================================================================
// Project:   BindingsOverload
// Copyright: ©2009 Apple, Inc.
// ==========================================================================
/*globals BindingsOverload */

/**
  The main function in your namespace is the first method to be called, and
  sets the app in motion.

  We do two things here: first, we get the mainPane from the mainPage and
  append it to the DOM. Second, we setup a timer that will create the buttons
  that animate across the viewport.
*/
BindingsOverload.main = function main() {
  // mainPage is defined in resources/main_page.js
  // Usually, it will contain the panes and views that make up your app.
  BindingsOverload.getPath('mainPage.mainPane').append();

  var timer = SC.Timer.schedule({
    // Many objects in SproutCore, such as SC.Timer, use a target/action
    // pattern.
    // The target can be a property path or an object. Property paths, like
    // you see below, are preferred because they can be evaluated at runtime,
    // after classes have loaded, controllers have been instantiated, and
    // bindings have been setup.
    target: 'BindingsOverload.appController',

    // action should be a string with the name of the method to call
    action: 'createNewButton',

    // Setup constants for your app in core.js
    interval: BindingsOverload.TIMER_INTERVAL,

    // If you set repeats: YES on a timer, it will continue to fire until you
    // call invalidate() on it.
    repeats: YES
  });
};

function main() { BindingsOverload.main(); }
