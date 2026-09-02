import Navbar from "../components/Navbar";

const Home = () => {
  // const {customer} =
  return (
    <div className="min-h-screen bg-[#D8D0C4]">
      <Navbar />
      <main className="mx-auto max-w-300 px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-[-1.5px] text-[#303030]">
          Welcome to ShopKart
        </h1>

        {/* <section className="mt-8 max-w-xl rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#303030]">
            Welcome, Customer Name
          </h2>
          <dl className="mt-6 space-y-4 text-[#303030]">
            <div>
              <dt className="text-sm text-[#777]">Customer name</dt>
              <dd className="mt-1 text-lg">Customer Name</dd>
            </div>
            <div>
              <dt className="text-sm text-[#777]">Email</dt>
              <dd className="mt-1 text-lg">customer@example.com</dd>
            </div>
            <div>
              <dt className="text-sm text-[#777]">Phone number</dt>
              <dd className="mt-1 text-lg">+91 98765 43210</dd>
            </div>
          </dl>
        </section> */}
      </main>
    </div>
  );
};

export default Home;
