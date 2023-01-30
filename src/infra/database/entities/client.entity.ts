import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'timestamp', nullable: false })
  birthday: Date;

  @Column({ type: 'varchar', length: 11, nullable: false })
  phone: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', select: false })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at', select: false })
  deletedAt: Date;
}
