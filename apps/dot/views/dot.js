// ==========================================================================
// Project:   Dot.DotView
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Dot */

/** @class

  This is an example of a simple SproutCore view that demonstrates both how
  you can use the canvas tag to do drawing and how you can handle events.

  h2. Canvas Drawing
  
  Normally to do custom drawing in a view, you just need to add a render()
  method, where you can push HTML strings into the render context.  For perf
  reasons it is usually best to avoid manipulating the DOM you create 
  yourself.
  
  In this case, though, we are creating a canvas tag which will be filled with
  a color.  We have to do this drawing once our DOM has been created.  You 
  handle this by adding an didCreateLayer() method, which will be called 
  the first time your layer is created.
  
  @extends SC.View
*/
Dot.DotView = SC.View.extend(
/** @scope Dot.DotView.prototype */ {

  /**
    This property will be set by the event handler to indicate that the 
    view is in a pressed state.  Since it is added as a displayProperty below,
    changing this property will automatically redraw the view.
  */
  isActive: NO,
  
  displayProperties: ['isActive'],
  
  // ..........................................................
  // DRAWING
  // 
  
  /**
    This is the root method you usually implement to draw into a view.  The
    basic idea here is to just push HTML strings into the context which will
    be converted to DOM elements by the browser.  This is usually much faster
    than manipulating the DOM yourself.
    
    In this code, we just push strings in to create a canvas tag.
    
    Note that firstTime is YES only if render is being called on a new layer.
    This is the only time you want to render the HTML unless the HTML has 
    changed.
  */
  render: function(context, firstTime) {
    if (firstTime) {
      context.push('<canvas></canvas>');
    }
  },
  
  /**
    Since we need to draw into the view, we also implement didCreateLayer()
    where we can get the layer and do some of our own manipulation.
  */
  didCreateLayer: function() {
    this.drawDot();
  },

  /**
    Again, normally you do all your HTML drawing in render().  But in this
    case we need to redraw the dot potentially whenever the view is rendered
    again.  
    
    This method is called when the layer has already been created but just
    needs to repaint.
  */
  didUpdateLayer: function() {
    this.drawDot();    
  },
  
  
  /**
    Just draw the dot into the canvas.  Use a different color depending on
    the isActive state.
  */
  drawDot: function() {
    console.log('drawDot!');
    var canvas = this.$('canvas')[0]; // using CoreQuery here.
    var ctx = canvas.getContext("2d");
    
    // set color based on isActive state
    if (this.get('isActive')) ctx.fillStyle = "rgb(101,119,159)";
    else ctx.fillStyle = "rgb(181, 199, 239)";

    if (this.get('isActive')) ctx.strokeStyle = "rgb(181, 199, 239)";
    else ctx.strokeStyle = "rgb(51,69,109)";
    ctx.lineWidth = 3;
    
    ctx.clearRect(0,0,100,100);
    ctx.beginPath();
    ctx.arc(50,50,48,0, Math.PI*2, YES);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50,50,48,0, Math.PI*2, YES);
    ctx.stroke();
    
    ctx = canvas = null ; // avoid memory leaks
  },
  
  // ..........................................................
  // EVENT HANDLING
  // 
  
  /**
    This method is called whenever you press the mouse down on the dot.  If 
    you return YES from this method, then your view will receive mouseDragged
    dragged events until the user releases the mouse and then a final mouseUp.
    
    If you don't return YES, then SC will assume you don't want to handle the
    event and you won't receive any mouse events (other than mouseMoved).
  
    In this case we will handle dragging so on mouse down save the current 
    location so that we can compute an offset later.
  */
  mouseDown: function(evt) {
    // save current top/left and pageX/pageY so we can adjust later
    var layout = this.get('layout');
    this._mouseDownInfo = {

      left: layout.left, 
      top:  layout.top,
      
      // from evt. these properties are normalized on all browsers
      pageX: evt.pageX, 
      pageY: evt.pageY
    }; 
    
    // mark this view as active so that it repaints with a darker color
    this.set('isActive', YES);
    
    // make sure we return YES so we get other events
    return YES;
  },
  
  /**
    This method is called whenever the mouse moves while the button is 
    depressed.  This is where we reposition the dot view.
    
    Note the technique we use here to move the dot by calculating the offset
    of the current mouse location from the mouse down location then updating
    the top/left.  This approach works better than trying to just adjust the
    top/left incrementally since it avoids the mouse "jittering" during a 
    move.
  */
  mouseDragged: function(evt) {

    var info = this._mouseDownInfo, // faster than getting info over and over
        size = this.get('pane').get('currentWindowSize'),
        loc, top, left;

    // constrain the location to keep the dot on screen
    loc = evt.pageX;
    if (loc<0) loc = 0;
    if (loc>size.width) loc = size.width;
    left  = info.left + (loc - info.pageX);
 
    loc = evt.pageY;
    if (loc<0) loc = 0;
    if (loc>size.height) loc = size.height;
    top  = info.top + (loc - info.pageY);
    
    // this will adjust the layout to the new location.  It is more efficient
    // than setting a whole new layout each time
    this.adjust('top', top).adjust('left', left);
    
    // yep, we handled this event
    return YES;
  },
  
  /**
    This method is called when the mouse is released.  In this case, we 
    reposition the view one more time and clean up.  In a real app you might
    apply your changes here.
  */
  mouseUp: function(evt) {    
    this.mouseDragged(evt); // position the view again
    this._mouseDownInfo = null; // cleanup!

    // mark this view as active so that it repaints with a darker color
    this.set('isActive', NO);    
  }

});
