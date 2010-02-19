// ==========================================================================
// Project:   BundleTest
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BundleTest main */

"import core";
"import lproj/main_page";
"export package main";

main = function main() {
  BundleTest.getPath('mainPage.mainPane').append() ;
};
