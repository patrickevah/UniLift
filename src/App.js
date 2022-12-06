//import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
//import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import { NavbarComponent } from "./components/Header/Navbar/NavbarComponents";
import { Home } from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/searchResult" element={<Result />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

/*function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 

  return (
    <div className="App">{

      currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
      
    </div>
  );
}


  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );

*/
export default App;
