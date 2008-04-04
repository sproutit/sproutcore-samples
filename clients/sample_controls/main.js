// ==========================================================================
// SampleControls
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
  SC.Benchmark.start('load fixtures') ;
  SampleControls.server.preload(SampleControls.FIXTURES) ;
  SC.Benchmark.start('end fixtures') ;

  // Set content controller for display
  SC.Benchmark.start('SampleControls.contentController.content') ;
  SampleControls.contentController.set('content', SampleControls.Contact.findAll());
  SC.Benchmark.end('SampleControls.contentController.content') ;

  SC.Benchmark.start('SC.page.controlTabs.nowShowing = collections') ;
  SC.page.get('controlTabs').set('nowShowing', 'collections') ;
  SC.Benchmark.end('SC.page.controlTabs.nowShowing = collections') ;
  
} ;


