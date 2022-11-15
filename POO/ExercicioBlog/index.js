const Author = require("./Author");

const carlos = new Author("Carlos Renielly")

const post = carlos.writePost("Titulo do post: Olá, seja bem vindo!")

post.addComment("Mario" , "Caramba, que massa!")
post.addComment("Lucas", "Eu achei o maximo!")

console.log(carlos)
console.log(post)