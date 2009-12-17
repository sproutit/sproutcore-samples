// ==========================================================================
// Project:   BindingsOverload.appController
// Copyright: ©2009 Apple, Inc.
// ==========================================================================
/*globals BindingsOverload */

/** @class

  This controller is responsible for the functioning of the entire app. It
  does a few things:

   1. It holds the properties to which the views are bound.
   2. It contains the method that is fired by the timer (which is itself setup
      in BindingsOverload.main in main.js).
   3. It contains and manages the pool of buttons. We recycle buttons so that
      we don't gobble up the browser's memory.

  Note that traditionally, controllers are named starting with a lower-case
  letter (BindingsOverload.appController vs BindingsOverload.AppController),
  because controllers represent a single instance, not a class.

  @extends SC.Object
*/
BindingsOverload.appController = SC.Object.create({
  /**
    The title of the buttons. This is modified when you edit the
    TextFieldView.

     @type String
  */
  title: 'Bindings Test',

  /**
    The enabled state of the buttons. This is modified when you click the
    checkbox.

    @type Boolean
  */
  isEnabled: YES,

  /**
    The button pool is an array of FlyingButtonViews.

    When a button is done with its display cycle, it calls returnToPool(),
    which pushes the view onto the array.

    Later, when the timer fires, it gets the next available FlyingButtonView
    from the pool, updates its coordinates, and appends it back to the main
    pane.

    Note that this property begins with an underscore. We name it with an
    underscore to imply that it is a private property, and that external
    classes shouldn't access it. That's why we expose a public method
    (returnToPool) to return views to the pool, instead of having them push to
    the array themselves.

    @private
    @type Array
  */
  _buttonPool: [],

  /**
    This method is fired by the timer setup in BindingsOverload.main() (in
    main.js).

    First, it checks to see if any buttons are available in the button pool.

    If there are, it gets the first available and removes it from the pool,
    then appends it to the main pane.

    If not, it creates a new button and adds it to the pane.
  */
  createNewButton: function() {
    var pool = this._buttonPool, button;

    if (pool.length > 0) {
      button = pool.pop();
    } else {
      button = BindingsOverload.FlyingButtonView.create({
        // We initially place the element offscreen so that we can
        // animate it in using transitions.
        layout: { width: 100, height: 24, top: -50 },

        // Bind the title and isEnabled properties to our controller
        titleBinding: 'BindingsOverload.appController.title',
        isEnabledBinding: 'BindingsOverload.appController.isEnabled',

        target: this,
        action: 'createNewButton'
      });
    }

    // Using getPath('mainPage.mainPane') instead of
    // get('mainPage').get('mainPane') can improve performance, because it
    // reduces the number of function calls made.
    BindingsOverload.getPath('mainPage.mainPane').appendChild(button);
  },

  /**
    Called by BindingsOverload.FlyingButtonView once it removes itself from
    its parent view. This adds it back to button pool.
  */
  returnToPool: function(button) {
    this._buttonPool.push(button);
  }
});
