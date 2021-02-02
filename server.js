const express = require("express");
var faker = require("faker");
const app = express();
const port = 8000;

// ---PARA HACER POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PARA PROBAR MI SERVIDOR ----
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

//EJERCICIO API USUARIO FALSO---

app.get("/api/nombre_falso", (req, res) => {
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomJob = faker.name.jobTitle();

  var usuario = {
    nombre: randomName,
    email: randomEmail,
    trabajo: randomJob,
  };

  res.json({ usuario });
});

// EJERCICIO API EMPRESA FALSA---
app.get("/api/companies/new", (req, res) => {
  var id = faker.random.number();
  var randomCompany = faker.commerce.department();
  var street= faker.address.streetName();
  var city= faker.address.city();
  var state= faker.address.state();
  var zipcode= faker.address.zipCode();
  var country= faker.address.country();
 

  var empresa = {
    id : id,
    nombre: randomCompany,
    direccion : {

      calle : street,
      ciudad: city,
      estado: state,
      codigo_postal:zipcode,
      pais: country
    }
  
  };

  res.json({ empresa });
});

app.get("/api/users/new", (req, res) => {

  const id=faker.random.number();
  const name=faker.name.firstName();
  const last_name=faker.name.lastName();
  const phono= faker.phone.phoneNumber();
  const email=faker.internet.email();
  const password=faker.internet.password();

  const usuario ={

    id:id,
    nombre:name,
    apellido:last_name,
    telefono:phono,
    correo:email,
    contrasena:password
  }

  res.json(usuario);
});

app.get("/api/user/company", (req, res) => {
  var id = faker.random.number();
  var randomCompany = faker.commerce.department();
  var street= faker.address.streetName();
  var city= faker.address.city();
  var state= faker.address.state();
  var zipcode= faker.address.zipCode();
  var country= faker.address.country();
 

  var empresa = {
    id : id,
    nombre: randomCompany,
    direccion : {

      calle : street,
      ciudad: city,
      estado: state,
      codigo_postal:zipcode,
      pais: country
    }   
  
  };

  const id=faker.random.number();
  const name=faker.name.firstName();
  const last_name=faker.name.lastName();
  const phono= faker.phone.phoneNumber();
  const email=faker.internet.email();
  const password=faker.internet.password();

  const usuario ={

    id:id,
    nombre:name,
    apellido:last_name,
    telefono:phono,
    correo:email,
    contrasena:password
  }

  res.json({ empresa, usuario });
});









// POST Ingresar un nuevo elemento-------

app.post("/api/users", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json({ status: "ok" });
});

// GET PARAMETROS CON ID

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);

  res.json(users[req.params.id]);
});

// GET PARAMETROS-----

app.get("/api/parametros/:uno/:dos/:tres", (req, res) => {
  console.log(req.params.uno);
  console.log(req.params.dos);
  console.log(req.params.tres);

  res.json(req.params);
});

// ACTUALIZAR-------

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;

  users[id] = req.body;

  res.json({ status: "ok" });
});
// DELETE------
app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;

  users.splice(id, 1);

  res.json({ status: "ok" });
});

//Crea una ruta api "/ api / users / new" que devuelva un nuevo usuario

//Crea una ruta api "/ api / companies / new" que devuelva una nueva compañía

app.post("/api/empresa_falsa", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json({ status: "ok" });
});

//Crea una ruta api "/ api / user / company" que devuelva tanto un nuevo usuario como una nueva compañía

app.listen(port, () => console.log(`Listening on port: ${port}`));
