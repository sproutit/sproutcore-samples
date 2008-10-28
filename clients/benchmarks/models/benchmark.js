// ==========================================================================
// Benchmarks.Benchmark
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Benchmarks.Benchmark = SC.Record.extend(
/** @scope Benchmarks.Benchmark.prototype */ {

  // finds all the benchmarks declared in this object and runs them.
  // benchmarks must end in the word "Benchmark"
  run: function() {
    var methods = [] ;
    var attrs = this.get('attributes') ;
    for(var key in attrs) {
      if (key.toLowerCase().match(/^benchmark/)) methods.push(key) ;
    }

    var setup = this.get('setup') ;
    if (SC.$type(setup) != SC.T_FUNCTION) setup = null;

    var teardown = this.get('teardown') ;
    if (SC.$type(teardown) != SC.T_FUNCTION) teardown = null;
    
    var idx = methods.length;
    while(--idx >= 0) {
      var method = methods[idx] ;
      var name = method.slice(9, method.length).gsub(/\[.+x\]$/,'').trim() ;
      
      // determine the number of reps.  
      var reps = 100; // default
      var parsed = method.match(/\[([0-9]+)x\]$/) ;
      if (parsed) reps = parseInt(parsed[1],0) ;
      
      // define new context object
      var context = {} ;

      if (setup) setup(context) ;
      SC.Benchmark.bench(attrs[method], name, reps, context) ;
      if (teardown) teardown(context) ;
    }
  }

}) ;
