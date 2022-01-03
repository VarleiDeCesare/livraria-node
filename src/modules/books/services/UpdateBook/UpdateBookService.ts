import { inject, injectable } from "tsyringe";
import { Book } from "../../../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";


@injectable()
export class UpdateBookService {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }
    async execute(id: string, name: string, description: string, pages: number): Promise<Book> {

        const book = await this.booksRepository.findById(id);

        if (!book) {
            throw new Error("Book not found");
        }

        Object.assign(book, {
            name,
            description,
            pages
        })

        await this.booksRepository.update(book);
        return book;
    }
}