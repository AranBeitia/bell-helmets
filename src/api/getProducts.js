export const getProducts = async () => {
  const response = await fetch(`http://localhost:3000/data `)
  const myData = response.json()
  console.log('my data', myData)
}
