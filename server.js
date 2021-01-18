let express = require('express');
let app = express();

var pepper_list = [
    { name: "Habernero", from: "eBay", soldby: "https://www.ebay.com/usr/theseedplant", image: "/images/habernero.jpg"},
    { name: "Pimento", from: "eBay", soldby: "https://www.ebay.com/usr/southeastseeds", image: "/images/pimento.jpg"},
    { name: "Peri Peri", from: "eBay", soldby: "https://www.ebay.com/usr/inheritedseeds", image: "/images/periperi.jpg"},
    { name: "Thai Chilli DRAGON HEIRLOOM", from: "eBay", soldby: "https://www.ebay.com/usr/inheritedseeds", image: "/images/thaichili.jpg"},

]
app.use( express.static( "public" ) ); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO', pepper_list: pepper_list});
});

//app.listen(4000, () => console.log('Example app listening on port 4000!'));

const listener = app.listen(process.env.PORT || 4000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });