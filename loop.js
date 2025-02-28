const mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9',
    price: '699',
    color: 'black',
    camera: '12MP',
}

// for of :array
// for in : object

for (const prop in mobile) {
    console.log(prop)
    console.log(mobile[prop])
}

const keys = Object.keys(mobile)
console.log(keys)

for (const key of keys) {
    console.log(key, mobile[key])
}