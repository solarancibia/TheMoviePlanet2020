module.exports = function (sequelize, DataTypes){
    const user = sequelize.define(
        'users',
        {
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
                type: DataTypes.DATE
            },
        },
        {
            timestamps: false,
        }
    );
    return user;
}