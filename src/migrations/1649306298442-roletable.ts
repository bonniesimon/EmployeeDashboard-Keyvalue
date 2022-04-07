import {MigrationInterface, QueryRunner} from "typeorm";

export class roletable1649306298442 implements MigrationInterface {
    name = 'roletable1649306298442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "rid" uuid NOT NULL DEFAULT uuid_generate_v4(), "role_name" character varying NOT NULL, CONSTRAINT "PK_29005ebc89204fef850a815e5f5" PRIMARY KEY ("rid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
