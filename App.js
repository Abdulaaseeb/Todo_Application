var list = document.getElementById("list")
function addTodo(){
    var todo_item = document.getElementById('todo')

    // create li element with text node
    var li = document.createElement("LI")
    var liLabel = document.createTextNode(todo_item.value)
    li.appendChild(liLabel)

    // create delete button with attribute
    var btn = document.createElement("BUTTON")
    var btnLabel = document.createTextNode("DELETE")
    btn.setAttribute("class","btn btn-outline-danger button")
    btn.setAttribute("onclick","getDel(this)")
    btn.appendChild(btnLabel)

    // create edit button with attribue
    var editbtn = document.createElement("BUTTON")
    var editbtnLabel = document.createTextNode("EDIT")
    editbtn.setAttribute("class","btn btn-outline-danger")
    editbtn.setAttribute("onclick","getedt(this)")
    editbtn.appendChild(editbtnLabel)

    li.appendChild(btn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo_item.value = ""
}

function getDel(e){
   e.parentNode.remove()
}

function getedt(g){
    var editVal = prompt("Enter Edit Value",g.parentNode.firstChild.nodeValue)
    g.parentNode.firstChild.nodeValue = editVal
}

function deleteAll(){
    list.innerHTML = ""
}