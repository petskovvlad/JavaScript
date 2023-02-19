/* eslint-disable prettier/prettier */
const getPeople = obj => Object.values(obj)
.flat()
.map(elem => Object.values(elem)).concat().flat();


  const rooms = {
    room1: [
        {name: 'Jack'},
        {name: 'Andrey'},
        {name: 'Ann'},
        {name: 'Vasyl'},
    ],
    room2: [
        {name: 'Dan'},
    ],
    room3: [
        {name: 'Denis'},
        {name: 'Max'},
        {name: 'Alex'},
    ]
};

console.log(getPeople(rooms));
  
/*
 [
    {name: 'Jack'},
    {name: 'Andrey'},
    {name: 'Ann'},
    {name: 'Vasyl'},
    {name: 'Dan'},
    {name: 'Denis'},
    {name: 'Max'},
    {name: 'Alex'},
]

*/