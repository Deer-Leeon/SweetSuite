const router = require('express').Router();
let Assignment = require('../models/assignment.model');

router.route('/').get((req, res) => {
    Assignment.find()
        .then(assignments => res.json(assignments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newAssignment = new Assignment({
        username,
        description,
        duration,
        date,
    });

    newAssignment.save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;