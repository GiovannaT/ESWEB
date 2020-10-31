import { Router } from 'express';
import EmailValidator from 'email-validator';
import { getRepository } from 'typeorm';
import Endereco from '../models/Endereco';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateEnderecoService from '../services/CreateEnderecoServices';

const enderRoutes = Router();

enderRoutes.get('/', async (request, response) => {
    const enderecoRepo = getRepository(Endereco);
    const ender = await enderecoRepo.find();
    return response.json(ender);
});

enderRoutes.post('/add', async (request, response) => {
    try {
        const {
            cep,
            uf,
            email,
            pais,
            cidade,
            complemento,
            numero,
            bairro,
            rua

        } = request.body;
        const createEnder = new CreateEnderecoService();
        if (EmailValidator.validate(email)) {
            const ender = await createEnder.execute({
                cep,
                uf,
                email,
                pais,
                cidade,
                complemento,
                numero,
                bairro,
                rua
            });
            return response.json(ender);
        }

        return response.status(400).json({ error: 'Email Invalid ' });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default enderRoutes;
