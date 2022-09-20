/**
* Ce fichier fait partie du projet Groupomania
*
* Il crée un modèle de post selon un schéma Mongoose
*
* 
* @copyright 2022 Morgussian
*/

const mongoose = require('mongoose');

// ajouter ,required : 'true' sur les entrées si on veut...
const postSchema = mongoose.Schema({

    //utilisateur qui a créé le post
    userId : { 

        //Nathan
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    text : { type : String },
    imageUrl : { type : String },
    likes : { type : Number },
    usersLiked : [{

        //Nathan
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
});

module.exports = mongoose.model('post', postSchema);