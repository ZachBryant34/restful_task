const mongoose = require('mongoose');
const tasks = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/', (req, res) => {

    })

    app.get('/tasks', (req, res) => {
        tasks.index(req, res)
    })

    app.get('/tasks/:id', (req, res) => {
        tasks.display(req, res)
    })
    
    app.post('/new/tasks', (req, res) => {
        tasks.create(req, res)
    })
    
    app.put('/update/:id', (req, res) => {
        tasks.update(req, res)
    })
    
    app.delete('/remove/:id', (req, res) => {
        tasks.destroy(req, res)
    })
}