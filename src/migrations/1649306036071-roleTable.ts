import {MigrationInterface, QueryRunner} from "typeorm";

export class roleTable1649306036071 implements MigrationInterface {
    name = 'roleTable1649306036071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_3841f0702bb3021e8b88bc8915f"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "department_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "department_id" integer`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_3841f0702bb3021e8b88bc8915f" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
