import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1640888405119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "pages",
                    type: "numeric",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
