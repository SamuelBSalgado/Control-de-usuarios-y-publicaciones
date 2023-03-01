class Users {
    constructor(users){
        this.userData = users;
        this.last = users.length;
    }

    add(nuevoUsuario){
        nuevoUsuario.id = this.last+1;
        this.userData.push(nuevoUsuario);
    }

    search(user_Name){ //Buscar user name y devolver todo el elemento del vector.
        for(let i=0; i<this.userData.length; i++){
            if(this.userData[i].username == user_Name){
                return (this.userData[i]);
            }
        }
        return false;
        // while(this.userData[i].username != user_Name){
        //     console.log(this.userData[i].username);
        //     i++;
        // }
        // if(this.userData[i].username == user_Name){
        //     console.log("queoña2");
        //     return this.userData[i];
        // }
        //     console.log("queoña");
        //     return "Aún no hay registros con ese nombre de usuario";
    }
    
    list(){ // Devolver todos los datos del vector.
        // let array = [];
        if(this.userData.length == 0){
            return false;
        } else if(users.length > 0){
            return this.userData;
        }
    }
}
