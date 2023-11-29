
export let name = 'Luciano Labudia';
export const age: number = 32;
export const isValid: boolean = true;

name = 'Nahir';
// name = 123;
// name = true;

export const templateString = ` Esto es un string
multilinea
que puedo tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
booleanos: ${ isValid }
`

console.log( templateString );