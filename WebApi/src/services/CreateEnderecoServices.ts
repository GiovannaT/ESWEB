import { getRepository } from 'typeorm';

import User from '../models/Users';
import Endereco from '../models/Endereco';

interface Request {
    cep: string;
    email: string;
    uf: string;
    pais: string; 
    cidade: string;
    complemento: string;
    numero: number;
    bairro: string;
    rua: string;
}

class CreateEnderecoService {
    public async execute({
        cep,
        uf,
        email,
        pais, 
        cidade,
        complemento,
        numero,
        bairro,
        rua
    }: Request): Promise<Endereco> {
        const enderRepo = getRepository(Endereco);
        const userRepo = getRepository(User);
        const checkEmail = await userRepo.findOne({
            where: { email },
        });
        if (!checkEmail) {
            throw new Error('Email already exists...');
        }

        const enderUserId = checkEmail.id_user

        const ender = enderRepo.create({
            cep,
            uf,
            pais, 
            cidade,
            complemento,
            numero,
            bairro,
            rua,
            usuario: enderUserId
        });
        await enderRepo.save(ender);

        return ender;
    }
}

export default CreateEnderecoService;
