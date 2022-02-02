const express = require('express');

const controllers = {
    detalle: (req , res) => {
        res.render('../views/products/productDetail');
    },

    cart: (req , res) => {
        res.render('../views/products/productCart');
    }
}

module.exports = controllers;