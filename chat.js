var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1 ({
	version:'{2018-09-20}',
	username:'{e2b29bc5-4797-4b74-a64f-e6cd158562c5}',
	password:'{JrL23gJCFrHh}',
	url: 'https://gateway.watsonplatform.net/assistant/api'
});

var params = {
	workspace_id:'c2d723b3-f2fd-4eea-b902-7b6e7acd4662'
};

assistant.message(params, resposta);

function resposta (error, response){
	if (error){
		console.error(error);
	} else { 
		console.log(response.output.text[0])
	}
};