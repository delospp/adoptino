import express from 'express';
const router = express.Router();
// importar el modelo nota
import Login from '../models/login';
// Agregar una nota
router.post('/nueva-usuario', async(req, res) => {
 const body = req.body;
 try {
 const loginDb = await Nota.create(body);
 res.status(200).json(loginDb);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

router.get('/login/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const loginDb = await Login.findOne({_id});
    res.json(loginDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error})
    }
});

// Get con todos los documentos
router.get('/login', async(req, res) => {
    try {
    const loginDb = await Login.find();
    res.json(loginDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error})
    }
});

// Delete eliminar una nota
router.delete('/login/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const loginDb = await Login.findByIdAndDelete({_id});
    if(!loginDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(loginDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error})
    }
});

// Put actualizar una nota
router.put('/login/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const loginDb = await Login.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(loginDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error})
    }
});  

// Exportamos la configuración de express app
module.exports = router;
