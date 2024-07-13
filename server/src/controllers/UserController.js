import dbconfig from "../config/database";
import bcryptjs from "bcrypt";

class UserController {
    async store(req, res) {
        const {nome, email, password, role = 'estudante'} = req.body;
        try {
            const connection = await dbconfig
            const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
            if (rows.length > 0) {
                return res.status(400).json({msg: 'Email já existe'});
            }
            const password_hash = await bcryptjs.hash(password, 8);


            const [result] = await connection.execute(
                'INSERT INTO users (nome, email, password_hash, role) VALUES (?, ?, ?, ?)',
                [nome, email, password_hash, role]
            );
            const id = result.insertId;
            await connection.end();
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            })
        }
    }

    async index(req, res) {
        try {
            const connection = await dbconfig;

            const [users] = await connection.execute('SELECT id, nome, email, role FROM users');
            await connection.end();

            console.log('Usuários encontrados:', users);
            return res.json(users);
        } catch (e) {
            console.error('Erro ao listar usuários:', e);
            return res.status(500).json({
                errors: ['Erro ao listar usuários.'],
            });
        }
    }

    async show(req, res) {
        try {
            const connection = await dbconfig;
            const [users] = await connection.execute('SELECT id, nome, email, role FROM users', [req.params.id]);
            await connection.end();

            if (users.length === 0) {
                return res.status(404).json({errors: ['Usuário não encontrado.']});
            }
            const {id, nome, email, role} = users[0];
            return res.json({id, nome, email, role});
        } catch (e) {
            return res.status(500).json({
                errors: ['Erro ao buscar o usuario', e]
            })
        }
    }

    async update(req, res) {
        const {nome, email, password, role} = req.body;
        try {
            const connection = await dbconfig;

            const [users] = await connection.execute('SELECT * FROM users WHERE id = ?', [req.params.id]);
            if (users.length === 0) {
                return res.status(404).json({errors: ['Usuário não encontrado.']});
            }
            const user = users[0];
            const password_hash = password ? await bcryptjs.hash(password, 8) : user.password_hash;
            await connection.execute(
                'UPDATE users SET nome = ?, email = ?, password_hash = ?, role = ? WHERE id = ?',
                [nome || user.nome, email || user.email, password_hash, role || user.role, req.params.id]
            );
            await connection.end();
            return res.json({
                id: user.id,
                nome: nome || user.nome,
                email: email || user.email,
                role: role || user.role
            });
        } catch (e) {
            return res.status(400).json({
                errors: [e.message],
            });
        }
    }

    async delete(req, res) {
        try {
            const connection = await dbconfig;
            const [users] = await connection.execute('SELECT * FROM users WHERE id = ?', [req.params.id]);
            if (users.length === 0) {
                return res.status(404).json({errors: ['Usuário não encontrado.']});
            }
            await connection.execute('DELETE FROM users WHERE id = ?', [req.params.id]);
            await connection.end();
            return res.json(null);
        } catch (e) {
            return res.status(400).json({
                errors: [e.message]
            })
        }

    }

}