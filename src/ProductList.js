export default function ProductList(props) {
  return (
    <div>
        { props.productList.map(product => (
            <div key={product.id} className="border rounded bg-light p-3 my-4">
                <h5>{product.title}</h5>
                <button className="btn btn-success">Add to Cart</button>
                <button className="btn btn-danger" onClick={() => props.deleteProduct(product.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

// props = {
//     productListProp: [ all the product objects ],
//     deleteProduct: (idToDelete) => does delete stuff (called handleDeleteProduct in App.js)
// }