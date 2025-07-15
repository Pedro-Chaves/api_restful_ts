import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);

    if(error.isEmpty()) return next();

    const extratectErrors: object[] = [];

    error.array().map((err: any) => extratectErrors.push({[err.path]: err.msg}))

    return res.status(422).json({
        errors: extratectErrors
    })
}
