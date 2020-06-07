module.exports = function (sequelize, DataTypes){
    const userSearch = sequelize.define(
        'searchUsers',
        {
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            }, 
        },
        {
            timestamps: false,
        }
    );
    
    return userSearch;
}