const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


// CREATE PROJECTS REQUEST
router.post('/projects', (req, res) => {
    db('projects')
        .insert(req.body)
        .then(projectId => {
            const [id] = projectId;

            db('projects')
                .where({ id })
                .then(project => {
                    res.status(200).json(project)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/actions', (req, res) => {
    db('actions')
        .insert(req.body)
        .then(actionId => {
            const [id] = actionId;

            db('actions')
                .where({ id })
                .then(action => {
                    res.status(200).json(action)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



module.exports = router;