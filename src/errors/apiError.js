class ApiError extends Error {

  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  // The server can't process the request due to client side errors.
  static badRequest(message) {
    return new ApiError(400, message);
  }

  // Lacks of valid authentication credentials for the target resource.
  static unauthorized(message) {
    return new ApiError(401, message);
  }

  // Permissions issue
  static forbidden(message) {
      return new ApiError(403, message);
  }

  // site or folder on a server cannot be found
  static notFound(message) {
    return new ApiError(404, message);
  }

  // unexpected errors
  static internal(message) {
      return new ApiError(500, message);
  }
  
}

export default ApiError;


// 408 - Request Timeout
// 429 - Too Many Requests
// 502 - Bad Gateway
// 503 - Service unavailable
// 504 - Gateway timeout

