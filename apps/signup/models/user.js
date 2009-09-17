// ==========================================================================
// Project:   Signup.User
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Signup */

/** @class

  Describes the user created during signup.

  @extends SC.Record
  @version 0.1
*/
Signup.User = SC.Record.extend(
/** @scope Signup.User.prototype */ {

  firstName: SC.Record.attr(String),
  lastName:  SC.Record.attr(String),
  email:     SC.Record.attr(String),
  
  sex:       SC.Record.attr(String, { defaultValue: "Male" }), // must be MALE or FEMALE
  
  MALE: "Male",
  FEMALE: "Female",
  
  mailingList: SC.Record.attr(Boolean, { defaultValue: YES })

}) ;
