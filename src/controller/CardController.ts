import { Request , Response } from "express"
import CardInterface from "../interface/CardInterface";

import Card from "../schemas/Card"

class CardController {
    public async returnAll ( req: Request, res:Response) : Promise<Response>{
       const cards = await Card.find()
       return res.status(200).json(cards);
    }

    public async createCard (req: Request, res:Response) : Promise<Response>{
        const newCard ={
            nome: req.body.nome,
            classe: req.body.classe,
            ataque: req.body.ataque,
            defesa: req.body.defesa,
            custo: req.body.custo,
        }
        const card = await Card.create(newCard);
        return res.status(201).json(card);
    }

    public async updateCard (req: Request, res:Response) : Promise<Response>{
        const newCard = {
            nome: req.body.nome,
            classe: req.body.classe,
            ataque: req.body.ataque,
            defesa: req.body.defesa,
            custo: req.body.custo,
        }
        const card = await Card.updateOne({id: req.params.id},{$set: newCard})

        return res.status(200).json(card);
    }
}

export default new CardController()