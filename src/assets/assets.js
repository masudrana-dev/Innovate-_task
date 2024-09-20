import mongo from "./mongo.png"
import express from "./express.png"
import react from "./react.jpg"
import node from "./node.png"
import person1 from "./person-1.jpg"
import person2 from "./person-2.jpg"
import person3 from "./person-3.jpg"
import native from "./react-native.png"
import webdev from "./webdev.jpg"
import webapp from "./webApp.png"
import mern from "./mern.png"
import reactangular from "./Rectangle 7.png"
import vector from "./Vector-2.png"
import next from './next.jpg'
import redux from './Redux.png'
import typescript from './typescript.png'
import postgresql from './postgresql.png'
import socket from './socket-io.png'

export const assets = {
    mongo,
    express,
    react,
    node,
    person1,
    person2,
    person3,
    native,
    webdev,
    webapp,
    mern,
    reactangular,
    vector
}

export const cardData = [
    {
        id: 0,
        name: 'Mongo',
        image: mongo,
        price: "598TK",
        category: ['mern', 'db']
    },
    {
        id: 1,
        name: 'Express',
        image: express,
        price: "598TK",
        category: 'mern'
    },
    {
        id: 2,
        name: 'React',
        image: react,
        price: "598TK",
        category: 'mern'
    },
    {
        id: 3,
        name: 'Node',
        image: node,
        price: "598TK",
        category: 'mern'
    },
    {
        id: 4,
        name: 'Typescript',
        image: typescript,
        price: "598TK",
        category: 'new'
    },
    {
        id: 5,
        name: 'Redux',
        image: redux,
        price: "598TK",
        category: 'new'
    },
    {
        id: 6,
        name: 'Next js',
        image: next,
        price: "598TK",
        category: 'new'
    },
    {
        id: 7,
        name: 'PostgreSql',
        image: postgresql,
        price: "598TK",
        category: 'db'
    },
    {
        id: 8,
        name: 'Socket',
        image: socket,
        price: "598TK",
        category: 'new'
    }
]