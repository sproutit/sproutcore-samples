// ==========================================================================
// Project:   Signup.signupPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Signup */

// This page describes a part of the interface for your application.
Signup.signupPage = SC.Page.design({

  // The main signup pane.  used to show info
  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, width: 400, centerY: 0, height: 240 },
    
    defaultResponder: Signup,
    
    // panes always have a single contentView which is where you put all of
    // your actual controls.  Omitting layout means the contentView will fill
    // the entire pane content.s
    contentView: SC.View.design({
      
      childViews: "prompt okButton cancelButton nameLabel firstName lastName emailLabel email mailingListCheckbox sexLabel sex".w(),
      
      // PROMPT
      prompt: SC.LabelView.design({
        layout: { top: 12, left: 20, height: 18, right: 20 },
        value: "_Complete the information below to signup:".loc()
      }),
      
      // INPUTS 
      
      nameLabel: SC.LabelView.design({
        layout: { top: 40, left: 20, width: 70, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_Name:".loc() 
      }),
      
      firstName: SC.TextFieldView.design({
        layout: { top: 40, left: 100, height: 20, width: 130 },
        hint: "_First".loc(),
        valueBinding: "Signup.signupController.firstName"
      }),

      lastName: SC.TextFieldView.design({
        layout: { top: 40, left: 240, height: 20, width: 130 },
        hint: "_Last".loc(),
        valueBinding: "Signup.signupController.lastName"
      }),
      
      emailLabel: SC.LabelView.design({
        layout: { top: 68, left: 20, width: 70, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_Email:".loc()
      }),
      
      email: SC.TextFieldView.design({
        layout: { top: 68, left: 100, height: 20, width: 270 },
        hint: "email@example.com".loc(),
        valueBinding: "Signup.signupController.email"
      }),
      
      sexLabel: SC.LabelView.design({
        layout: { top: 100, left: 20, width: 70, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_Sex:".loc()
      }),

      sex: SC.RadioView.design({
        layout: { top: 100, left: 100, right: 20, height: 40 },
        items: "Male Female".w(),
        valueBinding: "Signup.signupController.sex" 
      }),
      
      mailingListCheckbox: SC.CheckboxView.design({
        layout: { top: 146, left: 100, right: 20, height: 40 },
        title: "_Send me an email about important news and new features".loc(),
        valueBinding: "Signup.signupController.mailingList" 
      }),
      
      // BUTTONS
      okButton: SC.ButtonView.design({
        layout: { bottom: 20, right: 20, width: 90, height: 24 },
        title: "_OK".loc(),
        isDefault: YES,
        action: "submit"
      }),
      
      cancelButton: SC.ButtonView.design({
        layout: { bottom: 20, right: 120, width: 90, height: 24 },
        title: "_Cancel".loc(),
        isCancel: YES,
        action: "cancel"
      })
      
    })
  })

});
