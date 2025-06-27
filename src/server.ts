import http from 'http';
import express, { Request, Response } from 'express';
import endpointItems from './endpoints/item/EndpointItems';

const createHttpServer = (): http.Server => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    endpointItems(app);

    app.get('/', (_req: Request, res: Response) => {
        res.send('¡Hola desde TypeScript!');
    });

    app.get('/api/usuarios', (_req: Request, res: Response) => {
        res.json([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'Ana' }]);
    });

    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });

    return http.createServer(app);
};

export default createHttpServer;