import Item from "../../models/Item";
import { ProfileLogica } from "../profiles/profileLogica";

export function getdescription(_item: Item) : string {
    return _item.description;
}

class LogicaItem extends ProfileLogica{

    public getDescription(item: Item): string {
        return item.description;
    }
}

export default LogicaItem;