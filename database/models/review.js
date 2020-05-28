module.exports = function (sequelize, DataTypes){
    const review = sequelize.define(
        'Reviews',
        {
            movie_id: {type: DataTypes.INTEGER},
            user_id: {type: DataTypes.INTEGER},
            review_text: {type: DataTypes.STRING},
            created_at: {type: DataTypes.DATE},
            updated_at: {type: DataTypes.DATE},
            rating: {type: DataTypes.DECIMAL}
        },
        {
            timestamps: false,
        }
    );

    //hay que asociar 

    return review;
}