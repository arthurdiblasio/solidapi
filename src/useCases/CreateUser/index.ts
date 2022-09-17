import { MailtrapMailProvider } from "../../providers/implamentacions/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementacions/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController};