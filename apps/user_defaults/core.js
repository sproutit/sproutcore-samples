// ==========================================================================
// Project:   UserDefaults
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals UserDefaults */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
UserDefaults = SC.Object.create(
  /** @scope UserDefaults.prototype */ {

  NAMESPACE: 'UserDefaults',
  VERSION: '0.1.0',

  /** Create initial user defaults */
  userDefaults: SC.UserDefaults.create({ appDomain: "UserDefaults" }),
  
  /**
    Called by the reset button 
  */
  reset: function() {
    this.get('userDefaults').resetDefault('sliderValue');
  },
  
  /**
    Called by the load button
  */
  load: function() {
    this.get('userDefaults').defaults({
      "UserDefaults:sliderValue": 75,
      "user2@UserDefaults:sliderValue": 25
    });
  }

}) ;
