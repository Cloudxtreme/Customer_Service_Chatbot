function addUserText() {
    var div = document.createElement("DIV");
    var content = document.createElement("DIV")
    var text = "{Ticket ID: 325232, Customer_id: 523-423, Ticket_information: User reported a double charge on bill, under account number 23423 processed on 10-20-17.}";
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
}