module.exports = () => {
  const data = {
    cars: [],
  }

  const numOfDigits = 6
  const numberToMultiply = Math.pow(10, numOfDigits + 1)

  // Create 100 Cars
  for (let i = 0; i < 500; i++) {
    data.cars.push({
      id: i,
      title: `car ${Math.ceil(Math.random() * numberToMultiply)}`,
    })
  }

  return data
}
