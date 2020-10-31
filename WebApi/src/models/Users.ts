import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
  Unique
} from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id_user: string

  @Column()
  nome: string

  @Column()
  login: string

  @Column()
  email: string

  @Column()
  cpf: string

  @Column()
  senha: string

  @Column()
  telefone: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Users