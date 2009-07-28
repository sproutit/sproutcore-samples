// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

SC.SliderExtended = SC.SliderView.extend({
  
  onMouseDown:null,
  onMouseUp:null,

  mouseDown: function(evt) {
     var md=this.get('onMouseDown');
     if(md) md();
    
     return sc_super();
   },

   mouseUp: function(evt) {
     var mu=this.get('onMouseUp');
     if(mu) mu();
    return sc_super();
   }
   
});
