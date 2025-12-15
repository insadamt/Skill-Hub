import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/adminSlice";
import { XSquare } from "lucide-react";

const LoginForm = ({setShowLoginForm}) => {
  const loginInfo = useSelector((state) => state.admin);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [invalid, setInvalid] = useState(false)

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
    if (loginInfo.username === inputs.username && loginInfo.password === inputs.password) {
        dispatch(login(true))
        navigate("/dashboard")
        setInvalid(false)
        setShowLoginForm(false)
    }
    else {
        setInvalid(true)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative p-6 bg-white/10 rounded-lg backdrop-blur-md max-w-md mx-4">
      <button className="bg-red-200 text-red-500 p-2 w-fit rounded absolute top-5 right-6" onClick={() => setShowLoginForm(false)}>
        <XSquare />
      </button>
        <h2 className="text-white text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="bg-white p-2 w-full rounded mb-3"
          name="username"
          value={inputs.username}
          onChange={(e) => handleInputs(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white p-2 w-full rounded mb-4"
          name="password"
          value={inputs.password}
          onChange={(e) => handleInputs(e)}
        />
        {invalid ? <p className="p-1 bg-red-200 text-red-500 rounded-md text-center">Invalid username or password</p> : null}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
