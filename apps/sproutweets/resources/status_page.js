// ==========================================================================
// Project:   Sproutweets - statusPage
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Sproutweets */
sc_require('views/count_display');

Sproutweets.statusPage = SC.Page.design({
  statusView: SC.View.design(SC.Animatable, {
    layout: { height: 70, top: -70 },
    transitions: { top: { duration: 0.3, timing: 'ease-in' } },
    classNames: ['status-view'],
    childViews: 'profileImage username stats'.w(),

    profileImage: SC.ImageView.design({
      layout: { width: 48, height: 48, centerY: 0, left: 17 },
      classNames: ['profile-image'],
      valueBinding: 'Sproutweets.userController.profileImage'
    }),
    
    username: SC.LabelView.design({
      layout: { left: 75, height: 44, centerY: 0, right: 280 },
      classNames: ['username'],
      controlSize: SC.HUGE_CONTROL_SIZE,
      
      valueBinding: 'Sproutweets.loginController.username'
    }),
    
    stats: SC.View.design({
      childViews: 'updates followers following'.w(),
      
      updates: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 190 },
        countBinding: 'Sproutweets.userController.updatesCountFormatted',
        label: '_updates'
      }),
      
      followers: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 100 },
        countBinding: 'Sproutweets.userController.followersCountFormatted',
        label: '_followers'
      }),
      
      following: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 10 },
        countBinding: 'Sproutweets.userController.friendsCountFormatted',
        label: '_following'
      })
    })
  })
});