import mysql from 'mysql'

//crear conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user:'dicias',
    password:'123456',
    database: 'contactos_test'
})

const conectar = () =>{
    conector.connect(err =>{
        if(err) throw err
        console.log('DB conectada...');
    })
}

const agregarDatos = (numero, nombre)=>{
    const queryAgregar = `INSERT INTO agenda(id_agenda, nombre_contacto, numero_contacto) VALUES (${null}, "${nombre}",${numero})`
    conector.query(queryAgregar, (err, result)=>{
        if(err) throw err
        console.log(result);
    })
}

const obtenerDatos = () =>{
    return new Promise((resolve, reject)=>{
        const queryObtener = 'SELECT * FROM agenda'
        conector.query(queryObtener, (err, result) =>{
            if(err) reject(err)
            resolve(result)
        })
    })
}

const eliminarDatos = (id) =>{
    const queryEliminar = `DELETE FROM agenda WHERE id_agenda=${id}`
     conector.query(queryEliminar, (err,result)=>{
        if(err) throw err
        console.log(result);
     })
}

export {conectar, agregarDatos, obtenerDatos, eliminarDatos}