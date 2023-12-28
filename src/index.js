const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  fs.readFile(fileName,function(err,data){
    if(err) throw err;
    console.log(data);
  })
};
reader(fileName);

module.exports =  reader ;
