// ==========================================================================
// ViewBuilder
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  ViewBuilder.server.preload(ViewBuilder.FIXTURES) ;

  // TODO: refresh() any collections you have created to get their records.
  // ex: ViewBuilder.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  // The default code just activates all the views you have on the page. If
  // your app gets any level of complexity, you should just get the views you
  // need to show the app in the first place, to speed things up.
  //SC.page.awake() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: ViewBuilder.contactsController.set('content',ViewBuilder.contacts);
  
  bv = SC.ButtonView.create({
    layout: { bottom: 20, right: 20, height: 23, width: 80 },
    
    title: "OK"
  }) ;

  lv = SC.LabelView.create({
    layout: { centerX: 0, centerY: 0, width: 100, height: 23 },
    value: "Hello!"
  });
  
  dialog = SC.View.build({
    childViews: [
      SC.ButtonView.build({
        title: "OK",
        layout: { bottom: 20, right: 20, width: 80, height: 23 }
      }, [0]),
      
      SC.ButtonView.build({
        title: "Cancel",
        layout: { centerX: 0, centerY: -40, width: 400, height: 200 }
      }, [1]) ],
      
    layout: { x: 0, y: 0, width: 400, height: 350 },
    anchor: SC.ANCHOR_CENTER
  }) ;
  
  d = dialog.create();

  rv = SC.MainPane.create().appendTo('body');
  rv.appendChild(bv).appendChild(lv);
} ;


/*
SC.ButtonView = SC.View.extend({
  
  title: "Title",
  
  localize: NO,
  
  displayTitle: function() {
    var title = this.get('title');
    return (this.get('localize')) ? title.loc() : title;  
  }.property('title','localize'),
  
  emptyElement: '<a class="sc-button-view button regular normal" href="javascript:;"><span class="button-inner"><span class="label"></span></span></a>',

  prepareDisplay: function() {
    sc_super();
    this.updateDisplay() ;
  },
  
  updateDisplay: function() {
    this.$('span.label').text(this.get('title'));
  },
  
  displayProperties: ['title','localize']
    
}) ;
*/

