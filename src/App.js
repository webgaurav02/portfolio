import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import "./App.css";
import Content from "./Content";

function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <Content />}</>;
}

export default App;
