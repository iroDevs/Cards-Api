import { Document } from "mongoose";

interface CardInterface extends Document {
    nome: string
    classe: string
    ataque: number
    defesa: number
    custo: number
}

export default CardInterface