const express = require('express');

const controllers = {
    product: (req , res) => {
        res.render('../views/admin/adminProduct');
    }
};

module.exports = controllers;