import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { DNA } from "react-loader-spinner";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { logedInUserInfo, userSlice } from "../Slices/UserSlice";

const logInPage = () => {
  const dispes = useDispatch();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const initialState = {
    email: "",
    password: "",
    showPassword: true,
    loader: true,
    error: {
      email: "",
      password: "",
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_VALUE":
        return {
          ...state,
          [action.field]: action.value,
          error: {
            ...state.error,
            [action.field]: "",
          },
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.error,
        };

      case "TOGGLE_PASSWORD":
        return {
          ...state,
          showPassword: !state.showPassword,
        };
      case "TOGGLE_LOADER":
        return {
          ...state,
          loader: !state.loader,
        };

      case "RESET_KEY":
        return initialState;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const newError = {
      email: !state.email
        ? "Enter Your Email"
        : !emailRegex.test(state.email)
        ? "Invalid Email or Password"
        : "",
      password: !state.password
        ? "Enter your Password"
        : state.password.length >= 6
        ? ""
        : "Password must be at least 6 Characters",
    };

    const errorCheck = Object.values(newError).some((err) => err !== "");

    if (errorCheck == true) {
      dispatch({ type: "SET_ERROR", error: newError });
    } else {
      dispatch({ type: "RESET_KEY" });
    }
    const user = {
      name: "kayes",
    };

    if (state.email && state.password) {
      localStorage.setItem("user", JSON.stringify(user));
      // signInWithEmailAndPassword(auth, state.email, state.password)
      //   .then((userCredential) => {
      //     toast.success("Login Successful");
      //     setTimeout(() => {
      //       const user = userCredential.user;
      //       dispes(logedInUserInfo(user));
      //     }, 1000);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  };
  const handleGoogleProvider = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {});
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex justify-around items-center">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div>
            <h1 className="text-[34px] font-bold text-[#11175D]">
              Login to your account!
            </h1>
            <button
              onClick={handleGoogleProvider}
              className="cursor-pointer flex rounded-[8.34px] border-gray-300 p-[23px] mt-[29px] mb-[32px] gap-[9px] border"
            >
              <FcGoogle className="text-[19px]" />
              <p className="text-[13px] font-semibold">Login with Google</p>
            </button>
            <div className="relative ">
              <label
                type="text"
                className="text-[13px] font-semibold text-gray-500 absolute top-[-22px] left-[30px] p-3 bg-white"
              >
                Email Address
              </label>
              <input
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: "SET_VALUE",
                    field: "email",
                    value: e.target.value,
                  })
                }
                type="text"
                className="w-[369px] h-[104px] rounded-[8.6px] border border-gray-500 py-[26px] px-[52px]"
                placeholder="Enter your Email"
              />
              {state.error.email && (
                <p className="text-red-500">{state.error.email}</p>
              )}
            </div>

            <div className="relative mt-[60px]">
              <label
                type="text"
                className="text-[13px] font-semibold text-gray-500 absolute top-[-22px] left-[30px] p-3 bg-white"
              >
                Password
              </label>
              <div
                className="text-2xl absolute top-[40%] transition-y-[-50%] right-[30%]"
                onClick={() => {
                  dispatch({ type: "TOGGLE_PASSWORD" });
                }}
              >
                {state.showPassword ? (
                  <FaEyeSlash className="cursor-pointer" />
                ) : (
                  <FaEye className="cursor-pointer" />
                )}
              </div>
              <input
                value={state.password}
                onChange={(e) => {
                  dispatch({
                    type: "SET_VALUE",
                    field: "password",
                    value: e.target.value,
                  });
                }}
                type={state.showPassword ? "password" : "text"}
                className="w-[369px] h-[104px] rounded-[8.6px] border border-gray-500 py-[26px] px-[52px]"
                placeholder="************"
              />
              {state.error.password && (
                <p className="text-red-500">{state.error.password}</p>
              )}
            </div>
            <div
              onClick={() => {
                dispatch({ type: "TOGGLE_LOADER" });
              }}
            >
              {state.loader ? (
                <button
                  onClick={handleSubmit}
                  className="w-[368px] h-[68px] bg-teal text-white rounded-[86px] my-[35px] cursor-pointer"
                >
                  Login to Continue
                </button>
              ) : (
                <div className="w-[368px] flex justify-center">
                  <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </div>
              )}
            </div>
            <p className="mx-auto">
              Don’t have an account ?
              <Link to={"/signin"} className="text-[#EA6C00]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <img
            className="h-screen ml-auto w-full object-cover"
            src="login.jpg"
            alt="login image"
          />
        </div>
      </div>
    </>
  );
};

export default logInPage;
