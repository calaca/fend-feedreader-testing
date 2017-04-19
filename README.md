# Feed Reader Testing

[![FEND nanodegree](https://img.shields.io/badge/udacity-FEND-02b3e4.svg?style=flat-square)](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/)

> Project from Udacity's [Front End Web Developer nanodegree program](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/) which consists in creating unit tests to test a RSS feed reader app using [Jasmine](https://jasmine.github.io/). :mortar_board: :computer:

## Stack

- Test Framework:
    - [Jasmine](https://jasmine.github.io/)
    - [jasmine-jquery](https://github.com/velesin/jasmine-jquery)
- Libraries:
    - [JQuery](https://jquery.com/)
    - [Handlebars](http://handlebarsjs.com/)
- API: [Google Feed](https://developers.google.com/feed/)

## Folders Structure

```
.
├── css/
|   └── ...
├── fonts/
|   └── ...
├── jasmine/
|   ├── lib/
|   |   └── ...
|   └── spec/
|   |   └── ...
|   └── jasmine-jquery
|       └── ... 
├── js/
|   └── ...
├── index.html
└── README.md
```

## Run The Project

- Open the `index.html` that is at root level.
- Tests should be presented at the bottom of the page.

## Tests

Tests that have been implemented:

- RSS Feeds
    - are defined
    - should have a URL defined, it should not be empty
    - should have a name defined, it should not be empty
- The menu
    - should be hidden by default
    - should be displayed when clicked and hidden when clicked again
- Initial Entries
    - should have at least one entry displayed on the feed
- New Feed Selection
    - should change the content when a new feed is loaded
