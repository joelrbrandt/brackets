var baseUrl = "http://yourdomain.com";

module.exports =
    { baseUrl : baseUrl
    , staticDir : __dirname + "/../src"
    , cookieSecret : "" // random string of characters
    , dropbox :
      { key : "" // provided by dropbox
      , secret : "" // provided by dropbox
      }
    };
