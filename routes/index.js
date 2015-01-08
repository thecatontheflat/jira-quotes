var excuses = require('../excuses.json');

module.exports = function (app, addon) {
    app.get('/', function (req, res) {
        res.format({
            // If the request content-type is text-html, it will decide which to serve up
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    app.get('/quote', function (req, res) {
            var quote = excuses.excuses[Math.floor(Math.random() * excuses.excuses.length)];

            res.render('quote', {
                title: 'Atlassian Connect',
                quote: quote
            });
        }
    );
};
