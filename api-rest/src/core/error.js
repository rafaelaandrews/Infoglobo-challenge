class ErrorHandler extends Error {
    constructor(statusCode, message, body) {
      super();
      this.statusCode = statusCode;
      this.message = message;
      this.body = body;
    }
  }
  
  const handleError = (err, res) => {
    const { statusCode, message, body } = err;
  
    if (statusCode) {
      res.status(statusCode).json({
        status: "ERROR",
        message: `${statusCode} - ${message || ''}`,
        body
      });
    } else {
      res.status(500).json({
        status: "ERROR",
        message: `${message || ''}`,
        body
      });
    }
  };
  
  
  function badRequest(body) {
    return new ErrorHandler(400, "BadRequest", body)
  }
  
  function unauthorized(body) {
    return new ErrorHandler(401, "Unauthorized", body)
  }
  
  function forbidden(body) {
    return new ErrorHandler(403, "Forbidden", body)
  }
  
  function notFound(body) {
    return new ErrorHandler(404, "Not found", body)
  }
  
  function preconditionFailed(body) {
    return new ErrorHandler(412, "Precondition failed", body)
  }
  
  function internalServerError(body) {
    return new ErrorHandler(500, "Internal server error", body)
  }
  
  module.exports = {
    handleError,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    preconditionFailed,
    internalServerError,
  };