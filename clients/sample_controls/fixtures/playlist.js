// ==========================================================================
// SampleControls.Playlist Fixtures
// ==========================================================================

require('core') ;


SampleControls.FIXTURES = SampleControls.FIXTURES.concat(function() {
  
  var library = 'Music,Movies,TV Shows,Podcasts,Radio,Ringtones'.split(',');
  var store = 'Store Purchased Downloads'.split(' ');
  var playlists ='Shuffle,Christmas,Blues,Classical,Electronic,Jazz,New Music,Top 50 Most Played,Unrated,Chillout'.split(',');
  
  var ret = [] ;
  var fadd = function(group, names) {
    for(var idx =0;idx<names.length;idx++) {
      ret.push({
        guid: (group + idx).toString(),
        type: "Playlist",
        group: group,
        name: names[idx]
      }) ;
    }
  } ;

  fadd('library', library) ;
  fadd('store', store) ;
  fadd('playlists', playlists) ;
  
  return ret ;
}()) ;


