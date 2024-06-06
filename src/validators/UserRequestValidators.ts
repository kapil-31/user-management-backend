import { ValidationChain, body } from "express-validator"

export const createUserRequestRules:ValidationChain[] = [
    body('name').notEmpty().withMessage('Name is Required'),
    body("password").notEmpty().withMessage('Password is Required'),
    body('email').notEmpty().withMessage("Email is Required").isEmail().withMessage('Invalid Email Address')
    ]
    
    export const updateUserRequestRule:ValidationChain[] = [
    body('email').optional().isEmail().withMessage("Invalid Email Address")
    ]
    