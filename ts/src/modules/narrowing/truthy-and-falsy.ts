export const bootstrap = (): void => {
  const movies = ['Duna: Parte 2', 'Interestelar', 'Matrix'];

  const movie = movies.find((item) => item.includes('Matrix'));

  // type guard
  if (movie) {
    console.log(movie);
  } else {
    console.warn('Filme não localizado!');
  }

  // // falsy
  // console.log(false ? 'truthy' : 'falsy');
  // console.log(0 ? 'truthy' : 'falsy');
  // console.log('' ? 'truthy' : 'falsy');
  // console.log(null ? 'truthy' : 'falsy');
  // console.log(undefined ? 'truthy' : 'falsy');
  // console.log(NaN ? 'truthy' : 'falsy');

  // // truthy
  // console.log(true ? 'truthy' : 'falsy');
  // console.log(-1 ? 'truthy' : 'falsy');
  // console.log(' ' ? 'truthy' : 'falsy');
  // console.log([] ? 'truthy' : 'falsy');
  // console.log({} ? 'truthy' : 'falsy');
};

// - Truthy e Falsy
// - valores falsy
//     - 0, false, string em branco, NaN, Undefined
// - valores truthy
//     - true, -1, “ “, arrays[], objetos{}