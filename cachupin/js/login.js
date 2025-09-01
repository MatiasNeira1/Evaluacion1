
function login(){
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("contraseña").value;

    for(i=0; i<correo.length; i++){
        if(correo.includes("@")){
            console.log("Correo valido");
            break;

        } 
        else{ 
            prompt("Correo invalido");   
        }
        
    }


}