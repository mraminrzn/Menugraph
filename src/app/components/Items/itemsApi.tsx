import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getStaiks() {
    
    const staiks = prisma.item.findMany({
        where : {
            category : "استیک"
        }
        ,select : {
            name : true ,
            id : true , 
            image : true ,
            price : true

        }
    })
    const data = await staiks

    return data


}
export async function getSalad() {
    
    const staiks = prisma.item.findMany({
        where : {
            category : "سالاد"
        }
        ,select : {
            name : true ,
            id : true , 
            image : true ,
            price : true

        }
    })
    const data = await staiks

    return data


}
export async function getKabab() {
    
    const staiks = prisma.item.findMany({
        where : {
             category : "کباب"
        },
      select :  {
            name : true ,
            id : true , 
            image : true ,
            price : true,
            category : true

        }
    })
    const data = await staiks

    return data


}
export async function deleteItem(id : any) {
    
    const staiks = prisma.item.delete({
        where : {
             id : id
        }
    })
    const data = await staiks

    return data


}