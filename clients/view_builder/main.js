// ==========================================================================
// ViewBuilder
// ==========================================================================

/*global ViewBuilder, page */

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
  //ViewBuilder.server.preload(ViewBuilder.FIXTURES) ;

  // TODO: refresh() any collections you have created to get their records.
  // ex: ViewBuilder.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  // This default code simply finds your main pane and adds makes it visible
  // on the page.  This will usually do everything you need, though you could
  // choose to show other views here as well, such as palettes.
  ViewBuilder.mainPage.get('mainPane').append(); 

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!
  
} 

