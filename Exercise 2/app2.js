document.querySelector("#button1").addEventListener("click" , loadEmployee);

function loadEmployee() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET" , "employee.json" , true);

    xhr.onload = function (){
        if (this.status === 200){
            const response = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID : ${response.id}</li>
                <li>Name : ${response.Name}</li>
                <li>Company : ${response.company}</li>
                <li>Job : ${response.job}</li>
            </ul>
            `
            document.querySelector("#employee").innerHTML = output;
        }
    }
    xhr.send();
}

//employees
document.querySelector("#button2").addEventListener("click" , loadEmployees);

function loadEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET" , "employees.json" , true);

    xhr.onload = function (){
        if (this.status === 200 ){
            const response = JSON.parse(this.responseText);
            let output1 = "";
            response.forEach(employee => {
                output1 += `
                <ul>
                    <li>ID : ${employee.id}</li>
                    <li>Name : ${employee.Name}</li>
                    <li>Company : ${employee.company}</li>
                    <li>job : ${employee.job}</li>
                </ul>
                `
            });
            document.querySelector("#employees").innerHTML = output1
        }
    }
    xhr.send();
}
