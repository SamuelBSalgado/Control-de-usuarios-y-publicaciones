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

listButton.addEventListener('click', () => {
    //Limpiar todo lo impreso
    clean();

    //Poner en el div de muestreo la lista
    if(objectUsers.list() == false){
        return showSection.innerHTML="Aún no hay registros que mostrar";
    } else{
    objectUsers.list().forEach(element => {
        showSection.innerHTML += 
        `<div>
            Id: ${element.id}, 
            Nombre: ${element.name}, 
            Nombre de usuario: ${element.username}, 
            E-mail: ${element.email},
            Página web: ${element.website}, 
            Edad: ${element.age}.
            <br><br>
        </div>`
    });
    }
});

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

let tabla = document.getElementById('tbl');
// tabla.removeAttribute('hidden');
