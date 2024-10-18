document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }


    alert('Registro exitoso!\nNombre: ' + nombre + '\nEmail: ' + email);

    document.getElementById('registroForm').reset();
});