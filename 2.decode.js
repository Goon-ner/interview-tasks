const encode = (input) =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, (x) => `${+x ? '.' : '-'}${x.length}`)

const a = 'Hello'
// console.log(encode(a)) //.4-2.4-1.4-1.4-2.18-1.6-1.4-2.18-1.8-1.4-4.4-1.10-1.16-6.1-2

const b = encode(a)
const decode = (input) =>
  input
    .replace(/(\.|\-)(\d+)/g, (_, t, val) =>
      t == '.' ? '1'.repeat(val) : '0'.repeat(val)
    )
    .match(/([01])\1*/g)
    .map((x) => (x.length == 1 ? '.' : (x.length - 2) / 2))
    .join('')
    .match(/\d+\.\d+/g)
    .map((x) => x.split('.'))
    .sort((a, b) => a[1] - b[1])
    .map((x) => String.fromCharCode(x[0]))
    .join('')

console.log(decode(b))
