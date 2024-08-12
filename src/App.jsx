import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const disPatch = useDispatch();

  useEffect(() => {
    const currentUser = authService.getCurrectUser();
    currentUser
      .then((userData) => {
        if (userData) {
          disPatch(login({ userData }));
        } else {
          disPatch(logout());
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? <Home /> : <Loader />;
};

export default App;
