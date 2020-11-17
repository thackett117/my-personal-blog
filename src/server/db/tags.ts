import { Query } from './index';

const destroy = (blogid: number) => Query(`
    DELETE FROM blogtags
    WHERE blogtags.blogid = ?;
`, [blogid]);

export default {
    destroy,
}