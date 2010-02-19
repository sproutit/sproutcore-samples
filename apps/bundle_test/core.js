// ==========================================================================
// Project:   BundleTest
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BundleTest */

"import package sproutcore";
"export BundleTest";

/** @namespace
  
  A sample app to demonstrate bundle functionality in Abbot.
  
  @extends SC.Object
*/
BundleTest = SC.Object.create(
/** @scope BundleTest.prototype */ {
    
  NAMESPACE: 'BundleTest',
  VERSION: '0.1.0',
  
  loadDynamicFramework: function() {
    try {
      SC.loadBundle('bundle_test/dynamic', function() {
        alert("'bundle_test/dynamic' did load. You should see the background turn green once the CSS has loaded.");
      })
    } catch (e) {
      alert(e);
    }
  }
  
});
