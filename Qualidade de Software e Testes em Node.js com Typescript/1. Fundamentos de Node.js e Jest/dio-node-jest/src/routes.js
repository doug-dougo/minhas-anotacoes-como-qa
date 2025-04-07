import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

// Status code
//200 (sucesso) e 201  (consegue criar um dado)
// 404 (pagina nao encontrada)

// GET - Ler os dados
// POST - Criar os dados
// PUT/PATCH - editar dados existentes
// DELETE - apagar os dados

export { routes }