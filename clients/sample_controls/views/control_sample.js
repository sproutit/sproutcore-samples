// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls */

/** 
  Provides a default layout for display control samples.  Simply define
  your control samples as an array in the samples property.  The samples will
  be laid out in a grid.  Set the size property to configure the size of 
  each control.
  
  Note that samples could be a computed property.
*/

SampleControls.ControlSampleView = SC.View.extend({

  /** Title of this sample */
  title: "Samples",

  height: 23,
  samples: [],
  
  createChildViews: function() {
    
    // add and layout the samples to the childViews array before we do the
    // rest of the setup.
    var childViews = this.get('childViews') ;
    var top = 30, height = this.get('height') ;
    var idx = 1;
    this.get('samples').forEach(function(sample) {
      if (sample) {
        var curHeight = sample.prototype.height || height ;
        var designed = sample.design({
          rootElementPath: [idx++],
          layout: { left: 4, right: 4, top: top, height: curHeight }
        }) ;
        childViews.push(designed);
        top += curHeight + 4 ;
      } else {
        childViews.push(SC.SeparatorView.design({
          rootElementPath: [idx++],
          layout: { left: 4, right: 4, top: top, height: 1 }
        })) ;
        top += 5 ;
      }
    }, this) ;
    
    // now let normal setup continue
    return sc_super();
  },
  
  childViews: [
    SC.LabelView.design({
      rootElementPath: [0],
      valueBinding: '.parentView.title',
      layout: { left: 0, right: 0, top: 0, height: 30 },
      textAlign: SC.ALIGN_CENTER,
      fontWeight: SC.BOLD_FONT,
      tagName: 'h2',
      styleClass: 'sample-label'
    })
  ],
  
  styleClass: 'control-sample',
  layout: { left: 0, width: 150, top: 0, bottom: 0 }
  
}) ;

SampleControls.TiledSampleView = SC.View.extend({

  rootElementPath: [0],
  
  createChildViews: function() {
    var ret = sc_super();
    
    // before we call super, layout the views according to their width
    var left = 0;
    this.get('childViews').forEach(function(view) {
      view.adjust('left', left) ;
      left += view.get('frame').width ;
    }, this);
    this.adjust('width', left);
    return ret ;
  },
  
  layout: { left: 0, top: 0, bottom: 0 },
  
  styleClass: 'tiled-sample'
  
}) ;

SC.mixin(SampleControls.TiledSampleView, {
  _width: 158, _height: 23, _title: 'Sample',
  
  width: function(newWidth) {
    this._width = newWidth + 8 ;
    return this ;
  },

  height: function(newHeight) {
    this._height = newHeight ;
    return this ;
  },

  title: function(newTitle) {
    this._title = newTitle ;
    return this ;
  },

  sample: function() {
    var args = SC.$A(arguments), klass = args.shift();
    args = args.map(function(x) { return x ? klass.extend(x) : null; });
    this.prototype.childViews.push(SampleControls.ControlSampleView.extend({
      rootElementPath: [this.prototype.childViews.length],
      title: this._title, samples: args, height: this._height,
      layout: { left: 0, top: 0, bottom: 0, width: this._width }
    })) ;
    
    // reset defaults
    this._title = 'Sample';
    this._height = 23 ;
    this._width = 158 ;
    
    return this ;
  }
  
});

var tile = function() { 
  return SampleControls.TiledSampleView.extend({ childViews: [] }); 
};
