const { create } = require('domain');
const express = require('express');
const fs = require('fs');
const path = require ("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    product: (req , res) => {
        res.render('../views/admin/adminProduct', { products });
    }, 
    create: (req , res) => {
        res.render('../views/admin/productCreate');
    },
    show: (req,res) =>{
        let miProducto;
        products.forEach(producto => {
            if(producto.id == req.params.id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/productDetail'), {miProducto})
    },
    save: (req,res) =>{
        let ultimoProducto = products.pop();
        products.push (ultimoProducto);
        let nuevoProducto = {
            id: ultimoProducto.id +1,
            nombre: req.body.productName,
            categoria: req.body.category,
            subcategoria: req.body.subcategory,
            precio: req.body.productPrice,
            precioAnterior: req.body.productDiscount,
            detalle: req.body.description,
            img: "/images/products/" + req.file.filename,
            estado: req.body.estado   
        }
        products.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify( products, null , 2);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), nuevoProductoGuardar);
        res.redirect('../admin/adminProduct');
    },
    edit: (req , res) => {
        res.render('../views/admin/productEdit', { products });
    }
};

module.exports = controllers;