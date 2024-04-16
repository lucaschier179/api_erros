export class ApiError extends Error {
  public readonly statusCode: number

  constructor(
    messageError: string,
    statusCode: number
  ) {
    super(messageError)
    this.statusCode = statusCode
  }
}

export class BadRequestError extends Error {
  constructor(messageError: string) {
    super(messageError, 404)
  }
}
