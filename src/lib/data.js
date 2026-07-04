export const getProdect = async() => {
    const res = await fetch('http://localhost:8080/products')
    const data = await res.json()
    return data ;
}
export const getProdectDtels = async(id) => {
    const res = await fetch(`http://localhost:8080/products/${id}`)
    const data = await res.json()
    return data ;
}