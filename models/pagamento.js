const mongoose = require("mongoose"),
    mongoosePaginate = require("mongoose-paginate"),
    Schema = mongoose.Schema

const PagamentoSchema = Schema ({
    valor: { type: Number, required: true },
    forma: { type: String, required: true },
    parcelado: {type: Object },
    status: { type: String, required: true },
    endereco: {
        type: {
            local: { type: String, required: true},
            numero: { type: String, required: true},
            compremento: { type: String},
            bairro: { type: String, required: true},
            cidade: { type: String, required: true},
            estado: { type: String, require: true},
            CEP: { type: String, required: true},
        }, required: true
    },
    cartao: {
        type: {
            nomeCompleto: { type: String, required: true},
            codigoArea: { type: String, required: true},
            telefone: { type: String, required: true},
            datadeNascimento: { type: String, required: true},
            credit_card_token: { type: String, required: true},
            cpf: { type: String, required: true},
        }, required: true
    },
    enderecoEntregaIgualCobranca: { type: Boolean, default: true },
    pedido: { type: Schema.Types.ObjectId, ref: "Pedido", required: true },
    loja: { type: Schema.Types.ObjectId, ref: "Loja", required: true },
    payload: { type: Array },
    pagSeguroCode: { type: String}
}, { timestamps: true })

PagamentoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Pagamento", PagamentoSchema)