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




export default {
    all,
    one,

}