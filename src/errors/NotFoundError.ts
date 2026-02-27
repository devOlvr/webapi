import HttpError from './HttpError'

export default class NotFoundError extends HttpError {
  constructor(message = 'Recurso não encontrado') {
    super(message, 404, 'NOT_FOUND')
  }
}
