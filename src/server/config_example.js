var baseUrl = "http://yourdomain.com";

module.exports =
    { baseUrl : baseUrl
    , cookieSecret : "" // random string of characters
    , dropbox :
      { id : "" // provided by dropbox
      , secret : "" // provided by dropbox
      , callbackAddress : baseUrl + "/auth/dropbox_callback"
      }
    };
