// ==========================================================================
// Project:   VideoApp.appController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals VideoApp */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
VideoApp.appController = SC.Object.create(
/** @scope VideoApp.appController.prototype */ {
  
  playAll: function(){
    VideoApp.mainPage.mainPane.playerContainer.videoPlayer1.canvasView.playPause();
    VideoApp.mainPage.mainPane.playerContainer.videoPlayer2.canvasView.playPause();
    VideoApp.mainPage.mainPane.playerContainer.videoPlayer3.canvasView.playPause();
  }
   
   
  
}) ;
