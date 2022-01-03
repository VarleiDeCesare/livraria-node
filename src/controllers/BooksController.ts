import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookService } from "../modules/books/services/CreateBook/CreateBookService";
import { DeleteBookService } from "../modules/books/services/DeleteBook/DeleteBookService";
import { ListAllBookService } from "../modules/books/services/ListAllBooks/ListAllBooksService";
import { UpdateBookService } from "../modules/books/services/UpdateBook/UpdateBookService";



export class BooksController {
    async create(request: Request, response: Response): Promise<Response> {

        const { name, description, pages } = request.body;

        const createBookService = container.resolve(CreateBookService);

        const book = await createBookService.execute({ name, description, pages });

        return response.status(200).json(book);

    }

    async listAll(request: Request, response: Response): Promise<Response> {
        const listBooksService = container.resolve(ListAllBookService);

        const data = await listBooksService.execute();

        return response.json(data);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description, pages } = request.body;
        const updateBookService = container.resolve(UpdateBookService);

        const bookUpdated = await updateBookService.execute(id, name, description, pages);

        return response.status(200).json(bookUpdated);
    }

    async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;
        const deleteBookService = container.resolve(DeleteBookService)
        await deleteBookService.execute(id);

        return response.status(200).send();
    }
}
