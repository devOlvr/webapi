import HttpError from './HttpError'

export default class ValidationError extends HttpError {
  constructor(message = 'Dados inválidos') {
    super(message, 400, 'VALIDATION_ERROR')
  }
}
