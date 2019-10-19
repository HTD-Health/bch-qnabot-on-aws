var default_settings = {
            ES_USE_KEYWORD_FILTERS:"true",
            ES_NO_HITS_QUESTION:"no_hits",
            ES_KEYWORD_SYNTAX_TYPES:"NOUN,PROPN,VERB,INTJ",
            ES_SYNTAX_CONFIDENCE_LIMIT:".20",
            ES_MINIMUM_SHOULD_MATCH:"2<75%",
            ERRORMESSAGE:"Unfortunately I encountered an error when searching for your answer. Please ask me again later.",
            EMPTYMESSAGE:"You stumped me! Sadly I don't know how to answer your question.",
            DEFAULT_ALEXA_LAUNCH_MESSAGE:"Hello, Please ask a question",
            DEFAULT_ALEXA_STOP_MESSAGE:"Goodbye",
            SMS_HINT_REMINDER_ENABLE:"true",
            SMS_HINT_REMINDER:" (Feedback? Reply THUMBS UP or THUMBS DOWN. Ask HELP ME at any time)",
            SMS_HINT_REMINDER_INTERVAL_HRS:"24",
          }

module.exports={
    "QnABotSettings":{
        "Type" : "AWS::SSM::Parameter",
        "Properties" : {
            "Description" : "QnABot Configuration Settings",
            "Type" : "String",
            "Value" : JSON.stringify(default_settings)
        }
    }
}
