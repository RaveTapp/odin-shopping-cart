import Product from "../product/Product"


let products = fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    console.log(json)
    products = json;
})

export default function Shop(){
    let productCards = products.map(prod => <Product product={prod} key={prod.id} />)

    return <>
        {productCards}
    </>
}