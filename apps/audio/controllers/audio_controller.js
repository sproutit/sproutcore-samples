// ==========================================================================
// Project:   Audio.audioController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Audio */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Audio.audioController = SC.ArrayController.create(
/** @scope Audio.audioController.prototype */ {
  
    audioURL: 'http://www.joshwoodward.com/mp3/JoshWoodward-IllBeRightBehindYouJosephine.mp3',
    
    audioURLObserver: function(){
      var url = this.get('selection').firstObject().get('url');
      if(url) this.set('audioURL', url);
    }.observes('selection')
    
}) ;
