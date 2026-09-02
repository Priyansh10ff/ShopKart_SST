import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#D8D0C4]">
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-[-1.5px] text-[#303030]">
          Welcome to ShopKart
        </h1>
      </main>
    </div>
  );
};

export default Home;