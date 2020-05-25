module.exports = function (sequelize, DataTypes){
    const login = sequelize.define(
        'log',
        {
            email: {type: DataTypes.STRING},
            pass: {type: DataTypes.STRING},
        },
        {
            timestamps: false,
        }
    );
    return login;
}