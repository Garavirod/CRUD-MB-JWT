const Sequelize = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("sigesmet_MB", "sigesmet_x", "root1", {
    host: "185.146.30.92",
    dialect: "mariadb",
    port: "3306",
    // operatorsAliases: false,
    define: {
        timestamps: false,
    },
});

module.exports = sequelize;

heroku config: add DATABASE_URL = mysql2: //sigesmet_x:root1@185.146.30.92/sigesmet_MB --app heroku-app-name