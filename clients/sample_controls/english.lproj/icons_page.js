// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

SampleControls.iconsPage = SC.Page.create({
  
  mainView: SC.LabelView.design({
    escapeHTML: NO,
    styleClass: 'icons-tab',
    value: function() {  
      var ret = ['<h1>Icons</h1><p>SC.ImageView can automatically display sprited icons if you set a CSS class name as the value instead of a URL.  SproutCore also comes with the some default icons built right into the framework.  Just use the class names below.  If you would like to get more icons in this style, you can find them at <a href="http://www.icondrawer.com/" target="_blank">Icon Drawer</a>.</p>'];

      function generateIcons(iconSize, iconNames) {
        ret.push("<label>%@-pixel Icons</label>".fmt(iconSize)) ;
        ret.push('<div class="icon-group group-%@">'.fmt(iconSize)) ;
        
        iconNames.forEach(function(k) {
          ret.push('<div class="icon"><div class="inner"><img src="%@" class="icon sc-icon-%@-%@" style="height: %@px; width: %@px; position: relative" /></div><label>sc-icon-%@-%@</label></div>'.fmt(static_url('blank'), k, iconSize, iconSize, iconSize, k, iconSize)) ;
        });
        
        ret.push('</div>');
      }

      generateIcons(48, 'alert info error'.w());
      generateIcons(24, 'tools bookmark info help alert left right up down undo redo group user cancel options folder trash document favorite'.w());
      generateIcons(16, 'bookmark info help alert group user options folder trash document favorite'.w());
      
      return ret.join('');
    }()
  })

});
