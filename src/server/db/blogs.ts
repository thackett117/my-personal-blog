import { Connection, Query } from './index';

const all = async () => Query(`
    SELECT blogs.id, blogs.title, blogs.content, blogs._created, authors.name 
    FROM blogs 
    JOIN authors 
    ON blogs.authorid = authors.id;
`);

const one = async (id: number) => Query(`
    SELECT blogs.id, blogs.title, blogs.content, blogs._created, authors.name
    FROM blogs
    JOIN authors
    ON blogs.authorid = authors.id
    WHERE blogs.id = ?;
`, [id]);

const insert = (title: string, content: string, authorid: number) => Query(`
    INSERT INTO blogs (title, content, authorid)
    VALUES (?, ?, ?);
`,[title, content, authorid])


export default {
    all,
    one,
    insert,

}