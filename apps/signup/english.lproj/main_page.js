// ==========================================================================
// Project:   Signup - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Signup */

// This page describes the main user interface for your application.  
Signup.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'descLabel working'.w(),

    // setting default responder to the app namespace causes general actions
    // to fire on the current first responder for signup
    defaultResponder: 'Signup',    
    
    working: SC.View.design({
      classNames: "working",
      layout: { left: 280, top: 50, bottom: 50, right: 50 },

      childViews: "signupButton container logoutButton".w(),

      // the main container.  swaps between a signup prompt and the current
      // signup info.
      container: SC.ContainerView.design({
        layout: { left: 20, top: 20, bottom: 60, right: 20 },
        
        // bind to a property on the general object.  Controllers and 
        // responders will edit this property, not the view itself
        nowShowingBinding: "Signup.currentAccountController.nowShowing"
      }),
      
      // the signup button used to trigger the dialog.  note that the action
      // goes down the responder chain and ends up firing on the 
      // application firstResponder
      signupButton: SC.ButtonView.design({
        layout: { bottom: 20, centerX: 55, width: 100, height: 24 },
        title: "_Signup".loc(),
        isDefault: YES,
        action: "signup"
      }),

      // the logout button removes the current user account.  It is only 
      // enabled if we have an account.
      logoutButton: SC.ButtonView.design({
        layout: { bottom: 20, centerX: -55, width: 100, height: 24 },
        title: "_Logout".loc(),
        action: "logout",
        
        isEnabledBinding: "Signup.currentAccountController.hasContent"
      })
      
      
    }),
    
    descLabel: SC.LabelView.design({
      layout: { top: 50, left: 40, width: 220, bottom: 50 },
      escapeHTML: NO,
      classNames: 'desc',
      value: '<h1>Signup Demo</h1><p>Things to try:<ul><li>Click "Signup"</li><li>Complete the form and press "Signup"</li><li>Repeat.</li></u></p>'
    })
  }),
  
  prompt: SC.LabelView.design({
    tagName: "h2",
    classNames: "prompt",
    textAlign: SC.ALIGN_CENTER,
    controlSize: SC.HUGE_CONTROL_SIZE,
    layout: { left: 0, right: 0, height: 24, centerY: 0 },
    value: "_You don't have an account yet.  Signup to create a new account".loc()
  }),
  
  accountInfo: Signup.AccountInfoView.design({
    contentBinding: "Signup.currentAccountController"
  })
  
});
