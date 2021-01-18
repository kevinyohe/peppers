let express = require('express');
let app = express();

var pepper_list = [
    { id: 1, name: "Habernero", from: "eBay", soldby: "https://www.ebay.com/usr/theseedplant", image: "/images/habernero.jpg"},
    { id: 2, name: "Pimento", from: "eBay", soldby: "https://www.ebay.com/usr/southeastseeds", image: "/images/pimento.jpg"},
    { id: 3, name: "Peri Peri", from: "eBay", soldby: "https://www.ebay.com/usr/inheritedseeds", image: "/images/periperi.jpg"},
    { id: 4, name: "Thai Chilli DRAGON", from: "eBay", soldby: "https://www.ebay.com/usr/inheritedseeds", image: "/images/thaichili.jpg"},

]
app.use( express.static( "public" ) ); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO', pepper_list: pepper_list});
});

app.get('/:id/', (req, res) => {
    res.render('details', {pepper_details: "test"});
  });
  

//app.listen(4000, () => console.log('Example app listening on port 4000!'));

const listener = app.listen(process.env.PORT || 4000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });