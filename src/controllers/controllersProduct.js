const express = require('express');

const controllers = {
    detalle: (req , res) => {
        res.render('../views/products/productDetail');
    }
}

module.exports = controllers;