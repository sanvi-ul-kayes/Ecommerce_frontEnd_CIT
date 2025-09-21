import { Routes, Route } from "react-router";
import LoginPage from "./../Pages/LoginPage";
import SignInPage from "./../Pages/SignInPage";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "./../Pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
