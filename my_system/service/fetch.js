export const getGames = async () => {
    const res = await fetch("http://localhost:3000/api/ping");
    const game = await res.json();
    return game
}
