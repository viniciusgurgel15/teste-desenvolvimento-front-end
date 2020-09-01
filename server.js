const express = require('express');
const app = express();
app.use('/static', express.static('public'));
app.get('*', (req,res) => res.sendFile('index.html' , { root : `${__dirname}` }))
app.listen(process.env.PORT || 3003, () => console.log(`Servidor subiu com sucesso em ${process.env.PORT || 3003}`));

