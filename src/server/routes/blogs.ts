import * as express from 'express';

import db from "../db";

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
    try {
        let blogs = await db.Blogs.all();
        res.json(blogs);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

export default router;