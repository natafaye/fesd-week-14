import { useState } from "react"
import { TEST_FOOD } from "./TEST_DATA"
import FoodForm from "./FoodForm"

let nextId = 2 // little hack to make unique ids

export default function App() {
    const [foodList, setFoodList] = useState(TEST_FOOD)

    

    const deleteFood = (id) => {
        setFoodList(foodList.filter(food => food.id !== id))
    }

    const incrementQuantity = (id) => {
        setFoodList(foodList.map(food => 
            (food.id === id) ?
              { ...food, quantity: food.quantity + 1 } :
              food
          ))
          
    }

    const addFood = (foodData) => {
        const newFood = { id: nextId++, ...foodData }
        // BLASPHEMY BAD - setting state directly
        //foodList.push(donuts)

        // PERFECTLY GOOD
        // const copyOfFoodList = foodList.slice()
        // copyOfFoodList.push(donuts)
        // setFoodList(copyOfFoodList)

        // FANCY TRICK
        setFoodList( foodList.concat(newFood) )

        // FANCY TRICK 2
        // setFoodList( [...foodList, donuts] )
    }

    return (
        <>
            <div>
                <FoodForm addFood={addFood} />
                { foodList.map(food => 
                    <div key={food.id}>
                        {food.name} - {food.quantity}
                        <button onClick={() => deleteFood(food.id)}>Delete</button>
                        <button onClick={() => incrementQuantity(food.id)}>Add Quantity</button>
                    </div> 
                )}
            </div>
        </>
    )
}


// props = {
//     addFood: (foodData) => {
//         const newFood = { id: nextId++, ...foodData }
//         // BLASPHEMY BAD - setting state directly
//         //foodList.push(donuts)

//         // PERFECTLY GOOD
//         // const copyOfFoodList = foodList.slice()
//         // copyOfFoodList.push(donuts)
//         // setFoodList(copyOfFoodList)

//         // FANCY TRICK
//         setFoodList( foodList.concat(newFood) )

//         // FANCY TRICK 2
//         // setFoodList( [...foodList, donuts] )
//     }
// }