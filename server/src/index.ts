import * as express from 'express';
import * as bodyParser from 'body-parser';

export const app = express();
export const port = process.env.PORT || 3000;

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json());

export const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
