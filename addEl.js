function passData(text)
{
    var trimText = text;
    var params = {
        botAlias: 'CustoServe',
        botName: 'CustoServe',
        inputText: trimText,
        userId: 'demo_bot',
        sessionAttributes: sessionAttributes
    };
    lexruntime.postText(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            showError('Error:  ' + err.message + ' (see console for details)')
        }
        if (data) {
            // capture the sessionAttributes for the next cycle
            sessionAttributes = data.sessionAttributes;
            // show response and/or error/dialog status
            showResponse(data);
        }
    });
    /*var xhr = new XMLHttpRequest();
    var url ="https://runtime.lex.us-east-1.amazonaws.com/bot/CustoServe/alias/CustoServe/user/demo_user/text";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "inputText": text
    }));*/
}

function showResponse(lexResponse) {
    var div = document.createElement("DIV");
    var content = document.createElement("DIV");
    div.className = "bot";  
    content.className = "chatblock-bot";
    var t = document.createTextNode(lexResponse.message /*+ " " + JSON.stringify(lexResponse.slots)*/);
    div.appendChild(t);    
    var img = document.createElement("img");
    img.src = "bot.jpg";  
    content.appendChild(img);                     
    content.appendChild(div);
    chatWindow = document.getElementById("chat");
    chatWindow.appendChild(content); 
    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById("textbox").value = "";     
}

function showError(daText) {

    var div = document.createElement("DIV");
    var content = document.createElement("DIV")
    div.className = "user"; 
    content.className = "chatblock-bot";
    var t = document.createTextNode(daText);
    div.appendChild(t);    
    var img = document.createElement("img");
    img.src = "bot.jpg";  
    content.appendChild(img);                     
    content.appendChild(div);
    chatWindow = document.getElementById("chat");
    chatWindow.appendChild(content); 
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function addUserText() {
    var div = document.createElement("DIV");
    var content = document.createElement("DIV")
    var text = document.getElementById("textbox").value;
    if(text == "") return;
    
    div.className = "user"; 
    content.className = "chatblock-user";
    var t = document.createTextNode(text);

    var img = document.createElement("img");
    img.src = "user.jpg";
    
    div.appendChild(t);      
    content.appendChild(img);                     
    content.appendChild(div);     
    chatWindow = document.getElementById("chat");
    chatWindow.appendChild(content); 
    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById("textbox").value = "";
    passData(text)
}
