import { inject, injectable } from "tsyringe";
import { Book } from "../../../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
export class DeleteBookService {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }
    async execute(id: string): Promise<void> {

        if (!await this.booksRepository.findById(id)) {
            throw new Error("Book not found")
        }
        await this.booksRepository.delete(id);
    }
}