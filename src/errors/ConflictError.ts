import HttpError from './HttpError'

export default class ConflictError extends HttpError {
  constructor(message = 'Conflito de dados', code = 'CONFLICT') {
    super(message, 409, code)
  }
}
