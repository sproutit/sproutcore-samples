// ==========================================================================
// Project:   Outline
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Outline */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Outline.main = function main() {
  Outline.getPath('mainPage.mainPane').append() ;
  Outline.rootController.set('content', Outline.Content.create());
} ;

function main() { Outline.main(); }
