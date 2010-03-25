// ==========================================================================
// Project:   Routes
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Routes */

require('responder');

Routes.main = function main() {
  
  Routes.makeFirstResponder(Routes.states.one);
  
  SC.routes.add(':number', Routes.states.root, 'route');
  
  Routes.getPath('mainPage.mainPane').append();
};

function main() {
  console.log('MAIN START');
  Routes.main();
  console.log('MAIN END');
}
