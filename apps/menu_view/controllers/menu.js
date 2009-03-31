// ==========================================================================
// Project :    MenuView.menu
// Copyright :  ©2009 My Company, Inc.
// ==========================================================================
/*globals MenuView */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
MenuView.menuController = SC.Object.create(
/** @scope MenuView.menu.prototype */ {
  showMenu : function(view) {
  var iconURL= "http://www.freeiconsweb.com/Icons/16x16_people_icons/People_046.gif";
  var method = function() { console.log("done"); };
  var pane = SC.MenuView.create({
         items :  [ { title : "Item1", isEnabled : YES, 
          separator : NO, action : method ,
          checkbox : YES, shortCut : "alt_n", keyEquivalent : "alt_n" },
             { title : "", isEnabled : YES, icon : null, separator : YES},
             { title : "Item2", isEnabled : NO, icon : iconURL, separator : NO },
             { title : "Item3", isEnabled : YES, icon : iconURL, separator : NO , branchItem : YES,
             subMenu : SC.MenuView.create({
               items : ["title1","title2"],
               contentView : SC.View.extend({
                 layout : { width : 150, height : 200 }
                 })
               })
           }],
         isEnabled : YES,
         itemIsEnabledKey : "isEnabled",
         itemTitleKey : "title",
         itemIconKey : "icon",
         itemSeparator : 'separator',
         itemAction :  'action',
         itemCheckboxKey : 'checkbox',
         itemBranchKey : 'branchItem',     
         preferType : SC.PICKER_MENU,
         subMenuKey : 'subMenu',
         itemShortCutKey : 'shortCut',
         itemKeyEquivalent : 'keyEquivalent',
         contentView : SC.View.extend({
           layout :  { width : 150, height : 200 }
           })
       });
        pane.popup(view);
  }
  // TODO :  Add your own code here.

}) ;
