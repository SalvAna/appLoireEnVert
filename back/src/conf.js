const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Sql.8146', // le mot de passe
database :  'Loire_en_Vert', // le nom de la base de données
});
module.exports = connection;