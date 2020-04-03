const fs = require('fs');
// const fs = require('express') => paquete que se instala;
// const fs = require('./fs') => archivos que nosotros definimos;
const colors = require('colors');

let multiply = (base, limit) => {
    let data = '';
    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log(data);
}

let createArchive = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} is not a number`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limit; x++) {
            data += `${base} * ${x} = ${base * x} \n`;
        }
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve('Archive created: ' + `table-${base}.txt`.white)
        });
    });
}

module.exports = {
    createArchive,
    multiply
}