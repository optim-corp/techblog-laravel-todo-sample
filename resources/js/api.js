"use strict"

const send = (method,uri,data={}) => {
    const url = 'http://127.0.0.1:8000' + uri
    return new Promise((resolve)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onload = () => {
            try{
                const res_json = JSON.parse(xhr.responseText)
                resolve(res_json)
            }catch (e) {
                resolve(xhr.responseText)
            }
        }
        xhr.onerror = () => {
            console.log(xhr.status);
            console.log("error!");
        };
        xhr.send(data);
    })
}

const api = {
    getTodoList(){
        return send("GET","/api/todo");
    },
    postTodo(todo){
        return send("POST","/api/todo",todo);
    },
    updateTodo(id,todo){
        return send("PUT","/api/todo/" + id,todo);
    },
    deleteTodo(id,data){
        return send("DELETE","/api/todo/" + id,data);
    }
}

export default api