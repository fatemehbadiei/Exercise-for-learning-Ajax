//ajax
//1 write an event
document.querySelector("#button").addEventListener("click" , loadData);

function loadData() {
    //2 make an object
    const xhr = new XMLHttpRequest();
    //3 open a request
    xhr.open("GET" , "data.txt" , true);
    //4 load a request
    xhr.onload = function (){
        console.log(this.readyState)
        if (this.status === 200){
            document.querySelector("#output").innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    //5 send a request
    xhr.send();
}
