const db = require('../database/models');

db.users.findAll({
    where: [
        {name: req.body},
        {email: req.body}
    ]
}).then(results => {
    console.log(results);
})