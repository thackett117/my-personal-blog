import * as express from 'express';

import db from "../db";

const router: express.Router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        let blogs = await db.Blogs.all();
        res.json(blogs);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const data = await db.Blogs.one(id);
        res.send(data[0]);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
})

export default router;