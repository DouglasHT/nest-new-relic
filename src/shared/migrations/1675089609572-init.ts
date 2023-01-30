import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1675089609572 implements MigrationInterface {
  name = 'init1675089609572';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "birthday" TIMESTAMP NOT NULL, "phone" character varying(11) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "client"`);
  }
}
