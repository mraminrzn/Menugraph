import { RateLimiter } from "limiter";

export async function Limiter(){

    const limiter = new RateLimiter({tokensPerInterval : 10 , interval : "min", fireImmediately : true })

    return limiter
}
 
