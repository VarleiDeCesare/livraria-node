import { Router } from 'express';
import { BooksController } from '../controllers/BooksController';

const booksRoutes = Router();

const booksController = new BooksController();

booksRoutes.post("/", booksController.create);
booksRoutes.get("/", booksController.listAll);
booksRoutes.put("/:id", booksController.update);
booksRoutes.delete("/:id", booksController.delete);

export default booksRoutes;