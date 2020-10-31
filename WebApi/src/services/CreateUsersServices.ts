import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Users from '../models/Users';

interface Request {
    nome: string
    login: string
    email: string
    cpf: string
    senha: string
    telefone: number
}

class CreateUsersServices {
    public async execute({ nome, email, senha, cpf, login, telefone }: Request): Promise<Users> {
        const userRepo = getRepository(Users);
        const checkEmail = await userRepo.findOne({
            where: { email },
        });
        if (checkEmail) {
            throw new Error('Email already exists...');
        }
        const hashPass = await hash(senha, 12);
        const user = userRepo.create({
            nome,
            login,
            email,
            cpf,
            senha: hashPass,
            telefone
        });
        await userRepo.save(user);
        return user;
    }
}

export default CreateUsersServices;
