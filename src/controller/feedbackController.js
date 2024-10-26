import * as db from '../repository/feedbackRepository.js';
import { Router } from "express";

const endpoints = Router();


endpoints.post('/feedback', async (req, resp) => {
    try {
        let fe = req.body;

        let id = await db.inserirfeedback(fe);

        resp.status(201).send({
            novoId: id
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message,
            stack: err.stack 
        });
    }
});
export default endpoints;