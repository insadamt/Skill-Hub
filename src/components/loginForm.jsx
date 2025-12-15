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
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="relative p-8 bg-white border-2 border-black rounded-lg max-w-md w-full mx-4">
      <button className="absolute top-4 right-4 p-2 bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300" onClick={() => setShowLoginForm(false)}>
        <XSquare size={20} strokeWidth={2} />
      </button>
        <h2 className="text-black text-3xl font-bold mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="bg-white border-2 border-black p-3 w-full rounded-lg mb-3 font-medium focus:outline-none focus:ring-2 focus:ring-black"
          name="username"
          value={inputs.username}
          onChange={(e) => handleInputs(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white border-2 border-black p-3 w-full rounded-lg mb-4 font-medium focus:outline-none focus:ring-2 focus:ring-black"
          name="password"
          value={inputs.password}
          onChange={(e) => handleInputs(e)}
        />
        {invalid ? <p className="p-3 bg-white border-2 border-black rounded-lg text-center font-medium mb-4">Invalid username or password</p> : ""}
        <button
          className="w-full bg-black text-white border-2 border-black p-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};


export default LoginForm;
