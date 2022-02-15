const express = require('express');

const controllers = {
    index: (req , res) => {
        res.render('../views/products/products');
    },

    detail: (req , res) => {
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