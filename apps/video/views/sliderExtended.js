// ==========================================================================
// Project:   Video.SliderExtended
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals VideoApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
VideoApp.SliderExtended = SC.SliderView.extend({
  
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

