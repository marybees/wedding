var fs = require("fs");
var sizeOf = require("image-size");

var directoryOfImages = __dirname + "/public/images/";
var directoryForMap = __dirname + "/src/";

fs.readdir(directoryOfImages, function (err, data) {
  if (err) {
    console.log("Error: " + err);
    return;
  }

  let imageMap = data.map((image) => {
    var dimensions = sizeOf(directoryOfImages + image);
    return {
      src: "https://d26vfj57l1h7c2.cloudfront.net/images/" + image,
      height:dimensions.height,
      width:dimensions.width
    };
  });

  fs.writeFile(
    directoryForMap + "images.json",
    JSON.stringify(imageMap),
    function (err) {
      if (err) throw err;
    }
  );

  console.log("images.json written");
});
