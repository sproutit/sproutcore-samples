// ==========================================================================
// Project:   TableView - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */


var tableColumns = [
  SC.TableColumn.create({
    key:   'displayName',
    label: 'Title',
    width: 500
  }),
  
  SC.TableColumn.create({
    key:   'rating',
    label: 'Rating',
    width: 200,
    minWidth: 150
  }),
  SC.TableColumn.create({
    key:   'votes',
    label: 'Votes',
    width: 200,
    minWidth: 150
  })  
];

// This page describes the main user interface for your application.  
TableView.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    backgroundColor: "#333",
    
    childViews: 'topView middleView bottomView'.w(),
    
    topView: SC.View.design(SC.Border, {
      layout: { top: 0, left: 0, right: 0, height: 41 },
      childViews: 'labelView'.w(),
      borderStyle: SC.BORDER_BOTTOM,

      labelView: SC.LabelView.design({
        classNames: ['movies-title'],
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        fontColor: "white",
        value:   'IMDB Ratings'
      })
    }),
    
    middleView: SC.TableView.design({
      backgroundColor: "white",
      layout: { top: 42, bottom: 42, left: 0, right: 0 },
      
      columns: tableColumns,
      flexibleColumn:   tableColumns.objectAt(0),
      contentBinding:   'TableView.moviesController.arrangedObjects',
      selectionBinding: 'TableView.moviesController.selection',
      canReorderContent: YES,
      exampleView: SC.TableRowView,
      recordType: TableView.Movie
    }),

    bottomView: SC.View.design(SC.Border, {
      layout: { bottom: 0, left: 0, right: 0, height: 41 },
      childViews: 'summaryView'.w(),
      borderStyle: SC.BORDER_TOP,

      summaryView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20 },
        textAlign: SC.ALIGN_CENTER,

        valueBinding: "TableView.moviesController.summary"
      })
    })
  })

});
