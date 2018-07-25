var cors = require('cors');
var fs = require('fs');
const express = require('express')
const app = express()

app.use(cors());

app.get('/', (req, res) => res.send('Usage: /1'));

app.get('/files', (req, res) => {
  var files = [
    {  title: "Firetruck", author: "Nico", thumb: "img/sketches/firetruck.png" },
    {  title: "Nissan", author: "Nico", thumb: "img/sketches/nissan.png" },
    {  title: "Robot", author: "Nico", thumb: "img/sketches/robot.png" },
    {  title: "Wheel", author: "Rick", thumb: "img/sketches/wheel.png" },
    {  title: "NES Controller", author: "Rick", thumb: "img/sketches/2.png" },
    {  title: "Car", author: "Nico", thumb: "img/sketches/3.png" },
    {  title: "Dino", author: "Rick", thumb: "img/sketches/4.png" },
    {  title: "Robot", author: "Rick", thumb: "img/sketches/5.png" }
  ];
  res.send(files);
});

app.get('/printers', (req, res) => {
  var printers = [
    {  
      printerIcon: "img/printers/i3mini.png", //printer
      filamentIcon: "img/filament/red.png", //filament
      jobIcon: "img/sketches/1sq.png", //autootje
      jobTitle: "autootje",
      progress: "45",
      statusText: "Bezig met printen..."
    },
    {  
      printerIcon: "img/printers/um2go.jpg",
      filamentIcon: "img/filament/yellow.png",
      jobIcon: "img/sketches/5sq.png",
      jobTitle: "robot",
      statusText: "Opwarmen tot 230&deg;",
      progress: "80",
    },
    {  
      printerIcon: "img/printers/malyan.jpg",
      filamentIcon: "img/filament/light-blue.png",
      jobIcon: "img/sketches/5sq.png",
      jobTitle: "robot",
      statusText: "Bezig met printen...",
      progress: "0%",
    },
    {  
      printerIcon: "img/printers/i3mini.png", //printer
      filamentIcon: "img/filament/red.png", //filament
      jobIcon: "img/sketches/1sq.png", //autootje
      jobTitle: "autootje",
      progress: "45",
      statusText: "Bezig met printen..."
    },
    {  
      printerIcon: "img/printers/um2go.jpg",
      filamentIcon: "img/filament/light-green.png",
      jobIcon: "img/transparent-grid.png",
      jobTitle: "Beschikbaar",
      status: "idle",
      statusText: "Klaar!",
      progress: "0%",
    },
    {  
      printerIcon: "img/printers/i3mini.jpg",
      filamentIcon: "img/filament/pink.png",
      jobIcon: "img/transparent-grid.png",
      jobTitle: "Beschikbaar",
      status: "idle",
      statusText: "Klaar!",
      progress: "0%",
    }
  ];
  res.send(printers);
});


app.listen(3000, () => console.log('Serve API on port 3000'));
