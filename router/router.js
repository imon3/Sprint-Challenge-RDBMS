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

// CREATE ACTIONS REQUEST
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

// GET REQUEST TO RETRIEVE THE PROJECTS AND THE CORRESPONDING ACTIONS
router.get('/projects/:id/actions', (req, res) => {
    const id = req.params.id;

    db('projects')
        .where({ id: id })
        .then(project => {
            db('actions')
                .where({ project_id: id })
                .then(action => {
                    if (project.length > 0) {
                        res.status(200).json({ project, action })
                    } else {
                        res.status(404).json({
                            message: 'The projects can not be found.'
                        })
                    }
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