const express = require('express');
const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    index: (req , res) => {
        res.render('../views/products/products', { products });
    },

    detail: (req , res) => {
        res.render('../views/products/productDetail', { products });
    },

    cart: (req , res) => {
        res.render('../views/products/productCart', { products });
    },

    create: (req , res) => {
        res.render('../views/products/productCreate');
    },

    edit: (req , res) => {
        res.render('../views/products/productEdit');
    }
}

module.exports = controllers;