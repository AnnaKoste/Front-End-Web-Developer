# Project Overview

This is our RSS feed reader application. It uses the Google Feed Reader API to grab RSS feeds as JSON object.


# Unit tests

`feedreader.js` contains tests:
1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
3. A test suite named `"The menu"` contains:
- a test that ensures the menu element is hidden by default
- a test that ensures the menu changes visibility when the menu icon is clicked.
4. A test suite named `"Initial Entries"` that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
5. A test suite named `"New Feed Selection"` that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes


# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
