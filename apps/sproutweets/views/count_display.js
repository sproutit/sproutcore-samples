/*globals Sproutweets*/

Sproutweets.CountDisplayView = SC.View.extend({
  childViews: 'countView labelView'.w(),
  count: 0,
  label: '',

  countView: SC.LabelView.extend({
    layout: { top: 13 },
    classNames: ['count'],
    textAlign: SC.ALIGN_CENTER,
    valueBinding: '.owner.count'
  }),
  
  labelView: SC.LabelView.extend({
    layout: { height: 30, bottom: 0 },
    classNames: ['label'],

    valueBinding: '.owner.label',
    localize: YES,
    textAlign: SC.ALIGN_CENTER
  })
});