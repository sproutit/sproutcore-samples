require('models/benchmark') ;

Benchmarks.Benchmark.newRecord({

  setup: function(context) {
    context.object = SC.Object.create({
      
      normal: "normal",
      
      _computed: "computed",
      computed: function(key, value) {
        if (value !== undefined) this._computed = value ;
        return this._computed ;
      }.property() 

    }) ;
    
    context.observerFunction = function() {} ;
  },

  // GET 
  "benchmark RAW: o.normal [100000x]": function(context) {
    return context.object.normal ;
  },
  
  "benchmark kvo: get(normal) [100000x]": function(context) {
    context.object.get('normal') ;
  },
  
  "benchmark kvo: get(computed) [100000x]": function(context) {
    context.object.get("computed") ;
  },
  
  "benchmark kvo: get(unknown) [100000x]": function(context) {
    context.object.get("unknown") ;
  },

  // SET
  "benchmark RAW: o.normal = value [10000x]": function(context) {
    context.object.normal = "value" ;
  },

  "benchmark kvo: set(normal, value) [10000x]": function(context) {
    context.object.set('normal', 'value') ;
  },
  
  "benchmark kvo: set(computed, value) [10000x]": function(context) {
    context.object.set("computed", "value") ;
  },
  
  "benchmark kvo: set(unknown, value) [10000x]": function(context) {
    context.object.set("unknown", "value") ;
  },
  
  // addObserver
  "benchmark observers: addObserver(normal, observer) [1000x]": function(context) {
    context.object.addObserver('normal', context.observerFunction) ;
  },
  
  // removeObserver
  "benchmark observers: removeObserver(normal, observer) [1000x]": function(context) {
    context.object.removeObserver('normal', context.observerFunction) ;
  }
  
}) ;