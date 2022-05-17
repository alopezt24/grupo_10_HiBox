const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
// const Movies = db.Movie;
// const Genres = db.Genre;
const Products = db.Product;
//---------------------------
//Dentro del ProductsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const ProductsAPIController = {
    'list': (req, res) => {
        db.Product.findAll()
        .then(Products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Products.length,
                    url: 'api/Products'
                },
                data: Products
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(Product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: Product.length,
                        url: '/api/Product/:id'
                    },
                    data: Product
                }
                res.json(respuesta);
            });
    },
    'ProductMovies': (req, res) => {
        db.Product.findByPk(req.params.id,{
            include: ['movies']
        })
            .then(Product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: Product.length,
                        url: '/api/Product/:id'
                    },
                    data: Product
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        Products
        .create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let ProductId = req.params.id;
        Products.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id,
            },
            {
                where: {id: ProductId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Products/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let ProductId = req.params.id;
        Products
        .destroy({where: {id: ProductId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Products/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
    }
}

module.exports = ProductsAPIController;