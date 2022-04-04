const { Router } = require('express');

const router = Router();

router.get('/salute', (req, res)=>res.send('Hello there!')); //Endpoint llamado salute

router.get('salutes', (req, res) => {
    res.json({
        msg: 'Saludos a todos, usando el get'
    })
})
router.put('salutes', (req, res) => {
    res.status(400).json({
        msg: 'Saludos a todos, usando el put'
    })
})
router.post('salutes', (req, res) => {
    res.status(201).json({
        msg: 'Saludos a todos, usando el post'
    })
})
router.delete('salutes', (req, res) => {
    res.json({
        msg: 'eliminando a todos xdxdxd'
    })
})
router.patch('salutes', (req, res) => {
    res.json({
        msg: 'uso del PATCH'
    })
})

module.exports = router;