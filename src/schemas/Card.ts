import { Schema , model } from "mongoose";


const CardSchema = new Schema({
    nome: String,
    classe: String,
    ataque: Number,
    defesa: Number,
    custo: Number,
},{
    timestamps: true
});

export default model('Cards',CardSchema)