import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setCustomer } = useAuth();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/customers/logout");
      setCustomer(null);
      navigate("/login");
    } catch (error) {
      console.log("Logout Falied : ", error);
    }
  };
  return (
    <header className="border-b border-[#e5ded4] bg-[#D8D0C4]">
      <nav className="mx-auto flex min-h-[76px] max-w-[1200px] items-center gap-240 px-6 py-4 lg:px-8">
        <span className="text-xl font-semibold tracking-[-0.7px]">
          ShopKart
        </span>

        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-[#303030] px-4 py-3 text-xs font-medium text-[#303030] transition hover:border-[#ff9918] hover:text-[#ff9918]"
          >
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
