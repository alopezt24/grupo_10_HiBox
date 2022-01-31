const express = require('express');

const controllers = {
    register: (req , res) => {
        res.render('../views/users/register');
    },

    login: (req , res) => {
        res.render('../views/users/login');
    }
}

module.exports = controllers;