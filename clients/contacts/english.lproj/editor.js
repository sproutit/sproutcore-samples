// ==========================================================================
// Design: Contacts.editorPage
// ==========================================================================
/*globals Contacts sc_stub */

sc_stub('Contacts.editorPage');
SC.namespace('Contacts', function() {

  var nameRowHeight = SC.metricsFor(SC.TextFieldView, SC.LARGE_CONTROL_SIZE).height ;
  var phoneRowHeight = SC.metricsFor(SC.TextFieldView).height;
  
  // Calculate expected height of popup pane using metrics
  var paneHeight = 20 + // top border
    // names
    nameRowHeight + 4 +
    
    // email + phone rows
    (phoneRowHeight + 4) * 2 +
    
    // buttons (w/ 8px space)
    8 + SC.metricsFor(SC.ButtonView).height ; // buttons

  // this tells the build system that you want it to optimize this design.
  Contacts.editorPage = SC.Page.design({

    mainPane: SC.PopupPane.design()
      .layout({ width: 320, height: paneHeight })
      .childView(SC.FormView.design()
        .bind('content', 'Contacts.detailController')

        // First Name / Last Name Fields
        .childView(SC.TextFieldView.design({
          hint: 'First',
          fieldKey: 'firstName',
          layout: { top: 20, width: 140, left: 20 },
          controlSize: SC.LARGE_CONTROL_SIZE
        }))
        .childView(SC.TextFieldView.design({
          hint: 'Last',
          fieldKey: 'lastName',
          layout: { top: 20, left: 160, right: 20 },
          controlSize: SC.LARGE_CONTROL_SIZE
        }))

        // Phone Number
        .childView(SC.TextFieldView.design({
          hint: '123-456-7890',
          fieldKey: 'phoneNumber',
          validator: SC.Validator.PhoneNumberOrEmpty,
          layout: { top: 24 + nameRowHeight, left: 20, right: 20 }
        }))

        // Phone Number
        .childView(SC.TextFieldView.design({
          hint: 'email@example.com',
          fieldKey: 'emailAddress',
          validator: SC.Validator.EmailOrEmpty,
          layout: { top: 24 + nameRowHeight + phoneRowHeight + 4, left: 20, right: 20 }
        }))

        // Cancel Button
        .childView(SC.ButtonView.design({
          title: "Cancel",
          layout: { right: 20, bottom: 20, width: 80 },
          isCancel: YES,
          action: 'discardChanges'
        }))     

        // OK Button
        .childView(SC.ButtonView.design({
          title: "OK",
          layout: { right: 20, bottom: 20, width: 80 },
          isDefault: YES,
          action: 'commitChanges'
        })))
  }) ;

  
}) ;

