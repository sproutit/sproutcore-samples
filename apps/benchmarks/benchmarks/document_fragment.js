// require('models/benchmark') ;
// 
// function text(node, txt){
//         node.appendChild( document.createTextNode(txt) );
//         return node;
// } ;
// 
// Benchmarks.Benchmark.newRecord({
// 
//   setup: function(context) {
//     context.root = $('test-root') ;
//     context.container = document.createElement('div') ;
//     context.root.appendChild(context.container) ;
//     
//     
//     context.elems = [];
//     
//     var elems = [document.createElement("hr"),
//     text( document.createElement("b"), "Links:" ),
//     document.createTextNode(" "),
//     text( document.createElement("a"), "Link A" ),
//     document.createTextNode(" | "),
//     text( document.createElement("a"), "Link B" ),
//     document.createTextNode(" | "),
//     text( document.createElement("a"), "Link C" )] ;
//     
//     var reps = 20 ;
//     while(--reps >=0){
//       var idx = elems.length;
//       while(--idx >= 0) context.elems.push(elems[idx].cloneNode(true)) ;
//     }
//     
//     console.log("Adding: %@".fmt(context.elems.length)) ;
//     
//     context.fragment = document.createDocumentFragment();
//     var elems = context.elems;
//     var idx = elems.length ;
//     while(--idx >= 0) {
//       context.fragment.appendChild(elems[idx].cloneNode(true)) ;
//     }
//     
//   },
//   
//   teardown: function(context) {
//     context.root.removeChild(context.container);
//   },
//   
//   "benchmark adding individually [1x]": function(context) {
//     var idx = context.elems.length ;
//     var elems = context.elems;
//     var container = context.container ;
//     while(--idx >= 0) {
//       container.appendChild(elems[idx].cloneNode(true)) ;
//     }
//     
//   },
// 
//   "benchmark adding to documentFragment [1x]": function(context) {
//     var idx = context.elems.length ;
//     var elems = context.elems;
//     var container = context.container ;
//     
//     var fragment = document.createDocumentFragment();
//     while(--idx >= 0) {
//       fragment.appendChild(elems[idx].cloneNode(true)) ;
//     }
//     
//     container.appendChild(fragment) ;
//     
//   },
// 
//   "benchmark remove element, then add to documentFragment [1x]": function(context) {
//     var idx = context.elems.length ;
//     var elems = context.elems;
//     var container = context.container ;
//     
//     var fragment = document.createDocumentFragment();
//     while(--idx >= 0) {
//       fragment.appendChild(elems[idx].cloneNode(true)) ;
//     }
//     
//     var parent = container.parentNode ;
//     var sibling = container.nextSibling ;
//     parent.removeChild(container) ;
//     container.appendChild(fragment) ;
//     parent.insertBefore(container, sibling) ;
//     
//   },
// 
//   "benchmark cloning to documentFragment [1x]": function(context) {
//     var idx = context.elems.length ;
//     var elems = context.elems;
//     var container = context.container ;
//     var fragment = context.fragment ;
//     container.appendChild(fragment.cloneNode(true)) ;
//     
//   },
// 
//   "benchmark removing element first [1x]": function(context) {
//     var idx = context.elems.length ;
//     var elems = context.elems;
//     var container = context.container ;
//     
//     var parent = container.parentNode ;
//     var sibling = container.nextSibling ;
//     parent.removeChild(container) ;
//     while(--idx >= 0) {
//       container.appendChild(elems[idx].cloneNode(true)) ;
//     }
//     parent.insertBefore(container, sibling) ;
//   }
//   
// }) ;