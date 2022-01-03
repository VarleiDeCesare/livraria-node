import { inject, injectable } from "tsyringe";
import { Book } from "../../../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
export class ListAllBookService {
    constructor(
        @inject("BooksRepository")
        private booksRepository: IBooksRepository
    ) { }

    async execute(): Promise<Book[]> {
        return await this.booksRepository.listAll();
    }
}