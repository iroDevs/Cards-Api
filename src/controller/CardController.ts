import { Request , Response } from "express"
import Card from "../schemas/Card"

class CardController {
    public async returnAll ( req: Request, res:Response) : Promise<Response>{
       const cards = await Card.find()
       return res.status(200).json(cards);
    }

    public async createCard (req: Request, res:Response) : Promise<Response>{
        const card = await Card.create(req.body);
        return res.status(201).json(card);
    }
}

export default new CardController()