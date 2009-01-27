var cnt = 1000;
var extraTweak = YES ;

function method1() {
  // generate some initial wrapper div
  var el = SC.$('<div class="sc-view"></div>').get(0);
  var final = SC.$('<div class="sc-collection-view"></div>').get(0);
  
  // now for each item, clone el, set innerHTML & add to final...
  var idx = cnt;
  while(--idx >= 0) {
    var cur = el.cloneNode(true);
    SC.$(cur).html('<div class="photo"></div><h1>Sample text</h1><p>Sample subtext</p><img src="%@" />'.fmt(sc_static('blank')));
    if (extraTweak) SC.$(cur).find('.photo').addClass('sel');
    final.appendChild(cur);
  }
  return final ;
} ;

var factory = document.createElement('div');

function method2() {
  
  var lines = ['<div class="sc-collection-view">'];
  var idx = cnt;
  while(--idx >= 0) {
    lines.push('<div class="sc-view">');
    lines.push('<div class="photo"></div><h1>Sample text</h1><p>Sample subtext</p><img src="%@" />'.fmt(sc_static('blank'))) ;
    lines.push('</div>');
  }
  lines.push('</div>');
  
  factory.innerHTML = lines.join('');
  var final = factory.firstChild ;
  
  // also, must build array of items
  var views = [];
  var cur = final.firstChild;
  while(cur) {
    if (extraTweak) SC.$(cur).find('.photo').addClass('sel');
    views.push(cur);
    cur = cur.nextSibling ;
  }
  
  return final ;
};

function method3() {
  // generate some initial wrapper div
  var el = SC.$('<div class="sc-view"><div class="photo"></div><h1></h1><p></p><img src="%@" /></div>').get(0);
  var final = SC.$('<div class="sc-collection-view"></div>').get(0);
  
  // now for each item, clone el, set innerHTML & add to final...
  var idx = cnt;
  while(--idx >= 0) {
    var cur = SC.$(el.cloneNode(true));
    cur.find('h1').text('Sample text');
    cur.find('p').text('Sample subtext');
    if (extraTweak) cur.find('.photo').addClass('sel');
    final.appendChild(cur.get(0));
  }
  return final ;
} ;

SC.Benchmark.bench(method1, 'method1', 5);
SC.Benchmark.bench(method2, 'method2', 5);
SC.Benchmark.bench(method3, 'method3', 5);

//SC.$('body').append(method3());
