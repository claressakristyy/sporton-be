import mongoose, { Schema, Document, mongo} from "mongoose";

export interface IPurchasedItem {
    productId: mongoose.Types.ObjectId;
    qty: number;
}

export interface ITransaction extends Document {
    paymentProof: string;
    status: "pending" | "paid" | "rejected";
    purchasedItems: IPurchasedItem[];
    totalPayment: number;
    customerName: string;
    customerContact: string;
    customerAddres: string;
}

const PurchasedItemsSchema: Schema = new Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
    qty: {type:Number, required: true, min: 1}
}, {_id: false})

const TransactionSchema: Schema = new Schema ({
    paymentProof: {type: String, required: true},
    status: {
        type: String,
        enum: ['pending','paid', 'rejected'],
        default: 'pending',
        required: true
    },
    purchasedItems: {type: [PurchasedItemsSchema], required: true},
    totalPayment: {type: Number, requred: true},
    customerName: {type: String, requred: true},
    customerContact: {type: String, requred: true},
    customerAddres: {type: String, requred: true},
},{timestamps: true})

export default mongoose.model<ITransaction>("Transaction", TransactionSchema)