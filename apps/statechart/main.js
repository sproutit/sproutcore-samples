main = function() {
  Statechart.bodyPage.get('mainPane').append() ;
  
  // synthesize some events
  'a b d e i f i i f a b d d e g h h c g c c'.w().forEach(function(letter) {
    var charCode ;
    
    switch (letter) {
      case 'a': charCode = 97 ; break ;
      case 'b': charCode = 98 ; break ;
      case 'c': charCode = 99 ; break ;
      case 'd': charCode = 100 ; break ;
      case 'e': charCode = 101 ; break ;
      case 'f': charCode = 102 ; break ;
      case 'g': charCode = 103 ; break ;
      case 'h': charCode = 104 ; break ;
      case 'i': charCode = 105 ; break ;
    }
    
    SC.Event.trigger(document, 'keydown', SC.Event.create({
      type: 'keydown',
      target: document,
      keyCode: letter,
      charCode: charCode,
      preventDefault: function(){ this.cancelled = YES; },
      stopPropagation: function(){ this.bubble = NO; },
      allowDefault: function() { this.hasCustomEventHandling = YES; },
      timeStamp: Date.now(),
      bubble: YES,
      cancelled: NO,
      normalized: YES
    }));
  });
  
};