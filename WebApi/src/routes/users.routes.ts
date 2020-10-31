import { Router } from 'express';
import EmailValidator from 'email-validator';
import { getRepository } from 'typeorm';
import CreateUsersServices from '../services/CreateUsersServices';
import Users from '../models/Users';

const usersRoutes = Router();

interface Types {
    id: string;
    telefone: number;
}

usersRoutes.post('/add', async (request, response) => {
    try {
        const { nome, login, email, senha, cpf, telefone } = request.body;
        const createUsers = new CreateUsersServices();
        if (EmailValidator.validate(email)) {
            const users = await createUsers.execute({
                nome,
                email,
                login,
                cpf,
                telefone,
                senha
            });

            delete users.senha;

            return response.json(users);
        }
        return response.status(400).json({ error: 'Email Invalid ' });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

// userRoutes.patch(
//     '/avatar',
//     ensureAuthenticated,
//     update.single('avatar'),
//     async (req: Request, res: Response) => {
//         try {
//             const avatarUpdate = new AvatarUpdateServices();
//             // eslint-disable-next-line no-console
//             console.log(req.userTypes);
//             // const { id } = req.user;
//             const user = await avatarUpdate.execute({
//                 userId: req.userTypes.id,
//                 avatarName: req.file.filename,
//             });

//             return res.json(user);
//         } catch (error) {
//             return res.status(400).json({ error: error.message });
//         }
//     },
// );

export default usersRoutes;
