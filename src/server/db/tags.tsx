import { Query } from './index'

const findId = (id: number) => Query(`
    SELECT tags.id
    FROM tags
    WHERE tags.id = ?;
`, [id]);


export default {
    findId,
}