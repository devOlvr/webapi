import HttpError from './HttpError'

export default class InternalServerError extends HttpError {
  constructor(message = 'Erro interno do servidor') {
    super(message, 500, 'INTERNAL_ERROR')
  }
}
