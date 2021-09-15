//exercicio 1
let x = 4
let y = 2
let z = 1
 
if(x>y){
    if(x>z) console.log(x);
}
else if(y>z) console.log(y);
else console.log(z);

//exercicio 2
let dia = "Quarta"

switch(dia){
    case 'Segunda': console.log('Lunes');
                    break;
    case 'Terça':   console.log('Martes');
                    break;
    case 'Quarta':  console.log('Miércoles');
                    break;
    case 'Quinta':  console.log('Jueves');
                    break;
    case 'Sexta':   console.log('Viernes');
                    break;
    case 'Sábado':  console.log('Sábado');
                    break;
    case 'Domingo': console.log('Domingo');
                    break;
    default:        console.log('Dia não reconhecido');
}

//exercicio 3
//Irá entrar no if pois em javascript quando comparamos duas variáveis
//de tipos diferentes ele realiza uma conversão para que a comparação
//faça sentido

//exercicio 3.1
//Se trocarmos o == por === (tres iguais) a comparação depende do tipo,
//logo entraria no else

const a = '1';
const b = 1;

if(a===b){
    console.log('if');
}
else console.log('else');

//exercicio 4

let minha_var = ['sou', 'array'];

if(Array.isArray(minha_var)) console.log('Array');
else console.log(typeof(minha_var));