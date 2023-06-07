// Server Side
export async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

// API
export default async function handle(req,res){
    const {ids} = req.query //destructuring
    if(ids){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            const data = json.filter(product => ids.includes(product.id.toString()))
            res.send(data)
        })
    } else{
        return false //idk
    }
}