// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

SampleControls.ScrollSampleView = SC.View.extend({
  
  emptyElement: function() {
    var w = 800, h = 800, s = 15;
    var ret = ['<div style="border: 1px green solid">'];
    var len = w/s;
    while(--len>=0) {
      ret.push('<div style="border:1px red dotted; position: absolute; top: 0; bottom: 0; left: %@px; width: %@px"></div>'.fmt(len*s, s));
    }
    
    len = h/s;
    while(--len>=0) {
      ret.push('<div style="border:1px red dotted; position: absolute; top: %@px; height: %@px; left: 0; right: 0"></div>'.fmt(len*s, s));
    }
    ret.push('</div>');
    return ret.join('');
  }()
  
});

SampleControls.formsPage = SC.Page.create({
  
  vertical: 0,
  horizontal: 0,
  
  clippingFrame: null,
  frame: null,
  
  displayClippingFrame: function() {
    return [SC.inspect(this.get('clippingFrame')), SC.inspect(this.get('frame'))].join(' - ');
  }.property('clippingFrame','frame'),
  
  mainView: SC.View.design({
    childViews: [
      SC.ScrollView.design({
        
        classNames: ['sc-bezel-border'],
        
        horizontalScrollOffsetBinding: '.page.horizontal',
        verticalScrollOffsetBinding: '.page.vertical',
        
        layout: { left: 20, bottom: 20, top: 20, right: 20 },
        
        contentView: SampleControls.ScrollSampleView.design({
          layout: { top: 0, left: 0, width: 800, height: 800 },
          
          clippingFrameBinding: '.page.clippingFrame',
          frameBinding: '.page.frame'
        })
      }),
      
      SC.LabelView.design({
        layout: { left: 20, bottom: 2, width: 50, height: 18 },
        valueBinding: ".page.horizontal"
      }),
      
      SC.LabelView.design({
        layout: { right: 0, top: 0, width: 50, height: 18 },
        valueBinding: ".page.vertical"
      }),
      
      SC.LabelView.design({
        layout: { right: 20, bottom: 2, width: 600, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        valueBinding: SC.Binding.oneWay(".page.displayClippingFrame")
      })
      
    ]
  })
  
});
