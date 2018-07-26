var cors = require('cors');
var fs = require('fs');
var glob = require("glob")
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(fileUpload());

// var files = [
//   {  title: 'Firetruck', author: 'Nico', thumb: 'img/sketches/firetruck.png', tags: ["car","truck","auto"] },
//   {  title: 'Nissan', author: 'Nico', thumb: 'img/sketches/nissan.png' },
//   {  title: 'Robot', author: 'Nico', thumb: 'img/sketches/robot.png' },
//   {  title: 'Wheel', author: 'Rick', thumb: 'img/sketches/wheel.png' },
//   {  title: 'NES Controller', author: 'Rick', thumb: 'img/sketches/2.png' },
//   {  title: 'Car', author: 'Nico', thumb: 'img/sketches/3.png' },
//   {  title: 'Dino', author: 'Rick', thumb: 'img/sketches/4.png' },
//   {  title: 'Robot', author: 'Rick', thumb: 'img/sketches/5.png' }
// ];

var printers = [
  {  
    id: 'printer0',
    printerIcon: 'img/printers/i3mini.png', //printer
    filamentIcon: 'img/filament/red.png', //filament
    jobIcon: 'img/sketches/1sq.png', //autootje
    jobTitle: 'autootje',
    progress: '45',
    statusText: 'Bezig met printen...'
  },
  {  
    id: 'printer1',
    printerIcon: 'img/printers/um2go.jpg',
    filamentIcon: 'img/filament/yellow.png',
    jobIcon: 'img/sketches/5sq.png',
    jobTitle: 'robot',
    statusText: 'Opwarmen tot 230&deg;',
    progress: '80',
  },
  {  
    id: 'printer2',
    printerIcon: 'img/printers/malyan.jpg',
    filamentIcon: 'img/filament/light-blue.png',
    jobIcon: 'img/sketches/5sq.png',
    jobTitle: 'robot',
    statusText: 'Bezig met printen...',
    progress: '0%',
  },
  {  
    id: 'printer3',
    printerIcon: 'img/printers/i3mini.png', //printer
    filamentIcon: 'img/filament/red.png', //filament
    jobIcon: 'img/sketches/1sq.png', //autootje
    jobTitle: 'autootje',
    progress: '45',
    statusText: 'Bezig met printen...'
  },
  {  
    id: 'printer4',
    printerIcon: 'img/printers/um2go.jpg',
    filamentIcon: 'img/filament/light-green.png',
    jobIcon: 'img/transparent-grid.png',
    jobTitle: 'Beschikbaar',
    status: 'idle',
    statusText: 'Klaar!',
    progress: '0%',
  },
  {  
    id: 'printer5',
    printerIcon: 'img/printers/i3mini.jpg',
    filamentIcon: 'img/filament/pink.png',
    jobIcon: 'img/transparent-grid.png',
    jobTitle: 'Beschikbaar',
    status: 'idle',
    statusText: 'Klaar!',
    progress: '0%',
  }
];


app.get('/', (req, res) => res.send({title:'Doodle3D MultiPrint API',version:'0.1',status:'ok'}));
app.get('/files', (req, res) => {

  glob("../files/*.png", null, function (er, files) {

//  {  title: 'Firetruck', author: 'Nico', thumb: 'img/sketches/firetruck.png', tags: ["car","truck","auto"] },

    res.send(files.map(id => {
      return {
        title: "Firetruck",
        id: id,
        thumb: "thumb.png",
        author: "",
        date: "2018-07-26 00:29",
        tags: ["car","truck","auto"]
      }
    })); 

  });
});


app.post('/files/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let name = req.body.name;
  let sketch = req.files.sketch;
  let thumb = req.files.thumb;

  sketch.mv('../files/sketch.d3sketch',(err1) => { 
    thumb.mv('../files/thumb.png',(err2) => { 
      res.send("info:" + err1 + " / " + err2);
    });

  //   if (err) {
  //     return res.send("error",err); 
  //   } else {
  //     console.log("sketch ok");
  //     thumb.mv('../files/',(err) => { 
  //   if (err) {
  //     return res.send("error",err); 
  //   } else {
  //     console.log("sketch and thumb ok");
  //   };
  // });
  });

});


  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  //   if (err)
  //     return res.status(500).send(err);
 // console.log(req.files.my_profile_pic.name);
 //  console.log(req.files.my_pet.name);
 //  console.log(req.files.my_cover_photo.name);

 // for (var i in req) {
 //   console.log(req[i]);
 // }

 //    res.send("ok: " + name + " " + sketch + " " + thumb); //req.files.sampleFile.name + " " + req.files.sampleFile2.name);
  // });


app.get('/printers', (req, res) => res.send(printers));
app.get('/printers/:id', (req, res) => res.send(getPrinterById(req.params['id'])));

app.post('/printers/stop/:id', (req, res) => {
  var printer = getPrinterById(req.params['id']);
  console.log(printer);
  res.send(printer);
});

app.listen(3000, () => console.log('Serve API on port 3000'));


function getPrinterById(id) {
  for (var i in printers) {
    if (printers[i].id==id) return printers[i];
  }
}



