function passData()
{
    var text = document.getElementById("textbox").value;
    if(text == "") return;
    var http = require('request');
    //request.post(
     // /  '/bot/botName/alias/botAlias/user/userId/text',
    //);
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
    img.src = "bot.jpg";
    
    div.appendChild(t);      
    content.appendChild(img);                     
    content.appendChild(div);     
    chatWindow = document.getElementById("chat");
    chatWindow.appendChild(content); 
    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById("textbox").value = "";
}
