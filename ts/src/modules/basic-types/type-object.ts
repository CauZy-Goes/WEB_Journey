let programmer = {
  //let programmer: { name: string; age: number; skills: string[] } = {
  name: 'Jorge',
  age: 35,
  skills: ['JavaScript', 'TypeScript'],
};

programmer.name = 'João';
programmer.age = 22;

export function showProgrammer(programmer: {
  name: string;
  age?: number;
  skills?: string[];
}) {
  console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({ name: 'Maria', skills: ['PHP'] });

// - Protege das criações de atributos não inferidos
// - *let programmer: { name: string; age: number; skills: string[] } = {  objeto aqui }*
// - skills?
//     - opcional