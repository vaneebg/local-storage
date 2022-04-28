let button = document.getElementById("submit")

// const savedatas = []
// const nameValue = []
const USERS = []
    // const emailValue = []
    // const textValue = []

function submitDatas(e) {
    e.preventDefault()
    let namevalue1 = document.getElementById("name").value
    let emailvalue1 = document.getElementById("email").value
    let messagevalue1 = document.getElementById("message").value
        // nombres
        // const namess = [namevalue1]
        // nameValue.push(namess)
        // console.log(nameValue)
        // localStorage.setItem("NAME", nameValue)
        //     // emails
        // const emailss = [emailvalue1]
        // emailValue.push(emailss)
        // console.log(emailValue)
        // localStorage.setItem("EMAIL", emailValue)
        //     // text
        // const texts = [messagevalue1]
        // textValue.push(texts)
        // console.log(messagevalue)
        // localStorage.setItem("MESSAGE", textValue)

    const user = {
        name: namevalue1,
        email: emailvalue1,
        message: messagevalue1
    }

    USERS.push(user);
    localStorage.setItem("USERS", JSON.stringify(USERS))
        // sacar de local storage
    let userFinal = JSON.parse(localStorage.getItem('USERS'));
    console.log(userFinal)
    divresultados.innerHTML = "";
    // hacer botones con cada cosa para poderlo borrar cada uno en concreto
    // let userPrint = []
    for (let i = 0; i < userFinal.length; i++) {
        // console.log("usuario: ", userFinal[i].name)
        // userPrint.push(userFinal[i].name)
        divresultados.innerHTML += `<p>${userFinal[i].name}</p>`

    }
    // console.log("userPrint", userPrint)
    // divresultados.innerHTML = ` < h1 > Usuario: $ { userPrint } < /h1>`

}
let divresultados = document.querySelector("#div")
    // queryselector solo coge un elemento, pero con tag name coge un nodo, por eso tenía que poner el [0] luego

button.addEventListener("click", submitDatas)

// MOSTRRAR LOS DATOS


// console.log(userFinal[1])

// // AVANZADO
// Crea un botón para borrar todos los contactos guardados en Local Storage
let buttonDelete = document.getElementById("delete")

function clean(e) {
    e.preventDefault()
    localStorage.clear()
}
buttonDelete.addEventListener("click", clean)
    // Crea un  botón para borrar un contacto en concreto de Local Storage.