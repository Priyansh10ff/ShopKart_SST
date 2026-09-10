import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#D8D0C4]">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="rounded-[40px] bg-white p-10 md:p-16">
          <p className="text-sm font-medium text-[#ff9918]">
            Welcome to ShopKart
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-1.5px] text-[#303030] md:text-5xl">
            Discover products you’ll love.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#777]">
            Browse our product catalogue, search for products, filter by
            category and view detailed product information.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-full bg-[#ff9918] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#f58c08]"
          >
            Browse Products
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;