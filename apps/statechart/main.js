main = function() {
  Statechart.bodyPage.get('mainPane').append() ;
  
  Statechart.dispatch({ sig: 'a'}) ;
  Statechart.dispatch({ sig: 'b'}) ;
  Statechart.dispatch({ sig: 'd'}) ;
  Statechart.dispatch({ sig: 'e'}) ;
  Statechart.dispatch({ sig: 'i'}) ;
  Statechart.dispatch({ sig: 'f'}) ;
  Statechart.dispatch({ sig: 'i'}) ;
  Statechart.dispatch({ sig: 'i'}) ;
  Statechart.dispatch({ sig: 'f'}) ;
  Statechart.dispatch({ sig: 'a'}) ;
  Statechart.dispatch({ sig: 'b'}) ;
  Statechart.dispatch({ sig: 'd'}) ;
  Statechart.dispatch({ sig: 'd'}) ;
  Statechart.dispatch({ sig: 'e'}) ;
  Statechart.dispatch({ sig: 'g'}) ;
  Statechart.dispatch({ sig: 'h'}) ;
  Statechart.dispatch({ sig: 'h'}) ;
  Statechart.dispatch({ sig: 'c'}) ;
  Statechart.dispatch({ sig: 'g'}) ;
  Statechart.dispatch({ sig: 'c'}) ;
  Statechart.dispatch({ sig: 'c'}) ;
};