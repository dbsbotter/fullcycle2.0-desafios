import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('maratona')
class Maratona {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  aula: string;
}

export default Maratona;
