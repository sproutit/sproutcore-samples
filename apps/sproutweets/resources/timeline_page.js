// ==========================================================================
// Project:   Sproutweets - statusPage
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Sproutweets */
sc_require('views/count_display');

Sproutweets.timelinePage = SC.Page.design({ 
  timelineView: SC.ScrollView.design({
    contentView: SC.ListView.design({
      classNames: ['timeline-view'],
    
      contentBinding: 'Sproutweets.timelineController.arrangedObjects',
    
      rowHeight: 60,
      rowSpacing: 10,
      exampleView: SC.ListItemView.extend({
        classNames: ['tweet-list-item'],

        render: function(context, firstTime) {
          var content = this.get('content');
          
          var image = content.get('user').profile_image_url;
          context.push('<img src="%@">'.fmt(image));
          context.push('<div class="text">'+content.get('text')+'</div>');
          
          if (content.get('in_reply_to_user_id') === Sproutweets.userController.get('id')) {
            context.addClass('at-you');
          }
          
          if (content.get('retweeted_status')) {
            context.addClass('retweet');
          }
        }
      })
    })
  }),
  
  loadingView: SC.View.design({
    childViews: 'spinner label'.w(),
    
    spinner: SC.ImageView.design({
      layout: { width: 32, height: 32, centerY: 0, centerX: -155 },
      value: sc_static('images/loading_large')
    }),
    
    label: SC.LabelView.design({
      layout: { height: 34, width: 280, centerY: 0, centerX: 20 },
      classNames: ['loading-label'],
      controlSize: SC.HUGE_CONTROL_SIZE,

      value: '_Loading Timeline…',
      localize: YES
    })
  }),
  
  errorView: SC.View.design({
    childViews: 'warning label'.w(),
    
    warning: SC.ImageView.design({
      layout: { width: 50, height: 50, centerY: -5, centerX: -155 },
      value: sc_static('images/error')
    }),
    
    label: SC.LabelView.design({
      layout: { height: 34, width: 350, centerY: 0, centerX: 60 },
      classNames: ['loading-label'],
      controlSize: SC.HUGE_CONTROL_SIZE,

      value: '_Error Loading Timeline',
      localize: YES
    })
  })
});