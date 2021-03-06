#!/usr/bin/env node

/*

   EXAMPLE: throttle-test.js

   A quick demonstration that illustrates how the internal
   throttle of Snoocore works.

 */

var Snoocore = require('snoocore');

var reddit = new Snoocore({ 
  userAgent: 'Snoocore Examples GitHub: https://github.com/trevorsenior/snoocore-examples'
});

function printNetSecAbout(i) {
  reddit('/r/$subreddit/about.json').get({
    $subreddit: 'netsec'
  }).done(function(res) {
    console.log(i + ': ' +
		res.data.public_description.substring(0, 45) + '...');
  });
}

for (var i = 0; i < 5; ++i) {
  console.log('queued', i);
  printNetSecAbout(i);
}
