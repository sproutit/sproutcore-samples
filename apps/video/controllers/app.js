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
  
  videoPlayer1:null,
  videoPlayer2:null,
  videoPlayer3:null,
  
  currentTime1 : 0, //current time in secs
  duration1 : 0, //video duration in secs
  volume1:0, //volume value from 0 to 1
  size1:0, //total size of file
  loadedData1:0, //loaded bits
  paused1: YES, //is the video paused
  loaded1: NO, //has the video loaded
  ended1: NO, //did the video finished playing
  canPlay1: NO, //can the video be played
  videoWidth1:0,
  videoHeight1:0,
  captionsEnabled1: NO,
  time1: '00:00/00:00'
   
   // currentTime2 : 0, //current time in secs
   //    duration2 : 0, //video duration in secs
   //    volume2:0, //volume value from 0 to 1
   //    size2:0, //total size of file
   //    loadedData2:0, //loaded bits
   //    paused2: YES, //is the video paused
   //    loaded2: NO, //has the video loaded
   //    ended2: NO, //did the video finished playing
   //    canPlay2: NO, //can the video be played
   //    videoWidth2:0,
   //    videoHeight2:0,
   //    captionsEnabled2: NO,
   // 
   //    time2: '00:00/00:00',
   //    
   //    currentTime3 : 0, //current time in secs
   //     duration3 : 0, //video duration in secs
   //     volume3:0, //volume value from 0 to 1
   //     size3:0, //total size of file
   //     loadedData3:0, //loaded bits
   //     paused3: YES, //is the video paused
   //     loaded3: NO, //has the video loaded
   //     ended3: NO, //did the video finished playing
   //     canPlay3: NO, //can the video be played
   //     videoWidth3:0,
   //     videoHeight3:0,
   //     captionsEnabled3: NO,
   // 
   //     time3: '00:00/00:00',
   //  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // 
    // magic: function(){
    //          this.videoPlayer1.propertiesView.set('videoView', this.get('videoPlayer1'));
    //          //this.videoPlayer2.controlsView.set('target', this.videoPlayer2.get('canvasView'));
    //          //this.videoPlayer2.controlsView.set('target', this.videoPlayer3.get('canvasView'));
    //        }
    // 
    // 
    // playPause: function() {
    //   var pb=VideoApp.mainPage.mainPane.playerContainer.videoPlayer1.canvasView;
    //   pb.playPause();
    // },
    // 
    // 
    // theatherMode: function() {
    //   
    //   var mp=VideoApp.mainPage.mainPane;
    //   var cl = mp.get('classNames');
    //   if(cl.indexOf('theather_mode')!=-1){
    //     cl.pop();
    //     mp.set('classNames', cl);
    //   }
    //   else{
    //     mp.set('classNames', cl.concat('theather_mode'));
    //   }
    //   mp.displayDidChange();
    //   var pb=VideoApp.mainPage.mainPane.playerContainer.videoPlayer1.canvasView;
    //   pb.$()[0].webkitEnterFullScreen();
    // }
  
}) ;
