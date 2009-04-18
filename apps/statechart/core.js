Statechart = SC.Object.create({
  
  trace: YES, // enable statechart tracing...
  
  init: function() {
    sc_super() ;
    this.foo = NO ;
    
    // initialize the hierarchical state machine manually for now...
    this.initStatechart() ;
  },
  
  // dispatch synthesized events manually for now...
  keyDown: function(evt) {
    console.log('%@.keyDown(evt="%@")'.fmt(this, evt));
    var text = evt.getCharString() ;
    switch (text) {
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'g':
      case 'h':
      case 'q':
        return this.dispatch({ sig: text }) ;
    }
    return NO ;
  },
  
  initial: 's2', // the initial state to enter...
  
  s: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        // return sc_transition('s11') ;
        return (this[this.stateKey] = 's11', SC.EVT_TRANSITION_RES) ;
      }
      case 'e': {
        // return sc_transition('s11') ;
        return (this[this.stateKey] = 's11', SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        if (this.foo) {
          this.foo = NO ;
          return sc_handled() ;
        }
        break ;
      }
      case 'q': {
        window.location = 'http://www.google.com' ; // goodbye!
        return sc_terminate() ;
      }
    }
  }.state(),
  
  s1: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        // return sc_transition('s11') ;
        return (this[this.stateKey] = 's11', SC.EVT_TRANSITION_RES) ;
      }
      case 'a': {
        // return sc_transition('s1') ;
        return (this[this.stateKey] = 's1', SC.EVT_TRANSITION_RES) ;
      }
      case 'b': {
        // return sc_transition('s11') ;
        return (this[this.stateKey] = 's11', SC.EVT_TRANSITION_RES) ;
      }
      case 'c': {
        // return sc_transition('s2') ;
        return (this[this.stateKey] = 's2', SC.EVT_TRANSITION_RES) ;
      }
      case 'd': {
        if (!this.foo) {
          this.foo = YES ;
          // return sc_transition('s') ;
          return (this[this.stateKey] = 's', SC.EVT_TRANSITION_RES) ;
        }
        break ;
      }
      case 'f': {
        // return sc_transition('s211') ;
        return (this[this.stateKey] = 's211', SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        return sc_handled() ;
      }
    }
  }.state('s'),
  
  s11: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case 'd': {
        if (this.foo) {
          this.foo = NO ;
          // return sc_transition('s1') ;
          return (this[this.stateKey] = 's1', SC.EVT_TRANSITION_RES) ;
        }
        break;
      }
      case 'g': {
        // return sc_transition('s21') ;
        return (this[this.stateKey] = 's21', SC.EVT_TRANSITION_RES) ;
      }
      case 'h': {
        // return sc_transition('s') ;
        return (this[this.stateKey] = 's', SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s1'),
  
  s2: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        // return sc_transition('s211') ;
        return (this[this.stateKey] = 's211', SC.EVT_TRANSITION_RES) ;
      }
      case 'c': {
        // return sc_transition('s1') ;
        return (this[this.stateKey] = 's1', SC.EVT_TRANSITION_RES) ;
      }
      case 'f': {
        // return sc_transition('s11') ;
        return (this[this.stateKey] = 's11', SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        if (!this.foo) {
          this.foo = YES ;
          return sc_handled() ;
        }
        break;
      }
    }
  }.state('s'),
  
  s21: function(evt){
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        // return sc_transition('s211') ;
        return (this[this.stateKey] = 's211', SC.EVT_TRANSITION_RES) ;
      }
      case 'a': {
        // return sc_transition('s21') ;
        return (this[this.stateKey] = 's21', SC.EVT_TRANSITION_RES) ;
      }
      case 'b': {
        // return sc_transition('s211') ;
        return (this[this.stateKey] = 's211', SC.EVT_TRANSITION_RES) ;
      }
      case 'g': {
        // return sc_transition('s1') ;
        return (this[this.stateKey] = 's1', SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s2'),
  
  s211: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        return sc_handled() ;
      }
      case 'd': {
        // return sc_transition('s2') ;
        return (this[this.stateKey] = 's21', SC.EVT_TRANSITION_RES) ;
      }
      case 'h': {
        // return sc_transition('s') ;
        return (this[this.stateKey] = 's', SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s21')
  
});
