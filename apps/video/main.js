// ==========================================================================
// Project:   VideoApp
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals VideoApp */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
VideoApp.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  VideoApp.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: .contactsController.set('content',.contacts);
  // VideoApp.appController.set('videoPlayer1', VideoApp.mainPage.mainPane.playerContainer.videoPlayer1.canvasView);
  // VideoApp.appController.set('videoPlayer2', VideoApp.mainPage.mainPane.playerContainer.videoPlayer2);
  // VideoApp.appController.set('videoPlayer3', VideoApp.mainPage.mainPane.playerContainer.videoPlayer3);
  // debugger;
  // VideoApp.appController.magic();
} ;

function main() { VideoApp.main(); }
