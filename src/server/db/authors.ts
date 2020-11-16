import { Query } from './index';

const insert = async (name: string) => Query(`
    INSERT INTO authors (name)
    VALUES (?);
`, [name]);

export default {
    insert,
}