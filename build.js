let {zip, COMPRESSION_LEVEL} = require('zip-a-folder')
let fs = require('fs')

let config = require('./script/config')

class BUILD {
  static async main() {
    var dir = './' + config.exportFolder;

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    await zip(config.sourceFolder, config.outputSource, {compression: COMPRESSION_LEVEL.high});

    console.log('Build Complete');
  }
}

BUILD.main()