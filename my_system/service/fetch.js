

export async function fetch( {url , method= 'GET' ,body = null }){
    const options = {
        body,
        method,
        headers : { 'Content-Type' : 'application/json'},
    };
    const response = await window.fetch (url, options);
    if (response.ok){
        const resBody = await response.json();
        return resBody;
    }
    return null 
}

















// export const getGames = async () => {
//     const res = await fetch("http://localhost:3000/api/ping");
//     const game = await res.json();
//     return game
// }
