/*globals Twitter*/

Twitter.TwitterDataSource = SC.CascadeDataSource.extend({
  dataSources: 'tweets'.w(),

  tweets: Twitter.TweetsDataSource.create()
});