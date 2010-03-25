/*global Routes*/

Routes.states = {};

Routes.states.root = SC.Responder.create({

  go: function(number) {
    var responder;
    
    if (SC.typeOf(number) !== SC.T_STRING) {
      number = number.get('title');
    }
    
    if (!Routes.states.hasOwnProperty(number)) {
      number = 'one';
    }
    
    SC.routes.set('location', number);
    document.title = "Routes: %@".fmt(number);
    Routes.makeFirstResponder(Routes.states[number]);
  },
  
  route: function(route) {
    this.go(route.number);
  }

});

Routes.states.one = SC.Responder.create({
  nextResponder: Routes.states.root
});

Routes.states.two = SC.Responder.create({
  nextResponder: Routes.states.root
});

Routes.states.three = SC.Responder.create({
  nextResponder: Routes.states.root
});

Routes.states['éàçùß€'] = SC.Responder.create({
  nextResponder: Routes.states.root  
});
