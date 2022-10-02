let {zip, COMPRESSION_LEVEL} = require('zip-a-folder')
let fs = require('fs')

class BUILD {
  static async main() {
    var dir = './dist';

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    await zip('skinFiles/', 'dist/Reverie.osk', {compression: COMPRESSION_LEVEL.high});
  }
}

BUILD.main()