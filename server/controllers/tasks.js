const mongoose = require('mongoose');
const {Task} = require('../models/task.js')

module.exports = {
    index: (req, res) => {
        Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
    },
    display: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const task = new Task();
        task.title = req.body.title;
        task.description = req.body.description
        task.save()
            .then(() => res.redirect('/'))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        Task.updateOne({_id: req.params.id}, {title: req.body.title, description: req.body.description, completed:req.body.completed})
        .then(() => res.redirect('/'))
        .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Task.deleteOne({_id: req.params.id})
                .then(deletedUser => res.redirect('/'))
                .catch(err => res.json(err));
    }
}