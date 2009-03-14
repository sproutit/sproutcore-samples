// ==========================================================================
// SampleControls.ContainerController
// ==========================================================================
/*global SampleControls */

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
SampleControls.containerController = SC.Object.create(
/** @scope SampleControls.containerController */ {

  /** Bound to the nowShowing property of the container. */
  nowShowing: 'container1',
  
  showContainer1: function() {
    this.set('nowShowing', 'container1');    
  },

  showContainer2: function() {
    this.set('nowShowing', 'container2');    
  },

  showContainer3: function() {
    this.set('nowShowing', 'container3');    
  }

}) ;
