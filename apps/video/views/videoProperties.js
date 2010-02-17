// ==========================================================================
// Project:   Video.VideoProperties
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals VideoApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/

VideoApp.numberProps=13;

VideoApp.VideoProperties = SC.View.extend({
  
  videoView: null,
  classNames: ['properties'],
  childViews : 'currentTimeLabel currentTimeValue durationLabel durationValue volumeLabel volumeValue sizeLabel sizeValue loadedDataLabel loadedDataValue pausedLabel pausedValue loadedLabel loadedValue endedLabel endedValue canPlayLabel canPlayValue videoWidthLabel videoWidthValue videoHeightLabel videoHeightValue captionsEnabledLabel captionsEnabledValue timeLabel timeValue'.w(),
  
  currentTimeLabel:SC.LabelView.design({
    layout:{top: 0, left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Current Time:'
  }),
  currentTimeValue:SC.LabelView.design({
    layout:{top: 0, right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.currentTime'
  }),
  durationLabel:SC.LabelView.design({
    layout:{top: (1/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Duration:'
  }),
  durationValue:SC.LabelView.design({
    layout:{top: (1/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.duration'
  }),
  volumeLabel:SC.LabelView.design({
    layout:{top: (2/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Volume:'
  }),
  volumeValue:SC.LabelView.design({
    layout:{top: (2/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.volume'
  }),
  sizeLabel:SC.LabelView.design({
    layout:{top: (3/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Size:'
  }),
  sizeValue:SC.LabelView.design({
    layout:{top: (3/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.size'
  }),
  loadedDataLabel:SC.LabelView.design({
    layout:{top: (4/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'LoadedData:'
  }),
  loadedDataValue:SC.LabelView.design({
    layout:{top: (4/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.loadedTimeRanges'
  }),
  pausedLabel:SC.LabelView.design({
    layout:{top: (5/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Paused:'
  }),
  pausedValue:SC.LabelView.design({
    layout:{top: (5/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.paused'
  }),
  loadedLabel:SC.LabelView.design({
    layout:{top: (6/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Loaded:'
  }),
  loadedValue:SC.LabelView.design({
    layout:{top: (6/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.loaded'
  }),
  endedLabel:SC.LabelView.design({
    layout:{top: (7/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Ended:'
  }),
  endedValue:SC.LabelView.design({
    layout:{top: (7/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.ended'
  }),
  canPlayLabel:SC.LabelView.design({
    layout:{top: (8/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Can Play:'
  }),
  canPlayValue:SC.LabelView.design({
    layout:{top: (8/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.canPlay'
  }),
  videoWidthLabel:SC.LabelView.design({
    layout:{top: (9/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Width:'
  }),
  videoWidthValue:SC.LabelView.design({
    layout:{top: (9/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.videoWidth'
  }),
  videoHeightLabel:SC.LabelView.design({
    layout:{top: (10/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Height:'
  }),
  videoHeightValue:SC.LabelView.design({
    layout:{top: (10/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.videoHeight'
  }),
  captionsEnabledLabel:SC.LabelView.design({
    layout:{top: (11/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Captions:'
  }),
  captionsEnabledValue:SC.LabelView.design({
    layout:{top: (11/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.captionsEnabled'
  }),
  timeLabel:SC.LabelView.design({
    layout:{top: (12/VideoApp.numberProps), left:0, width: 0.5, height: (1/VideoApp.numberProps)},
    textAlign: SC.ALIGN_RIGHT,
    value: 'Time:'
  }),
  timeValue:SC.LabelView.design({
    layout:{top: (12/VideoApp.numberProps), right:0, width: 0.4, height: (1/VideoApp.numberProps)},
    valueBinding: '*owner.videoView.time'
  })
});

