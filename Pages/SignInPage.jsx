import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { DNA } from "react-loader-spinner";
import { getDatabase, ref, set } from "firebase/database";

const SignInPage = () => {
  const date = new Date();
  const database = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: "",
    showPassword: true,
    loader: true,
    error: {
      name: "",
      email: "",
      password: "",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleSubmit = () => {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const newError = {
      email: !state.email
        ? "Enter Your Email"
        : !emailRegex.test(state.email)
        ? "Invalid Email or Password"
        : "",
      name: state.name ? "" : "Enter your Name",
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
    createUserWithEmailAndPassword(auth, state.email, state.password).then(
      (userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          updateProfile(auth.currentUser, {
            displayName: state.name,
            photoURL: "login.jpg",
          })
            .then(() => {
              toast.success("Registration successful");
              set(ref(database, "users/" + userCredential.user.uid), {
                username: userCredential.user.displayName,
                email: userCredential.user.email,
                date: `${
                  date.getMonth() + 1
                }-${date.getDate()}-${date.getFullYear()} & ${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`,
                profile_picture: "login.jpg",
              }).then(() => {
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              });
            })
            .catch((error) => {
              console.log(error);
              setTimeout(() => {
                if (error.code.includes("auth/email-already-in-use")) {
                  dispatch({
                    type: "SET_ERROR",
                    error: {
                      ...state.error,
                      email: "Email Already In use",
                    },
                  });
                }
              }, 2000);
            });
        });
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex justify-around items-center">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div>
            <h1 className="text-[34px] font-bold text-[#11175D]">
              Get started with easily register
            </h1>
            <p className="text-[20px] font-normal text-gray-500 mt-[13px] mb-[39px]">
              Free register and you can enjoy it
            </p>
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
            <div className="relative my-[34px]">
              <label
                type="text"
                className="text-[13px] font-semibold text-gray-500 absolute top-[-22px] left-[30px] p-3 bg-white"
              >
                Full Name
              </label>
              <input
                value={state.name}
                onChange={(e) => {
                  dispatch({
                    type: "SET_VALUE",
                    field: "name",
                    value: e.target.value,
                  });
                }}
                type="text"
                className="w-[369px] h-[104px] rounded-[8.6px] border border-gray-500 py-[26px] px-[52px]"
                placeholder="Enter your Name"
              />
              {state.error.name && (
                <p className="text-red-500">{state.error.name}</p>
              )}
            </div>
            <div className="relative ">
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
                  Sign up
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
            <p className="w-[368px] mx-auto">
              Already have an account ?
              <Link to={"/login"} className="text-[#EA6C00]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <img
            className="h-screen ml-auto w-full object-cover"
            src="signUP.png"
            alt="signUP image"
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
