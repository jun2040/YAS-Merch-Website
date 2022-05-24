import express from "express";
import { AuthPayload } from '../../interfaces/User';

declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload
        }
    }
}
