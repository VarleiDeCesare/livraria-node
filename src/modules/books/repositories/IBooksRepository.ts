import { Book } from "../../../entities/Book";
import { ICreateBookDTO } from "../dto/ICreateBookDTO";

export interface IBooksRepository {
    create(data: ICreateBookDTO): Promise<Book>
    delete(id: string): Promise<void>
    listAll(): Promise<Book[]>
    findById(id: string): Promise<Book>
    findByName(name: string): Promise<Book>
    update({ name, description, pages }: ICreateBookDTO): Promise<Book>
}