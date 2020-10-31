import { Router } from 'express';
import { getRepository } from 'typeorm';
import Produto from '../models/Produto';
import CreateProdutoService from '../services/CreateProdutoServices';

const prodRoutes = Router();

prodRoutes.get('/', async (request, response) => {
    const prodRepo = getRepository(Produto);
    const prod = await prodRepo.find();
    return response.json(prod);
});

prodRoutes.post('/add', async (request, response) => {
    try {
        const {
            nome,
            preco,
            masculino,
            feminino,
            infantil,
            importado,
            nacional,
            quantidade,
            perfume,
            sabonete,
            hidratante,
        } = request.body;
        const createProd = new CreateProdutoService();
        const prod = await createProd.execute({
            nome,
            preco,
            masculino,
            feminino,
            infantil,
            importado,
            nacional,
            quantidade,
            perfume,
            sabonete,
            hidratante
        });
        return response.json(prod);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default prodRoutes;