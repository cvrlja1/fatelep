import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

const username = "admin";
const plainPassword = "admin";
const saltRounds = 10;

const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
console.log("Hashed password:", hashedPassword);

const connection = await mysql.createConnection({
    host: "localhost",
    user: "cvrlja",
    password: "cvrlja11",
    database: "fatelep"
});

await connection.execute(
    "INSERT INTO admins (username, password) VALUES (?, ?)",
    [username, hashedPassword]
);

console.log("Admin account created!");
await connection.end();
