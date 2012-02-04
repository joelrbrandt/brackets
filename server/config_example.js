var baseUrl = "http://yourdomain.com";

module.exports =
    { baseUrl : baseUrl
    , staticDir : __dirname + "/../src"
    , cookieSecret : "" // random string of characters
    , dropbox :
      { key : "" // provided by dropbox
      , secret : "" // provided by dropbox
      }
    , ssl :
      { certFile : __dirname + "/path/to/server.crt"
      , keyFile : __dirname + "/path/to/server.key"
      , caBundleFiles : // set to false if you don't have a ca bundle
        [ __dirname + "/path/to/bundle_1.crt"
        , __dirname + "/path/to/bundle_2.crt"
        , __dirname + "/path/to/bundle_3.crt"
        ]
      }
    };
