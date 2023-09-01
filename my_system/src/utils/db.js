export const getGames = async () => {

    const res = await fetch("https://fakestoreapi.com/products");
    const game = await res.json();

    return game
}