const express = require('express');

const controllers = {
    detalle: (req , res) => {
        res.render('../views/products/productDetail');
    },

    cart: (req , res) => {
        res.render('../views/products/productCart');
    },

    create: (req , res) => {
        res.render('../views/products/productCreate');
    },

    edit: (req , res) => {
        res.render('../views/products/productEdit');
    }
}

module.exports = controllers;