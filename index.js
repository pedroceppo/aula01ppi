import express from 'express';


const host ='0.0.0.0';
const porta = 3000;

const server = express();//=oferecendo ao dev um servidor http de modo expresso

//rechear o servidor com funcionalidades
server.get('/',(requisicao, resposta)=>{
    resposta.send(`
  <html>
    <head>
      <title>Minha página</title>
    </head>
    <body>
      <h1>Minha página</h1>
    </body>
  </html>
`);
});

server.get('/horaAtual',(requisicao,resposta)=>{
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds()
    resposta.send(`
    <html>
    <head>
      <title>Minha página</title>
    </head>
    <body>
        <h1>HORA ATUAL : ${hora}</h1>
    </body>
  </html>
    
    
`)
});

server.listen(porta,host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
});