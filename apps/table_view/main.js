// ==========================================================================
// Project:   TableView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */

TableView.main = function main() {

  TableView.getPath('mainPage.mainPane').append() ;

  var movies = TableView.store.findAll(TableView.Movie);
  TableView.moviesController.set('content', movies);  
  TableView.moviesController.set('columnNames', "title votes rating".w());

} ;

function main() { TableView.main(); }
