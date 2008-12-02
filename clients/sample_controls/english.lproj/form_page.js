// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

SampleControls.formsPage = SC.Page.create({
  
  vertical: 0,
  horizontal: 0,
  
  clippingFrame: {},
  
  displayClippingFrame: function() {
    return SC.inspect(this.get('clippingFrame'));
  }.property('clippingFrame'),
  
  mainView: SC.View.design({
    childViews: [
      SC.ScrollerView.design({
        maximum: 1000,
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        layout: { left: 20, bottom: 20, right: 35, height: 16 },
        valueBinding: ".page.horizontal"
      }),

      SC.ScrollerView.design({
        maximum: 1000,
        layoutDirection: SC.LAYOUT_VERTICAL,
        layout: { top: 20, bottom: 35, right: 20, width: 16 },
        valueBinding: ".page.vertical"
      }),
      
      SC.ClipView.design({
        contentView: SC.View.extend({
          
          clippingFrameBinding: '.page.clippingFrame',
          
          emptyElement: function() {
            var w = 800, h = 800, s = 20;
            var ret = ['<div>'];
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
          }(),
          
          layout: { top: 0, left: 0, width: 800, height: 800 }
        }),
        
        layout: { top: 20, left: 20, right: 35, bottom: 35 },
        
        verticalScrollOffsetBinding: '.page.vertical',
        horizontalScrollOffsetBinding: '.page.horizontal'
      }),
      
      SC.LabelView.design({
        layout: { left: 20, bottom: 0, width: 25, height: 18 },
        valueBinding: ".page.horizontal"
      }),
      
      SC.LabelView.design({
        layout: { right: 0, top: 20, width: 20, height: 18 },
        valueBinding: ".page.vertical"
      }),
      
      SC.LabelView.design({
        layout: { right: 0, bottom: 0, width: 200, height: 18 },
        valueBinding: ".page.displayClippingFrame"
      })
      
    ]
  })
  
});
