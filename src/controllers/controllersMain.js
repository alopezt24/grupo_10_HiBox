const express = require ('express');

const controllers = {
    index: (req , res) => {
        res.render('index');
    },

    notFound: (req , res) => {
        res.render('not-found');
    },

    cart: (req , res) => {
        res.render('productCart');
    }
}

module.exports = controllers;