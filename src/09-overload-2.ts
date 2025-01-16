// Anderson => [A,n,d,e,r,s,o,n] => string => string[]
//[A,n,d,e,r,s,o,n] => Anderson => string[] = > string

export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean;



// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');  //string
//   } else {
//     return input.split(''); //string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');  //string
  } else if (typeof input === 'string') {
    return input.split(''); //string[]
  } else if (typeof input === 'number') {
    return true; //boolean
  }
}

const rtaArray = parseStr('Anderson');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse()
// }
console.log('rtaArray', 'Anderson =>', rtaArray)

const rtaString = parseStr(['A', 'n', 'd', 'e', 'r', 's', 'o', 'n']);
rtaString.toLowerCase();
// if (typeof rtaString === 'string') {
//   rtaString.toLocaleLowerCase();
// }
console.log('rtaString', "['A', 'n', 'd', 'e', 'r', 's', 'o', 'n'] =>", rtaString)

const rtaBoolean = parseStr(29);
