var Titles = require("../model/booklist.modal.js");


module.exports.booklist = async function (req, res) {
    var titles = await Titles.find();
    res.json(titles);
}
module.exports.find = async function(req, res){
    var q = req.query.q;
    console.log(q)
    var allbook = await Titles.find();
    var filterlistbook = allbook.filter(function(book){
      var lowercase = book.tl.toLowerCase();
       return lowercase.indexOf(q) !==-1;
    });
    res.json(filterlistbook)
  };

