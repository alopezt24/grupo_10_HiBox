const express = require('express');
const path = require ('path');
const fs = require ('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require ('bcryptjs');
const User = require ('../models/User');

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    register: (req , res) => {
        res.render('../views/users/register');
    },
    
    processRegister: (req , res) => {

        //validacion de los campos del formulario
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        //validacion de email repetido en la registracion
        let userInDb = User.findByField('email',req.body.email);
        if(userInDb) {
            return res.render('../views/users/register', {
                errors: {
                    email: {
                        msg: 'El correo ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        };

        //creacion de un nuevo user en la base de datos
        User.create(req.body, req.file.filename);
        //redirecciona al login
        res.render('users/login');
    },
    
    login: (req , res) => {
        res.render('../views/users/login');
    },

    processLogin: (req,res) => {
        let userToLogin = User.findByField('email',req.body.email);
        if(userToLogin) {
            if(bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.render('index', {products})
            }
            return res.render('../views/users/login', {
                errors: {
                    password: {
                        msg: 'El password ingresado es incorrecto'
                    }
                },
                oldData: req.body
            });    
        }

        return res.render('../views/users/login', {
            errors: {
                email: {
                    msg: 'El usuario ingresado no se encuentra registrado'
                }
            }
        });
    
    }
}

module.exports = controllers;