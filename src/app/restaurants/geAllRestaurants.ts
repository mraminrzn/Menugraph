export async function getAllRestaurants(){

    const data = await fetch('http://localhost:3000/api/getAllrestaurants' , {
        next : {revalidate : 60}

        
    })
    const data2 = await data.json()
    
    return data2.data

}