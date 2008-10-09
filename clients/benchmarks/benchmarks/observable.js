// require('models/benchmark') ;
// 
// Benchmarks.Benchmark.newRecord({
// 
//   setup: function(context) {
//     context.object = SC.Object.create({
//       
//       normal: "normal",
//       
//       _computed: "computed",
//       computed: function(key, value) {
//         if (value !== undefined) this._computed = value ;
//         return this._computed ;
//       }.property(),
//       
//       observed: "property",
//       
//       observedPropertyDidChange: function() {
//         // DO SOMETHING USEFUL 
//       }.observes('observed')
// 
//     }) ;
//     
//     context.observerFunction = function() {} ;
//     
//     context.doIt = function(alpha) { return alpha; } ;
//   },
// 
//   // GET 
//   "benchmark RAW: o.normal [100000x]": function(context) {
//     return context.object.normal ;
//   },
//   
//   "benchmark kvo: get(normal) [100000x]": function(context) {
//     context.object.get('normal') ;
//   },
//   
//   "benchmark kvo: get(computed) [100000x]": function(context) {
//     context.object.get("computed") ;
//   },
//   
//   "benchmark kvo: get(unknown) [100000x]": function(context) {
//     context.object.get("unknown") ;
//   },
// 
//   "benchmark kvo: get(observed) [100000x]": function(context) {
//     context.object.get("observed") ;
//   },
// 
//   // SET
//   "benchmark RAW: o.normal = value [10000x]": function(context) {
//     context.object.normal = "value" ;
//   },
// 
//   "benchmark kvo: set(normal, value) [10000x]": function(context) {
//     context.object.set('normal', 'value') ;
//   },
//   
//   "benchmark kvo: set(computed, value) [10000x]": function(context) {
//     context.object.set("computed", "value") ;
//   },
//   
//   "benchmark kvo: set(unknown, value) [10000x]": function(context) {
//     context.object.set("unknown", "value") ;
//   },
// 
//   "benchmark kvo: set(observed, value) [10000x]": function(context) {
//     context.object.set("observed", "value") ;
//   },
//   
//   // addObserver
//   "benchmark observers: addObserver(normal, observer) [1000x]": function(context) {
//     context.object.addObserver('normal', context.observerFunction) ;
//   },
//   
//   // removeObserver -- note that we remove an observer that was already
//   // defined on the object.
//   "benchmark observers: removeObserver(normal, observer) [1000x]": function(context) {
//     context.object.removeObserver('observed', context.object.observedPropertyDidChange) ;
//   }
//   
// }) ;