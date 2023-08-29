
export async function getRestarant(name : string){

    const data = await fetch(`http://localhost:3000/api/getRestaurant?name=${name}` , {next : {revalidate : 600}})
        
  
    

    return data

}