// ==========================================================================
// Twitter.User
// ==========================================================================

require('core');

/** @class

  Represents a user in Twitter.  Has the following properties:
  
  name: real name
  screen_name: the screen name.
  followers_count: the number of followers
  url: home url
  profile_image_url: the url for the user profile image.
  description: user's description.
  location: the user's location.
  id: the id.  equivalent to the guid.
  protected: boolean. 

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
Twitter.User = SC.Record.extend(
/** @scope Twitter.User.prototype */ {

  protectedType: Boolean, // since this is a boolean, allow type coersion.
  
  statuses: function() {
    return Twitter.Status.findAll({ user: this });
  }.property()
  
}) ;
