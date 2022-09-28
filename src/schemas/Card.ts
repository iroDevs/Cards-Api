import { Schema , model } from "mongoose";
import CardInterface from "../interface/CardInterface";

const CardSchema = new Schema({
    nome: String,
    classe: String,
    ataque: Number,
    defesa: Number,
    custo: Number,
},{
    timestamps: true
});

export default model<CardInterface>('Cards',CardSchema)