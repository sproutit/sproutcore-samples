sc_require('core');

Statechart.bodyPage = SC.Page.design({
  
  mainPane: SC.MainPane.design({
    showStatechartDebugger: YES,
    defaultResponder: Statechart
  })
  
});