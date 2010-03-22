// ==========================================================================
// Project:   Audio.AudioProperties
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AudioApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/

Audio.numberProps=10;

Audio.AudioProperties = SC.View.extend({
  
  audioView: null,
  classNames: ['properties'],
  childViews : 'currentTimeLabel currentTimeValue durationLabel durationValue volumeLabel volumeValue sizeLabel sizeValue loadedDataLabel loadedDataValue pausedLabel pausedValue loadedLabel loadedValue endedLabel endedValue canPlayLabel canPlayValue timeLabel timeValue'.w(),
  
  currentTimeLabel:SC.LabelView.design({
    layout:{top: 0, left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Current Time:'
  }),
  currentTimeValue:SC.LabelView.design({
    layout:{top: 0, right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.currentTime'
  }),
  durationLabel:SC.LabelView.design({
    layout:{top: (1/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Duration:'
  }),
  durationValue:SC.LabelView.design({
    layout:{top: (1/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.duration'
  }),
  volumeLabel:SC.LabelView.design({
    layout:{top: (2/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Volume:'
  }),
  volumeValue:SC.LabelView.design({
    layout:{top: (2/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.volume'
  }),
  sizeLabel:SC.LabelView.design({
    layout:{top: (3/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Size:'
  }),
  sizeValue:SC.LabelView.design({
    layout:{top: (3/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.size'
  }),
  loadedDataLabel:SC.LabelView.design({
    layout:{top: (4/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'LoadedData:'
  }),
  loadedDataValue:SC.LabelView.design({
    layout:{top: (4/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.loadedTimeRanges'
  }),
  pausedLabel:SC.LabelView.design({
    layout:{top: (5/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Paused:'
  }),
  pausedValue:SC.LabelView.design({
    layout:{top: (5/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.paused'
  }),
  loadedLabel:SC.LabelView.design({
    layout:{top: (6/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Loaded:'
  }),
  loadedValue:SC.LabelView.design({
    layout:{top: (6/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.loaded'
  }),
  endedLabel:SC.LabelView.design({
    layout:{top: (7/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Ended:'
  }),
  endedValue:SC.LabelView.design({
    layout:{top: (7/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.ended'
  }),
  canPlayLabel:SC.LabelView.design({
    layout:{top: (8/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Can Play:'
  }),
  canPlayValue:SC.LabelView.design({
    layout:{top: (8/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.canPlay'
  }),
  timeLabel:SC.LabelView.design({
    layout:{top: (9/Audio.numberProps), left:0, width: 0.5, height: (1/Audio.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Time:'
  }),
  timeValue:SC.LabelView.design({
    layout:{top: (9/Audio.numberProps), right:0, width: 0.4, height: (1/Audio.numberProps)},
    valueBinding: '*owner.audioView.time'
  })
});

