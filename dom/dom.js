
const p = document.getElementById('paragrafo');

p.innerText = 'Meu Texto!';

p.style.background ='red';

console.log(p);


const cores = ['blue', 'red', 'yellow', 'purple'];

for (i=0, c = 0; i<=100 ; i++, c++){

    p.style.background = cores [c];

    console.log(c + ': ' + p.style.background);

    if(c >= 4) c = -1;


}
console.log(p);