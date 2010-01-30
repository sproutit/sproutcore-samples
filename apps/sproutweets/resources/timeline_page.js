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

      rowHeight: 120,
      rowSpacing: 10,
      exampleView: SC.ListItemView.extend({
        classNames: ['tweet-list-item'],

        render: function(context, firstTime) {
          var content = this.get('content'),
              user = content.get('user'),
              out;

          var image = user.get('profileImage');

          if (content.get('isRetweet')) {
            context.push('<div class="profile-image">');
            context.push('<img src="%@">'.fmt(image));
            context.push('</div>');
            out = "%@ <span class='rt-label'>retweeted</span> %@";
            out = out.fmt(user.get('screenName'), content.get('retweetScreenName'));
            context.push('<div class="screen-name">%@ </div>'.fmt(out));
          } else {
            context.push('<div class="profile-image">');
            context.push('<img src="%@">'.fmt(image));
            context.push('</div>');
            context.push('<div class="screen-name">%@</div>'.fmt(user.get('screenName')));
          }

          context.push('<div class="text">'+content.get('text')+'</div>');

          if (content.get('in_reply_to_user_id') === Sproutweets.userController.get('id')) {
            context.addClass('at-you');
          }

          if (content.get('retweeted_status')) {
            context.addClass('retweet');
          }
        }
      }),

      contentIndexesInRect: function() {
        return SC.IndexSet.create(0,this.get('length'));
      }
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