$(function() {
    /**
    * @description RSS Feeds test suite
    */
    describe('RSS Feeds', function() {
        /**
        * @description Tests if 'allFeeds' is defined and not empty
        */
        it('are defined', function() {
            expect(allFeeds).toBeTruthy();
        });

        /**
        * @description Tests if each feed has a URL defined and not empty
        */
        it('should have a URL defined, it should not be empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        /**
        * @description Tests if each feed has a name defined and is not empty
        */
        it('should have a name defined, it should not be empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });

        /**
        * @description Tests if each feed has a valid URL
        */
        it('should have a valid URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toMatch(/^(http|https):\/\//);
            });
        });
    });

    /**
    * @description Menu test suite
    */
    describe('The menu', function() {
        /**
        * @description Tests if the menu is hidden by default
        */
        it('should be hidden by default', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });

        /**
        * @description Tests if menu is toggled when clicked
        */
        it('should be displayed when clicked and hidden when clicked again', function() {
            $('.menu-icon-link').click();
            expect($('body')).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

    /**
    * @description Initial Entries test suite
    */
    describe('Initial Entries', function() {
        /**
        * @description Makes sure the loadFeed function is called and complete its work.
        * Tests if there is at least one entry displayed on the feed.
        * @param {function} done - Callback function to be called when asynchronous request is finished
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('should have at least one entry displayed on the feed', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /**
    * @description New Feed Selection test suite
    */
    describe('New Feed Selection', function() {
        /**
        * @description Tests if the content changes when a new feed is selected.
        * Reloads default feed after the test is done.
        * @param {function} done - Callback function to be called when asynchronous request is finished
        */
        var firstFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });
        afterEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('should change the content when a new feed is loaded', function() {
            var secondFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
