const express = require ('express');

const listaProductos = [
    {
        id:1,
        nombre: 'Carpaccio fresco',
        categoria: 'Gastronomia',
        precio: '65.50',
        precioAnterior: '2000',
        img: '/images/img-producto-gastronimia.jpg'
    },
    {
        id:2,
        nombre: 'Carpaccio fresco',
        categoria: 'Aventura',
        precio: '65.50',
        precioAnterior: '2000',
        img: '/images/img-producto-aventura.jpg'
    },
    {
        id:3,
        nombre: 'Carpaccio fresco',
        categoria: 'Entretenimiento',
        precio: '65.50',
        precioAnterior: '2000',
        img: '/images/img-producto-entretenimiento.jpg'
    },
    {
        id:4,
        nombre: 'Carpaccio fresco',
        categoria: 'Entretenimiento',
        precio: '65.50',
        precioAnterior: '1.500',
        img: '/images/img-producto-entretenimiento.jpg'
    }

]

const controllers = {
    index: (req , res) => {
        res.render('index', { listaProductos });
    }
}

module.exports = controllers;