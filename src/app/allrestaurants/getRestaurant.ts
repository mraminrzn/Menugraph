export async function getRestaurants() {
    const data = await fetch("http://localhost:3000/api/getallrestaurants", {
      next: { revalidate: 600 },
    });
  
    return data;
  }
  