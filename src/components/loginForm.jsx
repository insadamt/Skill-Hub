import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/adminSlice";
import { XSquare } from "lucide-react";

const LoginForm = ({ setShowLoginForm }) => {
  const loginInfo = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [invalid, setInvalid] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  function handleInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  }

  function handleClick() {
    if (
      loginInfo.username === inputs.username &&
      loginInfo.password === inputs.password
    ) {
      dispatch(login(true));
      navigate("/dashboard");
      setInvalid(false);
      setShowLoginForm(false);
    } else {
      setInvalid(true);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
      <div className="relative w-full max-w-md bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-black rounded-2xl shadow-2xl p-8 sm:p-10">
        <button
          className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60 text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-500 transition-all duration-200 shadow-sm"
          onClick={() => setShowLoginForm(false)}
        >
          <XSquare className="w-5 h-5" />
        </button>

        <h2 className="font-gabarito text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">
          Login
        </h2>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 shadow-sm font-gabarito"
            name="username"
            value={inputs.username}
            onChange={(e) => handleInputs(e)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 shadow-sm font-gabarito"
            name="password"
            value={inputs.password}
            onChange={(e) => handleInputs(e)}
          />

          {invalid && (
            <div className="px-4 py-3 rounded-xl bg-red-50/80 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-sm text-center font-gabarito font-medium shadow-sm">
              Invalid username or password
            </div>
          )}
          <button
            className="w-full px-4 py-3 mt-2 rounded-xl bg-gradient-to-r from-green-900 via-neutral-900 to-black dark:from-green-800 dark:via-neutral-800 dark:to-neutral-900 text-neutral-50 font-gabarito font-semibold hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out shadow-lg hover:from-green-800 hover:via-neutral-800 hover:to-neutral-950 dark:hover:from-green-700 dark:hover:via-neutral-700 dark:hover:to-neutral-800"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;