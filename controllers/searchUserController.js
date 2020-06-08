const db = require('../database/models');
const op = db.Sequelize.Op;

module.exports = {

    search: function(req, res){
       
        // se utiliza la const db que se conecta con el modelo para poder utilizar los datos de la base de datos.
        // Usa el metodo findAll para buscar entre todos los datos registrados en la tabla y dentro el where para 
        //pasarle condiciones. En este caso como no se trata de comparaciones de igualdad se usan los operadores de 
        //Sequelize que se importan en la const de arriba y se implementan en el op.or para indicarle que busque los
        // datos de email o name segun corresponda y en el op.like para indicar que lo que busque el usuario en el 
        //search del ejs que se capture en el req.query.q se ajuste a email o a name. Se usa req.query porque queremos
        // que capture los parametros de la consulta de la URL despues del ? de q.
       
        db.users.findAll(
            {
                where: {
                    [op.or]: {
                        email: {[op.like]: '%' + req.query.q + '%'},
                        name: {[op.like]: '%' + req.query.q + '%'}
                    }

                }
                      
            })
            // El then, al ser una funcion asincronica, ejecuta el console.log con el parametro
            // searchUsers unicamente si el findAll retorna resultados. A partir de eso, renderiza la vista userResults
            // y le pasa el parametro searchUsers para que lo pueda utilizar bajo el nombre searchUsers.
            .then (function(searchUsers){
                console.log(searchUsers)
                res.render('userResults',{
                    searchUsers: searchUsers
                })
            })
            .catch(error => {
                return res.send(error);
            })
    },

    // Busca en el modelo en la tabla users el id del usuario a traves de params que lo contiene y lo pone en la parte de :id de la ruta.
    //Con el .then se verifica que haya un resultado y si lo hay se renderiza la vista de detalleUser y le pasa los datos del parametro resultado
    //con el nombre userResult.
    userDetails: function(req,res) {
        db.users.findByPk(req.params.id)
            .then(function (resultado) {
                return res.render('detalleUser', {
                    userResult: resultado
                })
            })
       
    }
}

 
