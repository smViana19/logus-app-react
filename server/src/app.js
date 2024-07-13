const express = require('express')
require('./database/db')
const cors = require('cors')
const helmet = require('helmet')
const { resolve } = require('path')


// import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
// import tokenRoutes from "./routes/tokenRoutes";
// import taskRoutes from "./routes/taskRoutes";

/**
 * Define a lista de origens permitidas para CORS.
 */
const whiteList = [
    "http://localhost:5174",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5175",
];

/**
 * Configura as opções de CORS.
 *
 * @property origin Função que verifica se a origem da requisição está na lista de permissões.
 */

const corOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

/**
 * Classe App que configura e inicializa o servidor Express, define middlewares e rotas.
 */

class App {
    /**
     * Construtor que inicializa a aplicação Express e configura middlewares e rotas.
     */
    constructor() {
        /**
         * Atributo que representa a aplicação Express.
         */
        this.App = express();
        this.middlewares();
        this.routes();
    }
    /**
     * Método que configura os middlewares da aplicação.
     */
    middlewares() {
        this.App.use(cors(corOptions));
        this.App.use(helmet());
        this.App.use(express.urlencoded({ extended: true })); //configuracao do express
        this.App.use(express.json());
        this.App.use(express.static(resolve(__dirname, "uploads")));
    }
    /**
     * Método que configura as rotas da aplicação.
     */
    routes() {
        //metodo das rotas
        this.App.use("/", homeRoutes);
        this.App.use("/users/", userRoutes);
        this.App.use("/tokens/", tokenRoutes);
        this.App.use("/tasks/", taskRoutes);
    }
}

export default new App().App;
