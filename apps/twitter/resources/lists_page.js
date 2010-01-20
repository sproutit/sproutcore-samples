// ==========================================================================
// Project:   Twitter - listsPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

Twitter.listsPage = SC.Page.create({

  mainView: SC.View.design({
    childViews: ['splitView','addListButton', 'newUserButton', 'instructions'],

    instructions: SC.View.design({
      classNames: 'loading'.w(),
      childViews: 'instructions'.w(),
      isVisibleBinding: SC.Binding.not('Twitter.loginController.loggedIn'),

      instructions: SC.LabelView.design({
        layout: { height: 28, centerY: 0 },
        textAlign: SC.ALIGN_CENTER,

        value: 'Login to view lists'
      })
    }),

    addListButton: SC.ButtonView.design({
      layout: { bottom: 3, height: 28, width: 80, left: 3 },
      title: 'New List',
      target: 'Twitter.firstResponder',
      action: 'createNewList'
    }),

    newUserButton: SC.ButtonView.design({
      layout: { bottom: 3, height: 28, width: 80, left: 86 },
      title: 'Add User',
      target: 'Twitter.listController',
      action: 'showUserPane'
    }),

    splitView: SC.SplitView.design({
      layout: { bottom: 30, top: 20 },
      isVisibleBinding: 'Twitter.loginController.loggedIn',
     layoutDirection: SC.LAYOUT_HORIZONTAL,
     defaultThickness: 0.3,
     autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
     canCollapseViews: YES,
     topLeftMinThickness: 200,
     topLeftMaxThickness: 900,
     topLeftView: SC.ScrollView.design({
       hasHorizontalScroller: NO,
       layout: { top: 0, bottom: 0, left: 0, right: 0 },
       backgroundColor: 'white',

       contentView: SC.View.design({
         childViews: 'listView loadingView'.w(),

         listView: SC.ScrollView.design({
           contentView: SC.ListView.design({
             classNames: ['lists'],
             canEditContent: YES,
             hasContentIcon: YES,
             rowHeight: 60,
             contentBinding: 'Twitter.listsController.arrangedObjects',
             selectionBinding: 'Twitter.listsController.selection',
             contentValueKey: 'name'
            })
        }),

         loadingView: SC.View.design({
           classNames: 'loading',
           childViews: 'loadingLabel'.w(),
           isVisibleBinding: 'Twitter.listsController.isLoading',

           loadingLabel: SC.LabelView.design({
             layout: { height: 28, centerY: 0 },
             textAlign: SC.ALIGN_CENTER,
             value: 'Loading…'
           })
         })
       })
     }),

     dividerView: SC.SplitDividerView,

     bottomRightView: SC.SplitView.design({
        layout: { top: 0, bottom: 0, left: 0, right: 0 },
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        defaultThickness: 0.5,
        autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
        canCollapseViews: YES,
        topLeftMinThickness: 200,
        topLeftMaxThickness: 900,
        topLeftView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.View.design({
            childViews: 'listView loadingView'.w(),

            listView: SC.ListView.design({
              classNames: ['users'],
              hasContentIcon: YES,
              rowHeight: 60,
              contentBinding: 'Twitter.usersController.arrangedObjects',
              selectionBinding: 'Twitter.usersController.selection',

              contentValueKey: 'screenName',
              contentIconKey: 'profileImage'
            }),

            loadingView: SC.View.design({
              classNames: 'loading',
              childViews: 'loadingLabel'.w(),
              isVisibleBinding: 'Twitter.listMembershipController.isLoading',

              loadingLabel: SC.LabelView.design({
                layout: { height: 28, centerY: 0 },
                textAlign: SC.ALIGN_CENTER,
                value: 'Loading…'
              })
            })
          })
        }),

        dividerView: SC.SplitDividerView,

        bottomRightView: SC.ScrollView.design({
          hasHorizontalScroller: NO,
          layout: { top: 0, bottom: 0, left: 0, right: 0 },
          backgroundColor: 'white',

          contentView: SC.ListView.design({
            classNames: ['tweets'],
            hasContentIcon: YES,
            rowHeight: 60,
            contentBinding: 'Twitter.userTweetsController.arrangedObjects',
            selectionBinding: 'Twitter.userTweetsController.selection',
            contentValueKey: "text",
            contentIconKey: 'profileImage'
          })
        })
      })
   })
  }),

  addUserPane: SC.SheetPane.design({
    layout: { width: 400, height: 100, centerX: 0 },

    contentView: SC.View.design({
      childViews: 'label textField removeButton saveButton'.w(),

      label: SC.LabelView.design({
        layout: { left: 17, top: 17, height: 20, width: 100 },
        value: 'New user'
      }),

      textField: SC.TextFieldView.design({
        layout: { left: 117, top: 17, height: 20 },
        valueBinding: 'Twitter.listController.newUserName'
      }),

      removeButton: SC.ButtonView.design({
        layout: { width: 100, height: 28, bottom: 17, right: 134 },
        title: 'Cancel',
        target: 'Twitter.listController',
        action: 'removePane'
      }),

      saveButton: SC.ButtonView.design({
        layout: { width: 100, height: 28, bottom: 17, right: 17 },
        isDefault: YES,
        title: 'Save',
        target: 'Twitter.listController',
        action: 'saveNewUser'
      })
    })
  }),

  loginPane: SC.SheetPane.design({
     layout: { width: 400, height: 150, centerX: 0 },
     contentView: SC.View.extend({
       layout: { top: 0, left: 0, bottom: 0, right: 0 },
       childViews: 'userTextField passwordTextField buttonView cancelButtonView'.w(),

       userTextField: SC.TextFieldView.extend({
         layout: { centerY: -40, height: 24, centerX: 0, width: 300 },
         textAlign: SC.ALIGN_CENTER,
         controlSize: SC.LARGE_CONTROL_SIZE,
         hint: "USERNAME",
         valueBinding: 'Twitter.loginController.username'
       }),

       passwordTextField: SC.TextFieldView.extend({
          layout: { centerY: 0, height: 24, centerX: 0, width: 300 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          isPassword: YES,
          hint: "PASSWORD",
          valueBinding: 'Twitter.loginController.password'
        }),

       buttonView: SC.ButtonView.extend({
         layout: { width: 80, bottom: 20, height: 24, centerX: 50 },
         title: "Login",
         action: "login",
         target: "Twitter.loginController",
         isDefault: YES
       }),

       cancelButtonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 24, centerX: -50 },
          title: "Cancel",
          action: "cancel",
          target: "Twitter.loginController"
        })
     })
   })
});

