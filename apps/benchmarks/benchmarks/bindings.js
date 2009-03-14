require('models/benchmark') ;

Benchmarks.Benchmark.newRecord({

  setup: function(context) {
    context.fromObject = SC.Object.create({
      simple: 1
    }) ;
    
    context.toObject = SC.Object.create({
      simple: "simple",
      simpleBinding: [context.fromObject, "simple"]
    }) ;
    
    context.cnt = 0 ;
    window.context = context ;
  },

  "benchmark add binding [100x]": function(context) {
    var key = "key" + context.cnt++ ;
    context.toObject.bind(key,"context.fromObject.dummy") ;
  },
  
  "benchmark trigger binding [100x]": function(context) {
    context.fromObject.incrementProperty("simple") ;
  }
  
}) ;