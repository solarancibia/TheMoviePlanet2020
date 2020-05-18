module.exports = function (sequelize, DataTypes){
    const movie = sequelize.define(
        'Movies',
        {
            title: DataTypes.STRING
            //pongo el resto de las columnas
        },
        {
            timestamps: false
        }
    );
    return movie;
}