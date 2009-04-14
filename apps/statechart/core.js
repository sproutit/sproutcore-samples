Statechart = SC.Object.create({
  
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
        console.log("-> enter s");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s");
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        console.log(".. init s substates");
        // return sc_transition('s11') ;
        return (this[this.stateKey] = this['s11'], SC.EVT_TRANSITION_RES) ;
      }
      case 'e': {
        console.log("pressed 'e' in s");
        // return sc_transition('s11') ;
        return (this[this.stateKey] = this['s11'], SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        if (this.foo) {
          console.log("pressed 'i' in s && this.foo == YES");
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
        console.log("-> enter s1");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s1");
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        console.log(".. init s1 substates");
        // return sc_transition('s11') ;
        return (this[this.stateKey] = this['s11'], SC.EVT_TRANSITION_RES) ;
      }
      case 'a': {
        console.log("pressed 'a' in s1");
        // return sc_transition('s1') ;
        return (this[this.stateKey] = this['s1'], SC.EVT_TRANSITION_RES) ;
      }
      case 'b': {
        console.log("pressed 'b' in s1");
        // return sc_transition('s11') ;
        return (this[this.stateKey] = this['s11'], SC.EVT_TRANSITION_RES) ;
      }
      case 'c': {
        console.log("pressed 'c' in s1");
        // return sc_transition('s2') ;
        return (this[this.stateKey] = this['s2'], SC.EVT_TRANSITION_RES) ;
      }
      case 'd': {
        if (!this.foo) {
          console.log("pressed 'd' is s1 && this.foo == NO");
          this.foo = YES ;
          // return sc_transition('s') ;
          return (this[this.stateKey] = this['s'], SC.EVT_TRANSITION_RES) ;
        }
        break ;
      }
      case 'f': {
        console.log("pressed 'f' in s1");
        // return sc_transition('s211') ;
        return (this[this.stateKey] = this['s211'], SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        console.log("pressed 'i' in s1");
        return sc_handled() ;
      }
    }
  }.state('s'),
  
  s11: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        console.log("-> enter s11");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s11");
        return sc_handled() ;
      }
      case 'd': {
        if (this.foo) {
          console.log("pressed 'd' in s11 && this.foo == YES");
          this.foo = NO ;
          // return sc_transition('s1') ;
          return (this[this.stateKey] = this['s1'], SC.EVT_TRANSITION_RES) ;
        }
        break;
      }
      case 'g': {
        console.log("pressed 'g' in s11");
        // return sc_transition('s211') ;
        return (this[this.stateKey] = this['s211'], SC.EVT_TRANSITION_RES) ;
      }
      case 'h': {
        console.log("pressed 'h' in s11");
        // return sc_transition('s') ;
        return (this[this.stateKey] = this['s'], SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s1'),
  
  s2: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        console.log("-> enter s2");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s2");
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        console.log(".. init s2 substates");
        // return sc_transition('s211') ;
        return (this[this.stateKey] = this['s211'], SC.EVT_TRANSITION_RES) ;
      }
      case 'c': {
        console.log("pressed 'c' in s2");
        // return sc_transition('s1') ;
        return (this[this.stateKey] = this['s1'], SC.EVT_TRANSITION_RES) ;
      }
      case 'f': {
        console.log("pressed 'f' in s2");
        // return sc_transition('s11') ;
        return (this[this.stateKey] = this['s11'], SC.EVT_TRANSITION_RES) ;
      }
      case 'i': {
        if (!this.foo) {
          console.log("pressed 'i' in s2 && this.foo == NO");
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
        console.log("-> enter s21");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s21");
        return sc_handled() ;
      }
      case SC.EVT_INIT_SIG: {
        console.log(".. init s21 substates");
        // return sc_transition('s211') ;
        return (this[this.stateKey] = this['s211'], SC.EVT_TRANSITION_RES) ;
      }
      case 'a': {
        console.log("pressed 'a' in s21");
        // return sc_transition('s21') ;
        return (this[this.stateKey] = this['s21'], SC.EVT_TRANSITION_RES) ;
      }
      case 'b': {
        console.log("pressed 'b' in s21");
        // return sc_transition('s211') ;
        return (this[this.stateKey] = this['s211'], SC.EVT_TRANSITION_RES) ;
      }
      case 'd': {
        console.log("pressed 'd' in s21");
        // return sc_transition('s2') ;
        return (this[this.stateKey] = this['s2'], SC.EVT_TRANSITION_RES) ;
      }
      case 'g': {
        console.log("pressed 'g' in s21");
        // return sc_transition('s1') ;
        return (this[this.stateKey] = this['s1'], SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s2'),
  
  s211: function(evt) {
    switch (evt.sig) {
      case SC.EVT_ENTER_SIG: {
        console.log("-> enter s211");
        return sc_handled() ;
      }
      case SC.EVT_EXIT_SIG: {
        console.log("<- exit s211");
        return sc_handled() ;
      }
      case 'h': {
        console.log("pressed 'h' in s211");
        // return sc_transition('s') ;
        return (this[this.stateKey] = this['s'], SC.EVT_TRANSITION_RES) ;
      }
    }
  }.state('s21')
  
});
