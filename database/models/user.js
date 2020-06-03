module.exports = function (sequelize, DataTypes){
    const user = sequelize.define(
        'users',
        {
            name: {type: DataTypes.STRING},
            email: {type: DataTypes.STRING},
            pass: {type: DataTypes.STRING},
            bdate: {type: DataTypes.DATE},
        },
        {
            timestamps: false,
        }


    );
    // se asocian las tablas (un user "has many" reviews, asociado en user_id) 
    user.associate = function (models) {
        user.hasMany(models.Reviews, {
            as: "reviews",
            foreignKey: "id"
        })
    }

    return user;
}