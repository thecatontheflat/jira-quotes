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

    //app.get('/quote', addon.authenticate(), function (req, res) {
    app.get('/quote', function (req, res) {
            res.render('hello-world', {
                title: 'Atlassian Connect'
                //issueId: req.query('issueId')
            });
        }
    );
};
