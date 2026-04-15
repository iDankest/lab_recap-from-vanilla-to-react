
const list = document.getElementById("user-list-container");
const btn = document.getElementById("load-more-btn");

let data = [];
let skip = 0;


async function obtenerUsers() {
    const API = `https://dummyjson.com/users?limit=10&skip=${skip}`;

    try {
        const response = await fetch(API);
        const jsonData = await response.json();
        data = jsonData;
        skip += 10;
        console.log(data.users);
        
    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
    }finally{
        setTimeout(() => {
            btn.disabled = false; // Deshabilitar el botón después de cargar los usuarios
            btn.textContent = "Cargar Más"; // Cambiar el texto del botón
        }, 1000); // Deshabilitar el botón después de 1 segundo
        btn.disabled = true; // Habilitar el botón después de intentar cargar los usuarios
        btn.textContent = "Cargando..."; // Cambiar el texto del botón mientras se cargan los usuarios
    }
}

function renderUsers() {

    data.users.forEach(user => {
        list.innerHTML += `<div class="user-card">
            <h3>${user.firstName} ${user.lastName}</h3>
            <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="user-image">
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        </div>
        `;
    });
}

window.onload = () => {
    obtenerUsers().then(() => {
        renderUsers();
    });
};

btn.addEventListener("click", () => {
    obtenerUsers().then(() => {
        renderUsers();
    });
});