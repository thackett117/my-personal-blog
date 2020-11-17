import { Connection, Query } from './index';

const all = async () => Query(`
    SELECT blogs.id, blogs.title, blogs.content, blogs._created, authors.name 
    FROM blogs 
    JOIN authors 
    ON blogs.authorid = authors.id;
`);

// SELECT 
//         blogs.id, 
//         blogs.title, 
//         blogs.content, 
//         blogs._created, 
//         authors.name as author, 
//         blogtags.tagid, 
//         tags.name as tagname
//     FROM blogs 
//     JOIN authors 
//     ON blogs.authorid = authors.id
//     JOIN blogtags
//     ON blogs.id = blogtags.blogid
//     JOIN tags
//     ON blogtags.tagid = tags.id;

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
`,[title, content, authorid]);

const update = (content: string, id: number) => Query(`
    UPDATE blogs SET content = ?
    WHERE blogs.id = ?;
`,[content, id]);

const destroy = (id: number) => Query(`
    DELETE FROM blogs
    WHERE blogs.id = ?;
`, [id]);


export default {
    all,
    one,
    insert,
    update,
    destroy,

}