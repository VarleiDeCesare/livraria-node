import { inject, injectable } from "tsyringe";
import { Book } from "../../../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
    name: string;
    description: string;
    pages: number;
}

@injectable()
export class CreateBookService {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }
    async execute({ name, description, pages }: IRequest): Promise<Book> {

        const book = await this.booksRepository.create({
            name,
            description,
            pages
        });
        return book;
    }
}