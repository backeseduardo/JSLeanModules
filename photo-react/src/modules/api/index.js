import openSocket from "socket.io-client";
const socket = openSocket("http://mobiphotos.herokuapp.com/");

function connect(app) {

  console.log('Conectado');

  socket.on("lastImages", imgs => {
    app.receiveImages(imgs);
  })

  socket.on("newImagereceived", img => {
    app.receiveImage(img);
  });

}

export { connect };