import express from 'express' //importar express
// esta la forma de importar por modulos
//vendria a sustituir al const express = require('express)
//se agrega al package: "type": "module", 
import { conectar, agregarDatos, obtenerDatos, eliminarDatos } from './src/mysql_conector.js';

const app = express(); //iniciar express

const PUERTO = process.env.PUERTO || 3000; //declarar el puerto
//iniciar el server
app.listen(PUERTO,()=>{
    console.log(`Servidor iniciado en el puerto ${PUERTO}`)
})

//Configuracion de "pug"
app.set('views', './vistas');
app.set('view engine', 'pug');

//configuracion de archivos estaticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'))


app.get('/', async (req,res)=>{
//    res.send('Bienvenido a mi API 😈🧪💻')
try{
//conectar()
const todos = await obtenerDatos()
//console.log(todos)
res.render('index', {titulo : 'Aplicacion de contactos', dato: 'cualquier texto', contactos: todos})
//console.log(todos, 'desde todos');
}
catch(err){
    console.log(err);
    res.status(500).send('Error al obtener los datos').end()
}
})


app.get('/agregar/:nombre/:numero', (req,res)=>{
    let nombre = req.params.nombre
    let numero = req.params.numero
    //console.log(nombre, numero);
    agregarDatos(numero, nombre)
    res.redirect('/')  
})

app.get('/borrar/:id', (req,res)=>{
    let id = req.params.id
    eliminarDatos(id)
    res.redirect('/')
})