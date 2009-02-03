// ==========================================================================
// Simple Clock
// ==========================================================================

/* @static
  This demonstrates how to build a very simple application using the 
  new SproutCore.  All applications should have some views, a controller
  and a main function.
  
  Place your applicaiton into a namespace.
  
  @namespace Clock
*/
var Clock = SC.Object.create();

// define the controller
Clock.clockController = SC.Object.create({
  
  showGreeting: NO,
  
  value: function() {
    return this.get(this.get('showGreeting') ? 'greeting' : 'now') ;
  }.property('showGreeting', 'greeting', 'now').cacheable(),
  
  greeting: 'Hello World',
  
  now: '--',
  
  // updates now to reflect the clock
  tick: function() {
    this.set('now', new Date().format('hh:mm:ss'));
    this.invokeLater(this.tick, 1000);
  }
});

// define the views
Clock.mainPage = SC.Page.design({

  // create the wrapper mainPane to handle display
  mainPane: SC.MainPane.design()
    .layout({ centerX: 0, centerY: 0, width: 320, height: 120 })
    .styleClass('clock')
    
    // add labelView child...
    .childView(SC.LabelView.design()
      .layout({ left: 10, right: 10, centerY: 0, height: 48 })
      .tagName('h1')
      .bind('value', 'Clock.clockController.value'))
      
    .childView(SC.CheckboxView.design()
      .layout({ centerX: 0, width: 130, bottom: 10, height: 18 })
      .prop('title', 'Show Greeting')
      .bind('value', 'Clock.clockController.showGreeting'))

}) ;

Clock.main = function() {
  this.getPath('mainPage.mainPane').append();
  this.clockController.tick(); // start ticking
  
  this.clockController.addProbe('showGreeting');
} ;

function main() { return Clock.main(); }


