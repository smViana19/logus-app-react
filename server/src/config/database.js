const mysql = require("mysql2");

const dbconfig = mysql.createConnection({

    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE,
    define: {
        updated: 'updated_at',
        createdAt: 'created_at',
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        timezone: 'America/SaoPaulo'
    },


})

export default dbconfig;