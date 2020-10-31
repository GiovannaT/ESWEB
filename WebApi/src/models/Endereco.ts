import {
    Entity,
    Column,
    PrimaryColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import Users from './Users';

@Entity()
class Endereco {
    @PrimaryColumn()
    cep: string;

    @OneToOne(() => Users)
    @JoinColumn({ name: 'id_user' })
    usuario: Users;

    @Column()
    uf: string;

    @Column()
    pais: string;

    @Column()
    cidade: string;

    @Column()
    complemento: string;

    @Column()
    numero: number;

    @Column()
    bairro: string;

    @Column()
    rua: string;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Endereco;
