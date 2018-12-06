import * as http from 'http';
import { port, server } from './';

const base_url = `http://localhost:${port}`;

describe('O servidor', () => {
    let serverInstance: http.Server;

    beforeAll(() => serverInstance = server);

    afterAll(() => serverInstance.close());

});
