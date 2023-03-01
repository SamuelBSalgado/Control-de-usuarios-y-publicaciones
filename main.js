const showSection = document.getElementById('showSection');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');
const searchButton = document.getElementById('searchButton');
const listButton = document.getElementById('listButton');
const table = document.getElementById('tbl');

addButton.addEventListener('click', () => {
    //Guardar valores puestos en los input en variables
    let name = document.getElementById('name').value;
    let userName = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let webPage = document.getElementById('webPage').value;
    let age = document.getElementById('age').value;

//Crear nuevo objeto usuario con los valores nuevos de los inputs
    let objct = {
        "id": undefined,
        "name": name,
        "userName": userName,
        "email": email,
        "webPage": webPage,
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
        table.innerHTML += 
        `<div>
            <ul>
                <li>
                    ${element.id}
                </li>
            
                </ul>
            <ul>
                <li>
                    ${element.name}
                </li>
            </ul>
            <ul>
                <li>
                    ${element.username}
                </li>
            </ul>
            <ul>
                <li>
                    ${element.email}
                </li>
            </ul>
            <ul>
                <li>
                    ${element.webPage}
                </li>
            </ul>
            <ul>
                <li>
                    ${element.age}
                </li>
            </ul>
        </div>`
    });
    }
});

searchButton.addEventListener('click', () => {
    let nombre = document.getElementById('name').value;

    //Limpiar todo lo impreso
    clean();

    let query = objectUsers.search(nombre);
    if(query == false){
        showSection.innerHTML = "Aún no hay registros con ese nombre de usuario"
    } else{
        showSection.innerHTML = 
    `<div>
        Nombre: ${query.name}, 
        E-mail: ${query.email}, 
        Teléfono: ${query.phone}.
    </div>`
    }
    // objectUsers.search(nombre, email, telefono);
});

cancelButton.addEventListener('click', () => {
    //Limpiar todo lo impreso
    clean();
});