const express = require('express');
const path=require('path');
const app = express();
app.set('port', 3000 || process.env.PORT)

app.use(express.static('public'));


app.get('/', (req, res)=> {
        res.status(200);
        res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
})
app.get('/ground.jpg', function(req, res) {
  res.sendFile(__dirname + "/" + "ground.jpg");
})
app.get('/champions.jpg', function(req, res) {
  res.sendFile(__dirname + "/" + "champions.jpg");
})




app.get('/about',(req, res)=> {
        res.status(200);
        res.sendFile(path.join(__dirname+'/about/about.html'));
})

app.get('/about/team_photo',(req, res)=> {
        res.status(200);
        res.sendFile(path.join(__dirname+'/about/team.jpeg'));
})

app.get('/video',(req, res)=> {
        res.status(200);
        res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps')
})





app.use((req, res) =>{
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
});


app.use((err, req, res, next) =>{
        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error')
});
app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});