import {MigrationInterface, QueryRunner} from "typeorm";

export class projectsTable1648804521897 implements MigrationInterface {
    name = 'projectsTable1648804521897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "is_active" character varying NOT NULL, "department_id" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_3841f0702bb3021e8b88bc8915f" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_3841f0702bb3021e8b88bc8915f"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
