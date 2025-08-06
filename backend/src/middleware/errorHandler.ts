
import AppError from '../../../shared/appError';
import { Request, Response, NextFunction } from 'express';

/**
 * Express error handling middleware.
 * Responds to the client with a structured error message.
 * In production, the stack trace is hidden.
 */
    export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message || 'An unexpected error occurred.',
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};

export default errorHandler;
