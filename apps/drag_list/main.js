// ==========================================================================
// Project:   DragList
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
DragList.main = function main() {

  // show the view - hides the loading 
  DragList.getPath('mainPage.mainPane').append() ;

  // set the initial data
  var employees = this.store.findAll(DragList.Employee);
  DragList.employeesController.set('content', employees);

} ;

function main() { DragList.main(); }
