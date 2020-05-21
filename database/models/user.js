module.exports = function (sequelize, DataTypes){
    const user = sequelize.define(
        'users',
        cols = {
            id: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            pass: {
                type: DataTypes.STRING
            },
            bdate: {
                type: DataTypes.DATETIME
            },

        },
        {
            timestamps: false,
        }
    );
    return user;
}