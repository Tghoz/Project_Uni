import Card from "@/components/Cart";
import {getGames} from '@/utils/db'



export default async function Page() {

  const games = await getGames()

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-5">
      {games.length && games.map(game => (
        <Card
          game={game}
        />
      ))} 
    </div>
  );
}

// como declarar un context en react!
