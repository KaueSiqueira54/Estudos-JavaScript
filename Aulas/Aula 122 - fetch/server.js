var http = require("http");

const PORT = 3000;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "aplication/json" });

    let numero = {
      temperatura: Math.round(Math.random() * 10),
      nivel: Math.round(Math.random() * 10),
      pressao: Math.round(Math.random() * 10),
    };

    res.end(JSON.stringify(numero));
  })
  //   .listen(8080)
  .listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
