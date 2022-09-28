import { Request , Response } from "express"

class CardController {
    public async returnAll ( req: Request, res:Response) : Promise<Response>{
        return  res.send("retorno")
    }
}

export default new CardController()