import * as express from 'express';
import { OkPacket } from 'mysql';

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

router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const newAuthorName = req.body.name;
        const newTitle = req.body.title;
        const newBlogContent = req.body.content;

        const newAuthor = await db.Authors.insert(newAuthorName);
        const newAuthorId = newAuthor.insertId;

        const newBlog = await db.Blogs.insert(newTitle, newBlogContent, newAuthorId);
        req.body.tags.forEach(async (tag) => {
            const tagId = await db.Tags.findId(tag.id);
            await db.BlogTags.insert(newBlog.insertId, tagId);
        })
        res.status(200).send(`
        author created with id: ${newAuthorId}
        blog created with id: ${newBlog.insertId}
        `);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const newBlogContent = req.body.content;

        await db.Blogs.update(newBlogContent, id);
        res.status(200).send(`Updated blog ${id}`)

    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);

        await db.Tags.destroy(id);
        await db.Blogs.destroy(id);

        res.send(`blog ${id} was deleted`);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    }
})

export default router;