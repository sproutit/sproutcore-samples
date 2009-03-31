require('core');

PickerPane.ContentDataView = SC.View.extend({
  
  layout: { top:35, left:10, width: 300, height: 370},
  //styleClass:['pickerPane'],
  childViews:'eventTitle locationLabel locationText fromLabel fromDate toLabel toDate calendarLabel calendars alarmLabel alarms inviteesLabel invitees urlLabel url noteLabel note myStatusLabel myStatus separator cancelButton okButton'.w(),
        
    eventTitle : SC.LabelView.design({
        layout: { left: 10, width: 150, top: 5, height: 20 },
        value:'Event Title(Attendee)',
      classNames:['headingCls']
      }),   
    
    locationLabel : SC.LabelView.design({
        layout: { left: 30, width: 60, top: 35, height: 20 },
        value:'location',
      classNames:['labelCls']
      }),
       
    locationText : SC.LabelView.design({
        layout: { left: 100, width: 110, top: 35, height: 20 },
        value:'Somewhere'      
      }),
  
    fromLabel : SC.LabelView.design({
        layout: { left: 50, width: 60, top: 60, height: 20 },
        value:'from',
      classNames:['labelCls']
      }),
  
    fromDate : SC.LabelView.design({
        layout: { left: 100, width: 60, top: 60, height: 20 },
        value:'7/12/2008 10:00 AM'
      }),
  
    toLabel : SC.LabelView.design({
        layout: { left: 65, width: 60, top: 85, height: 20 },
        value:'to',
      classNames:['labelCls']
      }),
  
    toDate : SC.LabelView.design({
        layout: { left: 100, width: 60, top: 85, height: 20 },
        value:'7/12/2008 12:00 AM'
      }),
  
    calendarLabel : SC.LabelView.design({
        layout: { left: 25, width: 60, top: 105, height: 20 },
        value:'calendar',
        classNames:['labelCls']
      }),
  
    calendars : SC.SelectFieldView.design({         
        useStaticLayout: YES, 
         layout: { left: 100, width: 115, top: 105, height: 20 },
         objects:["School","Work","New Calendar"]  
      }),
    
    alarmLabel : SC.LabelView.design({
        layout: { left: 55, width: 60, top: 130, height: 20 },
        value:'alarm',
      classNames:['labelCls']
      }),
    
    alarms : SC.SelectFieldView.design({         
        useStaticLayout: YES, 
         layout: { left: 100, width: 115, top: 130, height: 20 },
         objects:["None","Today","Tomorrow"]  
      }),
  
    inviteesLabel : SC.LabelView.design({
        layout: { left: 30, width: 60, top: 155, height: 20 },
        value:'invitees',
        classNames:['labelCls']
      }),
  
    invitees : SC.RadioView.design({
      layout: { left: 100, width: 100, top: 160, height: 50 },
      value: "Joan Akki",
      isEnabled: YES,
      items: [{ title: "Joan Akki", value: "Joan Akki", enabled: YES }, { title: "Harold Spork", value: "Harold Spork" }],
      itemTitleKey: 'title',
      itemValueKey: 'value',
      layoutDirection: SC.LAYOUT_VERTICAL
    }),  
    
    urlLabel : SC.LabelView.design({
      layout: { left: 30, width: 60, top: 200, height: 20 },
      value:'url',
      classNames:['labelCls']
    }),    

    url : SC.LabelView.design({
      layout: { left: 100, width: 120, top: 200, height: 20 },
      value:'http://example.com',
      classNames:['urlCls']  
    }),        
    
    noteLabel : SC.LabelView.design({
      layout: { left: 30, width: 60, top: 225, height: 20 },
      value:'note',
      classNames:['labelCls']
    }),  
    
    note : SC.LabelView.design({
      layout: { left: 100, width: 200, top: 225, height: 40 },
      value:'Test'
    }),    
    
    myStatusLabel : SC.LabelView.design({
      layout: { left: 30, width: 60, top: 270, height: 20 },
      value:'my status',
      classNames:['labelCls']
    }),
      
    myStatus : SC.SelectFieldView.design({         
        useStaticLayout: YES, 
         layout: { left: 100, width: 115, top: 270, height: 20 },
         objects:["Accept","Reject","Snooze"]  
      }),
  
    separator : SC.SeparatorView.design({   
        layout: { left: 0, width: 300, top: 285, height: 21 },     
        layoutDirection: SC.LAYOUT_HORIZONTAL
      }),
    
    cancelButton : SC.ButtonView.design({
       layout: { left: 130, width: 80, top: 305, height: 21 },
       title: "Cancel"
    }),

     okButton : SC.ButtonView.design({
        layout: { left: 215, width: 80, top: 305, height: 21 },
          title: "OK"
      })

});