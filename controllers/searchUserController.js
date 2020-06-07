const db = require('../database/models');
const op = db.Sequelize.Op;

module.exports = {
    search: function(req, res){
       
        db.users.findAll(
            {
                where: [
                         {name: {[op.like]: '%' + req.query.q + '%' }}
                    ],
            })
            .then (function(searchUsers){
                console.log(searchUsers);
                res.render('userResults',{
                    searchUsers: searchUsers
                })
            })
            .catch(error => {
                return res.send(error);
            })
    },
    userDetails: function(req,res) {
        db.users.findByPk(req.params.id)
            .then(function (resultado) {
                //return res.send(resultado)
                return res.render('detalleUser', {
                    userResult: resultado
                })
            })
       
    }
}

 
