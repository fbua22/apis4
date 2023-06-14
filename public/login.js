document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes realizar la conexión a MongoDB y verificar las credenciales
    // usando alguna biblioteca o el propio controlador de MongoDB
    
    // Ejemplo de validación simple
    if (username === "usuario" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a otra página o realizar alguna acción adicional
    } else {
      alert("Credenciales inválidas");
    }
  });
  