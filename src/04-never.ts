const withoutEnd = () => {
  while (true) {
    console.log("nunca parar de aprender")
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'STRING'
  } else if (Array.isArray(input)) {
    return 'ARRAY'
  }
  return fail('Not Match')
}
console.log(example('hola'))
console.log(example([1, 1, 1, 1, 1]))
console.log(example(123))

