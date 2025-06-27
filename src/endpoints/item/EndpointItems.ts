import { Express, Request, Response } from 'express';
import logRequest from '../middlewares/logRequest';
import { ITEM } from './routes/routes-items';
import LogicaItem from '../../services/item/logicaitem';
import { IProfile } from '../../models/IProfile';

const endpointItems = (app: Express) => {

    let exampleItem = { name: "Hola" } as IProfile;
    
    app.get(ITEM, logRequest, (_req: Request, res: Response) => {
        const logica = new LogicaItem(exampleItem);
        res.send(logica.getUserName());
    });
}

export default endpointItems;