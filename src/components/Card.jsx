import { FaStar } from "react-icons/fa"
export default function Card({ image, title, price, rating,  }) {
  return (
    <div className="flex flex-col items-center p-6 w-48 rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <img 
        src={image}
      />
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <FaStar color="gold" size={20} />
      <p>{rating.rate}</p>
      <p>R${price},00</p>
      <button>Ver Detalhes</button>
    </div>
  );
}
