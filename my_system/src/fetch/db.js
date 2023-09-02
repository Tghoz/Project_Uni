export const getGames = async () => {

    const res = await fetch("https://www.freetogame.com/api/games?platform=pc");
    const game = await res.json();

    return game
}