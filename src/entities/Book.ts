import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("books")
export class Book {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string

    @Column()
    description: string;

    @Column()
    pages: number;

    @CreateDateColumn()
    created_at?: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}