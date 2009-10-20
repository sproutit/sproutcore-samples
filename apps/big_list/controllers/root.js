// ==========================================================================
// Project:   BigList.rootController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BigList */

/** @class

  The controller that represents the array of data we want to currently 
  display.

  @extends SC.ArrayController
*/
BigList.rootController = SC.ArrayController.create(
/** @scope BigList.rootController.prototype */ {

  contentBinding: 'BigList.sourceController.sourceArray'

}) ;
