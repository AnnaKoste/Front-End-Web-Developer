$(function() {
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });

        it('name defined', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });


    describe('The menu', function() {
        /* a test that ensures the menu element is hidden by default
         */
         it('menu hidden', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it('menu icon is clicked', function() {
            var menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function() {
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('loadFeed function', function() {
           var entry = document.querySelectorAll('.entry');
           expect(entry.length).not.toBe(0);
         });
    });

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function() {
        var oldContent;
        var newContent;
        const feed = document.querySelector('.feed');

        beforeEach(function(done) {
          loadFeed(0, function () {
            oldContent = feed.innerHTML;
            loadFeed(1, function() {
              newContent = feed.innerHTML;
              done();
            });
          });
        });

        it('content actually changes', function() {
            expect(oldContent).not.toEqual(newContent);
        });
    });
}());
