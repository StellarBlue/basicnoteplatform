function hidebackdim() {
    document.getElementById('backdim1').style.display='none';
    document.getElementById('form1').style.display='none';
}

function showbackdim() {
    document.getElementById('backdim1').style.display='block';
    document.getElementById('form1').style.display='block';
}

var notesList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < notesList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("×");
    span.className = "close";
    span.appendChild(text);
    notesList[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
function writeNote() {
    var li = document.createElement("li");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var inputTitle = document.getElementById("titleinput").value;
    var inputNote = document.getElementById("notesinput").value;
    var t = document.createTextNode(inputTitle);
    var n = document.createTextNode(inputNote);
    li.appendChild(h2);
    h2.appendChild(t);
    h2.id = "lititle";
    li.appendChild(h3);
    h3.id = "linotes";
    h3.appendChild(n);
    if (inputTitle === '') {
        alert("Error: No Text in Title Input.");
    } else {
        document.getElementById("notelist").appendChild(li);
    }
    document.getElementById("titleinput").value = "";
    document.getElementById("notesinput").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("×");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}