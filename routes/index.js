var excuses = require('excuses').developers;

module.exports = function (app, addon) {
    app.get('/', function (req, res) {
        res.format({
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    app.get('/quote', function (req, res) {
            var quote = excuses.getRandom();

            res.render('quote', {
                title: 'Atlassian Connect',
                quote: quote
            });
        }
    );
};
