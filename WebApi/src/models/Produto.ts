import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Users from './Users';

@Entity()
class Produto {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Users, { nullable: true })
    @JoinColumn({ name: 'id_user' })
    requerente: Users;

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column()
    masculino: boolean;

    @Column()
    feminino: boolean;

    @Column()
    infantil: boolean;

    @Column()
    importado: boolean;

    @Column()
    nacional: boolean;

    @Column()
    perfume: boolean;

    @Column()
    sabonete: boolean;

    @Column()
    hidratante: boolean;

    @Column()
    quantidade: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Produto;
