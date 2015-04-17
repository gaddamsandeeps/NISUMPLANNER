/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('logstatus', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
};
