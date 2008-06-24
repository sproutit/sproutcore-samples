// ==========================================================================
// Twitter.Status Fixtures
// ==========================================================================

require('core') ;

Twitter.FIXTURES = Twitter.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.
  
  {
      "in_reply_to_status_id": null,
      "favorited": false,
      "source": "<a href=\"http://iconfactory.com/software/twitterrific\">twitterrific</a>",
      "id":840664999,
      guid:840664999,
    "user": 3462491,
    "in_reply_to_user_id":null,
    "truncated":false,
    "text":"waiting for my Linkinus license",
    "created_at":"Sun Jun 22 03:10:40 +0000 2008",
    type: "Status"
  }
  
  // { guid: 1, 
  //   type: 'Contact', 
  //   firstName: "Michael", 
  //   lastName: "Scott" 
  // },
  // 
  // { guid: 2, 
  //   type: 'Contact', 
  //   firstName: "Dwight", 
  //   lastName: "Schrute" 
  // },
  // 
  // { guid: 3, 
  //   type: 'Contact', 
  //   firstName: "Jim", 
  //   lastName: "Halpert" 
  // },
  // 
  // { guid: 4, 
  //   type: 'Contact', 
  //   firstName: "Pam", 
  //   lastName: "Beesly" 
  // },
  // 
  // { guid: 5, 
  //   type: 'Contact', 
  //   firstName: "Ryan", 
  //   lastName: "Howard" 
  // }  

]);
