// Gerador de senha simples

let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
let senha = "";

for (let i = 0; i < 8; i++) {
  senha += caracteres[Math.floor(Math.random() * caracteres.length)];
}

console.log("Senha gerada:", senha);
