class JSONResponse {
  static success(res, message = "success", data, status) {
     res.status(status ?? res.statusCode).json({
        status: status ?? res.statusCode,
        message,
        data,
     });
  }

  static error(res, message = "error", err, status) {
     res.status(status ?? res.statusCode).json({
        message,
        err,
        status: status ?? res.statusCode,
     });
  }
}

module.exports = { JSONResponse };
