import { getRepository } from 'typeorm';
import User from '../models/Users';
import Produto from '../models/Produto';

interface Request {
    requerente: User;
    nome: string;
    preco: number;
    masculino: boolean;
    feminino: boolean;
    infantil: boolean;
    importado: boolean;
    nacional: boolean;
    quantidade: number;
    perfume: boolean;
    sabonete: boolean;
    hidratante: boolean;
}

class CreateProdutoServices {
    public async execute({
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
    }: Request): Promise<Produto> {
        const produtoRepo = getRepository(Produto);

        const produto = produtoRepo.create({
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
        });
        await produtoRepo.save(produto);
        return produto;
    }
}

export default CreateProdutoServices;
