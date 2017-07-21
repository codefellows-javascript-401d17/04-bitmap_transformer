let Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
let ColorTransform = require(`${__dirname}/model/color-constructor.js`);
let fileHelper = require(`${__dirname}/lib/bitmap-file-helper.js`);

const changeFile = () => {
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if (err) throw err;
    let bitObj = new Bitmap(data);
    let transform = new ColorTransform(bitObj);
    console.log(bitObj);
    console.log(transform.colorShift(bitObj));
    fileHelper.writeNew(`${__dirname}/../assets/palette-write-bitmap.bmp`, data);
  });

};


changeFile();

