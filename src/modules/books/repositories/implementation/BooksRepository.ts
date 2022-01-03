import { getRepository, Repository } from "typeorm";
import { Book } from "../../../../entities/Book";
import { ICreateBookDTO } from "../../dto/ICreateBookDTO";
import { IBooksRepository } from "../IBooksRepository";


export class BooksRepository implements IBooksRepository {
    private repository: Repository<Book>
    constructor() {
        this.repository = getRepository(Book);
    }

    async create({ name, description, pages }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            name,
            description,
            pages
        });
        await this.repository.save(book);
        return book;
    }

    async update(book: Book): Promise<Book> {

        await this.repository.update(book.id, book);

        return book;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async listAll(): Promise<Book[]> {
        return this.repository.find();
    }


    async findById(id: string): Promise<Book> {
        return await this.repository.findOne(id);
    }

    async findByName(name: string): Promise<Book> {
        return await this.repository.findOne({ name });

    }
}