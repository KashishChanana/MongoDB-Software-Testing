/**
 * Created by home on 25/8/17.
 */
const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const marioCharSchema= new Schema({
    name:String,
    weight:Number

});

const marioChar= mongoose.model('marioChar', marioCharSchema);
module.exports= marioChar;