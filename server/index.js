// /**
//  * Configura e inicializa o servidor Express, define a conexão com o banco de dados MySQL
//  * e configura as rotas e middlewares necessários.
//  */
//
// const express = require('express');
// const app = express();
// const cors = require("cors")
// const mysql = require("mysql2");
// /**
//  * Cria uma conexão com o banco de dados MySQL.
//  *
//  * @property host O host do banco de dados.
//  * @property user O usuário do banco de dados.
//  * @property password A senha do banco de dados.
//  * @property database O nome do banco de dados.
//  */
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "dblogus"
// })
//
// /**
//  * Define a lista de origens permitidas para CORS.
//  */
//
// const whiteList = [
//   "http://localhost:5173"
// ];
//
// /**
//  * Configura as opções de CORS.
//  *
//  * @property origin Função que verifica se a origem da requisição está na lista de permissões.
//  */
// const corOptions = {
//   // Permite a requisição se a origem estiver na lista de permissões ou se a origem não estiver definida (ex. requisições locais)
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       // Bloqueia a requisição se a origem não estiver na lista de permissões
//       callback(new Error("Not allowrd by CORS"));
//     }
//   }
// }
//
// // Middleware para permitir o uso de JSON no corpo das requisições
// app.use(express.json());
//
// // Middleware para habilitar CORS com as opções configuradas
// app.use(cors(corOptions))
//
//
// /**
//  * Endpoint POST para registro de usuários.
//  *
//  * @param req A requisição recebida.
//  * @param res A resposta enviada.
//  */
//
// app.post("/register", (req, res) => {
//   const nome = req.body.nome;
//   const email = req.body.email;
//   const password = req.body.password;
//   const role = req.body.role;
//
//   /**
//    * Verifica se o email já está cadastrado.
//    *
//    * @param err O erro ocorrido durante a consulta, se houver.
//    * @param result O resultado da consulta.
//    */
//
//   db.query("SELECT * FROM usuarios WHERE email = ?", [email],
//     (err, result) => {
//       if (err) {
//         // Retorna um erro se houver um problema na consulta
//         res.send(err);
//       }
//       if (result.length == 0) {
//         /**
//          * Se o email não estiver cadastrado, insere o novo usuário no banco de dados.
//          *
//          * @param err O erro ocorrido durante a inserção, se houver.
//          * @param result O resultado da inserção.
//          */
//         db.query("INSERT INTO usuarios (email, password, nome, role) VALUES (?, ?, ?, ?)", [email, password, nome, role], (err, result) => {
//           if (err) {
//             return res.status(500).send({ msg: "Erro ao inserir no banco de dados", error: err });
//           }
//           res.send({msg: "Cadastrado com sucesso"})
//           }
//         )
//       } else {
//         res.status(400).send({msg: "usuario ja cadastrado"});
//       }
//     })
//
// })
// /**
//  * Inicia o servidor na porta 3001.
//  *
//  * @property port A porta em que o servidor está rodando.
//  */
// app.listen(3001, () => {
//   console.log("Rodando na porta 3001")
// })
