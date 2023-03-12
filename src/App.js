import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
// import Products from "./components/Products";
// import ProductItemDetails from "./components/ProductItemDetails";
// import Cart from "./components/Cart";
// import NotFound from "./components/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";
// import CartContext from "./context/CartContext";

import "./App.css";

const loginCreds = [
  {
    username: "Sai",
    password: "$a1",
    category: "student",
  },
  {
    username: "Teja",
    password: "Tej@",
    category: "teacher",
  },
];
const stringifiedCreds = JSON.stringify(loginCreds);
localStorage.setItem("loginCreds", stringifiedCreds);

const assignment = [
  {
    questionNo: 1,
    question: "three(times(five()))",
    answer: 0,
  },
  {
    questionNo: 2,
    question: "eight(divide_by(two()))",
    answer: 0,
  },
  {
    questionNo: 3,
    question: "nine(minus(six()))",
    answer: 0,
  },
  {
    questionNo: 4,
    question: "four(plus(eight()))",
    answer: 0,
  },
  {
    questionNo: 5,
    question: "three(times(zero()))",
    answer: 0,
  },
];
const stringifiedAssignment = JSON.stringify(assignment);
localStorage.setItem("assignmentQuestions", stringifiedAssignment);

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" exact element={<LoginForm />} />
        <Route path="/" exact element={<Home />} />
        {/* <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} /> */}
        {/* <Route path="/not-found" component={NotFound} /> */}
        {/* <Navigate to="not-found" /> */}
      </Routes>
    );
  }
}

export default App;
