/**
* Ce fichier fait partie du projet Groupomania.
*
* Il crée un modèle d'utilisateur selon un shéma Mongoose en vérifiant qu'il est unique
*
* 
* @copyright 2022 Morgussian
*/

const mongoose = require('mongoose');

//précaution supplémentaire pour un utilisateur unique
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    isAdmin : {type : Boolean, required : true, default: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users' , userSchema);