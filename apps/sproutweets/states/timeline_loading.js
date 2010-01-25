// ==========================================================================
// Project:   Sproutweets.TIMELINE_LOADING
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your State Here)

  @extends SC.Responder
*/
Sproutweets.TIMELINE_LOADING = SC.Responder.create(
/** @scope Sproutweets.TIMELINE_LOADING.prototype */ {
  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  // ..........................................................
  // EVENTS
  //
  didBecomeFirstResponder: function() {
    var query = SC.Query.local(Twitter.Tweet, {
      orderBy: 'id DESC'
    });
    var timeline = Sproutweets.store.find(query);
    timeline.addObserver('status', this, this.timelineStatusDidChange);
    this.set('timeline', timeline);
    Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', 'Sproutweets.timelinePage.loadingView');
  },
  
  timelineStatusDidChange: function() {
    var timeline = this.get('timeline'),
        status = timeline.get('status');
        
    if (status & SC.Record.READY) {
      Sproutweets.timelineController.set('content', timeline);
      Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', 'Sproutweets.timelinePage.timelineView');
    } else if (status & SC.Record.ERROR) {
      
    }
  },
  
  willLoseFirstResponder: function() {
    var timeline = this.get('timeline');
    Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', '');
    
    if (timeline) {
      timeline.removeObserver('status', this, this.timelineStatusDidChange);
    }
  }
}) ;
