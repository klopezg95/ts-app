let anyVar: any;
anyVar = true
anyVar = undefined
anyVar = null
anyVar = 11
anyVar = 'hola'
anyVar = {}
anyVar = []

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUppercase();

//---------------------------------

let unknowVar: unknown;
unknowVar = true
unknowVar = undefined
unknowVar = null
unknowVar = 1
unknowVar = []
unknowVar = {}

if (typeof unknowVar === 'string') {

  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {

  let isNewV2: boolean = unknowVar;
}


const parse = (str: string): unknown => {
  return JSON.parse(str)
}
