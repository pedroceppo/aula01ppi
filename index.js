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

//criar metodo que aceita parâmetros
server.get('/tabuada', (requisicao,resposta)=>{
    //Tabuada de qual número e até qual sequencia?
    const numero = requisicao.query.numero;
    const sequencia= requisicao.query.sequencia;
  if(!numero || !sequencia){  
        resposta.send(`
        console.log("requisição tabuada");
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Horário do sevidor</title>
        </head>
        <body>
            <h1>Tabuada</h1>
            <h2>Por favor, informe o número e a sequência na URL</h2>
            <h3>Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10</h3>
        </body>
        </html>
    `)
    }
    else{
       resposta.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Horário do sevidor</title>
        </head>
        <body>
            <h1>Tabuada do ${numero} até a sequência ${sequencia}</h1>
            <ul>
        `);
       
        for(let i=0; i<= sequencia;i++){
            resposta.write(`<li>${i} x ${numero} = ${i * numero}</li>`)
        }
        resposta.write(`
                </ul>
            </body>
            </html>
            
            `)
        resposta.end();//finaliza e envia
    }
});


server.listen(porta,host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
});