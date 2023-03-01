const showSection = document.getElementById('showSection');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');
const searchButton = document.getElementById('searchButton');
const listButton = document.getElementById('listButton');
const table = document.getElementById('tbl');



addButton.addEventListener('click', () => {
    //Guardar valores puestos en los input en variables
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let website = document.getElementById('webPage').value;
    let age = document.getElementById('age').value;

//Crear nuevo objeto usuario con los valores nuevos de los inputs
    let objct = {
        "id": undefined,
        "name": name,
        "username": username,
        "email": email,
        "website": website,
        "age": age
    }

    //Añadir el nuevo objeto usuario al array
    objectUsers.add(objct);

    //Limpiar todo lo impreso
    clean();
});

// En este botón sí logré que me muestre todo sin darle formato de tabla. Pero al intentarlo con tabla ya no se pudo.
listButton.addEventListener('click', () => {
    //Limpiar todo lo impreso
    clean();

    //Generar la tabla con los datos de los usuarios
    var result = objectUsers.list();
    if(result == ""){
        return showSection.innerHTML="Aún no hay registros que mostrar";
    } else{
        let strng;
        result.forEach(element => {
            strng += 
            `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
                <td>${element.age}</td>
            </tr>`
        })
    }
    table.append(strng); 
    table.removeAttribute('hidden');
});


// Id: ${element.id}, 
//         Nombre: ${element.name}, 
//         Nombre de usuario: ${element.username}, 
//         E-mail: ${element.email},
//         Página web: ${element.website}, 
//         Edad: ${element.age}.
//         <br><br></br>



        

    // var tbody = document.querySelector("#tbl tbody");
    // Crea una fila por cada objeto en el array
    // for (var i = 0; i < users.length; i++) {
    //     // Crea una nueva fila
    //     var fila = document.createElement("tr");

    //     // Crea una celda para cada propiedad del objeto
    //     var celdaNombre = document.createElement("td");
    //     celdaNombre.textContent = users[i].name;
    //     fila.appendChild(celdaNombre);

    //     var celdaUserName = document.createElement("td");
    //     celdaUserName.textContent = users[i].username;
    //     fila.appendChild(celdaUserName);

    //     var celdaEmail = document.createElement("td");
    //     celdaEmail.textContent = users[i].email;
    //     fila.appendChild(celdaEmail);

    //     var celdaPagWeb = document.createElement("td");
    //     celdaPagWeb.textContent = users[i].website;
    //     fila.appendChild(celdaPagWeb);

    //     var celdaEdad = document.createElement("td");
    //     celdaEdad.textContent = users[i].age;
    //     fila.appendChild(celdaEdad);

    //     // agrega la fila al tbody
    //     tbody.appendChild(fila);
    // }
// });


searchButton.addEventListener('click', () => {
    let nombreUsuario = document.getElementById('username').value;

    //Limpiar todo lo impreso
    clean();

    let query = objectUsers.search(nombreUsuario);
    if(query == false){
        showSection.innerHTML = "Aún no hay registros con ese nombre de usuario"
    } else{
        showSection.innerHTML = 
    `<div>
        Nombre: ${query.name}, 
        Nombre de usuario: ${query.username}, 
        E-mail: ${query.email}, 
        Página Web: ${query.website}, 
        Edad: ${query.age}.
    </div>`
    }
    // objectUsers.search(nombre, email, telefono);
});

cancelButton.addEventListener('click', () => {
    //Limpiar todo lo impreso
    clean();
});