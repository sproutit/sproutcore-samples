// ==========================================================================
// Project:   DragList.Employee Fixtures
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

sc_require('models/employee');

// NOTE: The employee fixtures are stored here instead of the fixtures 
// directory so that they will be included in production builds as well as
// debug builds.
//
// You wouldn't normally do this in code, but since this is an example we need
// the data to be always present.

DragList.Employee.FIXTURES = [

  { guid: 1,
    firstName: "Michael",
    lastName: "Scott" },

  { guid: 2,
    firstName: "Dwight",
    lastName: "Schrute" },

  { guid: 3,
    firstName: "Jim",
    lastName: "Halpert" },

  { guid: 4,
    firstName: "Pam",
    lastName: "Beesly" },

  { guid: 5,
    firstName: "Ryan",
    lastName: "Howard" },
    
  { guid: 11,
    firstName: "Angela",
    lastName: "Martin" },

  { guid: 21,
    firstName: "Oscar",
    lastName: "Martinez" },

  { guid: 31,
    firstName: "Kevin",
    lastName: "Malone" },

  { guid: 41,
    firstName: "Phyllis",
    lastName: "Lapin" },

  { guid: 51,
    firstName: "Stanley",
    lastName: "Hudson" },
    
    
  { guid: 12,
    firstName: "Andy",
    lastName: "Bernard" },

  { guid: 22,
    firstName: "Karen",
    lastName: "Filippelli" },

  { guid: 32,
    firstName: "Creed",
    lastName: "Bratton" },

  { guid: 42,
    firstName: "Kelly",
    lastName: "Kapoor" },

  { guid: 52,
    firstName: "Meredith",
    lastName: "Palmer" },
    
  { guid: 13,
    firstName: "Toby",
    lastName: "Flenderson" },

  { guid: 23,
    firstName: "Jan",
    lastName: "Levinson" },

  { guid: 33,
    firstName: "Darryl",
    lastName: "Philbin" },

  { guid: 43,
    firstName: "Roy",
    lastName: "Anderson" }
];
