export default function Card({ game }) {
  const { title, price, description, category, image, rating } = game;
  return (
    <div className="bg-[#202020] p-10 text-white rounded-3xl ">
      <div className="w-20 h-20">
        <img className="w-full h-full "   src={image} alt={`imagen de ${title}`} />
      </div>
      <h1 className="text-xl text-white font-bold uppercase">{title}</h1>
    </div>
  );
}
