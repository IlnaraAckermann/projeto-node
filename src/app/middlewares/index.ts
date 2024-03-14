import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

function errorHandlerMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  if (error instanceof PrismaClientKnownRequestError) {
    return res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}

export { errorHandlerMiddleware };
