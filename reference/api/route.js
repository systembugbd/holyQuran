const route = require('express').Router();
const History = require('./History');

route.get('/', (req, res) => {
    History.find()
        .then(history => {
            res.status(200).json(history);
        })
        .catch(e => {
            console.log(e);
            res.status(500).json({
                message: 'Error Occourred'
            });

        });
});

route.post('/', (req, res) => {

    let history = new History(req.body);

    history.save()
        .then(()=> History.find())
        .then(history => {
            res.status(201).json(history);
        })
        .catch(e => {
            console.log(e.message);
            res.status(500).json({
                message: 'Error Occurred'
            });
        });

});


//#Covid 19




route.get('*', (req, res) => {
    res.send('<h1>404 Page Not found;<a href="/">Click to back</a></h1>');
});



module.exports = route;