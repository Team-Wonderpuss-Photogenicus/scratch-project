const emotionsController = {};
const apiKey = '6xqqXSdmHU2kixdFCkw19ziThMk_vDbdqxTEJIhTZQ-q';
const url =
  'https://api.us-east.natural-language-understanding.watson.cloud.ibm.com/instances/9ad9e8e4-f877-4f0a-9abf-dbc7ced9bf87';
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  authenticator: new IamAuthenticator({
    apikey: apiKey,
  }),
  serviceUrl: url,
});

emotionsController.getEmotion = (req, res, next) => {
  const inputText = req.body.answer;

  const analyzeParams = {
    html: inputText,
    features: {
      emotion: {},
    },
  };
  naturalLanguageUnderstanding
    .analyze(analyzeParams)
    .then((analysisResults) => {
      console.log(analysisResults.result.emotion.document.emotion);
      const emotionObj = analysisResults.result.emotion.document.emotion;

      const emotionsArr = Object.keys(emotionObj);
      let min = emotionObj[emotionsArr[0]];
      let max = emotionObj[emotionsArr[0]];
      let emotion = emotionsArr[0];

      for (let i = 1; i < emotionsArr.length; i++) {
        var value = emotionObj[emotionsArr[i]];
        if (value < min) min = value;
        if (value > max) {
          max = value;
          emotion = emotionsArr[i];
        }
      }

      console.log('array ->', emotionsArr);
      console.log('this is max->', max);
      console.log('this is min->', min);

      res.locals.emotion = emotion;
      return next();
    })
    .catch((err) => {
      console.log('error:', err);
    });
};

module.exports = emotionsController;
