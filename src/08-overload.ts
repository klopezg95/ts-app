// Anderson => [A,n,d,e,r,s,o,n] => string => string[]
//[A,n,d,e,r,s,o,n] => Anderson => string[] = > string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');  //string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseString('Anderson');
console.log('rtaArray', 'Anderson =>', rtaArray)

const rtaString = parseString(['A', 'n', 'd', 'e', 'r', 's', 'o', 'n']);
console.log('rtaArray', "['A', 'n', 'd', 'e', 'r', 's', 'o', 'n'] =>", rtaString)
