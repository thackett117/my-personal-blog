import { Query } from './index';

const one = (blogid: number) => Query(`
    SELECT blogtags.*, tags.name as tagname
    FROM blogtags
    JOIN tags
    ON blogtags.tagid = tags.id
    WHERE blogid = ?
`, [blogid]);

const insert = (blogid: number, tagid: number) => Query(`
    INSERT INTO blogtags (blogid, tagid)
    VALUES (?, ?)
`, [blogid, tagid])

const destroy = (blogid: number) => Query(`
    DELETE FROM blogtags
    WHERE blogtags.blogid = ?;
`, [blogid]);

export default {
    one,
    insert,
    destroy,

}