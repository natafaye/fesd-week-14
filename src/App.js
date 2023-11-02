import { useState } from "react"
import { Sidebar } from "./Sidebar"
import CreateProductForm from "./CreateProductForm"
import ProductList from "./ProductList"

let nextId = 3

export default function App() {
    // two pieces of state
    const [userName, setUserName] = useState("Not Logged In")
    const [productList, setProductList] = useState( [
        {
            id: 0,
            title: "Shoes"
        },
        {
            id: 1,
            title: "Hat"
        }
    ] )

    // event listeners that update state

    const onLoginClick = () => {
        setUserName("natalieisthebest")
    }

    const addProduct = (newProductData) => {
        // Just add an id on there
        const newProduct = {
            id: nextId++, // a little trick to get unique ids when creating
            ...newProductData // dumps out all the properties on newProductData, and puts them on this object too (makes a copy)
        }

        // BAD BAD BAD
        //productList.push(newProduct)
        //setProductList(productList)
        // You're likely to end up with your changes happening twice (because of strict mode - but DON'T TURN IT OFF)

        // GOOD: Work off copies
        // const copyOfProductList = productList.slice()
        // copyOfProductList.push(newProduct)
        // setProductList(copyOfProductList)

        // FANTASTIC
        setProductList( productList.concat(newProduct) )

        // FANTASTIC
        // setProductList( [...productList, newProduct] )
    }

    const handleDeleteProduct = (idToDelete) => {
        // BAD BAD BAD
        // productList.splice(fdsfds)

        // FANTASTIC
        // Filter makes a copy of the array with one product missing (the one with the id to delete)
        setProductList( productList.filter(product => product.id !== idToDelete) )
    }

    // rendering code

    return (
        <div>
            <Sidebar />
            User: {userName}
            <button className="btn btn-outline-primary" onClick={onLoginClick}>Log In</button>
            <div>
                <CreateProductForm onSubmit={addProduct}/>
                <ProductList productList={productList} deleteProduct={handleDeleteProduct}/>
            </div>
        </div>
    )
}