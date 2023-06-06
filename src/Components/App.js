import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import "../styles/App.css";
import Content from "./Content";

function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <Content />}</>;
}

export default App;
