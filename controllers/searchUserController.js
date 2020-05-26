const db = require('../database/models');
const op = db.Sequelize.Op;

module.exports = {
    search: function(req, res){
        db.searchUsers.findAll(
            {
                where: [
                         {email: {[op.like]: '%' + req.query.users + '%' }}
                    ],
            })
            .then (function(searchUsers){
                console.log(searchUsers);

                if(searchUsers.length == 0){
                    res.render('userResults',{
                       searchUsers: "No results were found" 
                    })
                }
    
                res.render('userResults',{
                    searchUsers: searchUsers
                })
            })
            .catch(error => {
                return res.send(error);
            })
    },
}

 