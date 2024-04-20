const fsCallback = require('fs');
const path = require('path');

const fileController = {};

// MIDDLEWARE FOR GETTING MAPPING
fileController.getMappingEmotions = (req, res, next) => {
  fsCallback.readFile(
    path.resolve(__dirname, '../data/emotionMapping.json'),
    'UTF-8',
    (err, chars) => {
      if (err)
        return next(
          createErr({
            method: 'getMappingEmotions',
            type: 'reading file',
            err,
          })
        );
      const parsedData = JSON.parse(chars);
      res.locals.emotionList = parsedData.emotionList;
      return next();
    }
  );
};

module.exports = fileController;
