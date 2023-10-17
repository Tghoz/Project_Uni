import Card from "@/components/Card";
import { getGames } from "../../../../service/fetch";

export default async function Page() {
  const games = await getGames();


  return (
    <div className="grid  grid-cols-3 gap-6">
      {games.length && games.map((game) => <Card game={game} />)}
    </div>
  );
}

// como declarar un context en react! 
