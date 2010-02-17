// ==========================================================================
// Project:   TableView.Movie
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */

/** @class

  Defines a single movie for display

  @extends SC.Record
  @version 0.1
*/
TableView.Movie = SC.Record.extend(
/** @scope TableView.Movie.prototype */ {


  isSeen: SC.Record.attr(Boolean),
  title:  SC.Record.attr(String),
  rating: SC.Record.attr(Number),
  votes:  SC.Record.attr(Number),

  displayName: function() {
    return this.get('title');
  }.property('title').cacheable()
  
}) ;
