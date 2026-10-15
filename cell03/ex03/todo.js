
var button = document.getElementById("new");
var list = document.getElementById("ft_list");


loadCookie();

// Click New
button.onclick = function() {
    var text = prompt("Add your TO DO list : ");

    if (text == null) {
        // Cancle,Nothing
    } else if (text == "") {
        // Blank, nothing
    } else {
        // Add tex,Add and Save
        addTodo(text);
        saveCookie();
    }
};

//TO DO
function addTodo(text) {
    var item = document.createElement("div");
    item.innerHTML = text;

    // When click on item
    item.onclick = function() {
        var check = confirm("Delete this TO DO list?");

        if (check == true) {
            item.remove(); // Delete
            saveCookie();  // save new cookie
        }
    };

    // Upper
    list.insertBefore(item, list.firstChild);
}

// Save on cookie no expire
function saveCookie() {
    var items = list.getElementsByTagName("div");
    var data = "";

    for (var i = 0; i < items.length; i = i + 1) {
        if (i > 0) {
            data = data + "|";
        }
        data = data + items[i].innerHTML;
    }

    document.cookie = "ft_todos=" + encodeURIComponent(data) + "; path=/;";
}

//Read and show cookie
function loadCookie() {
    var cookies = document.cookie.split(";");
    
    for (var i = 0; i < cookies.length; i = i + 1) {
        var cookie = cookies[i].trim();
        var parts = cookie.split("=");
        
        if (parts[0] == "ft_todos") {
            var rawData = decodeURIComponent(parts[1]);
            if (rawData != "") {
                var tasks = rawData.split("|");
                
                // all loop
                for (var j = tasks.length - 1; j >= 0; j = j - 1) {
                    addTodo(tasks[j]);
                }
            }
        }
    }
}
