import { getRestarant } from "./getRestaurant"

export default async function Restaurant({ params }: { params: any }) {
    
   const name = params.restaurantName

    const data = await getRestarant(name)
    const realdata = await data.json()

    // console.log(realdata);
    
    

    return (
        <div>
            <h1 className="text-center mt-20  text-2xl">به رستوران هیوا خوش آمدید</h1><br/>
        </div>
    )
}