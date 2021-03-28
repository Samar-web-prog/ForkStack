import React, {Suspense, useState} from "react";
import './App.css';
import {BrowserRouter, Switch, Route, Router, Link} from "react-router-dom";
import Home from "./Components/Home";
import Header from './Components/Header';
import Wardrobe from './Pages/wadrobe';
import SingleCategories from './Components/SingleCategories';
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Login from "./Pages/Login";
import Informations from "./Pages/Informations";
import Register from "./Pages/Register";
import {Preferences} from "./Pages/Preferences";
import {UserContext} from "./contexts/UserContext";
import AddToWardrobe from "./Pages/AddToWardrobe";
import Shop from "./Pages/Shop";
import Outfits from "./Pages/Outfits";
import All from "./Pages/all";

function App() {
    const [connectedUser, setConnectedUser] = useState(null);

    return (
        <>
            <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <Header></Header>
                <div>
                    <BrowserRouter>
                        <Suspense fallback={<p>...Loading page please wait</p>}>
                            {connectedUser ? (
                                <Switch>
                                    <Route
                                        path="/shop"
                                        render={(props) => <Shop {...props} />}></Route>

                               </Switch>
                            ) : (


                                <Switch>


                                    {/*Before Login*/}
                                    <Route
                                        path="/addWardrobe"
                                        render={(props) => <AddToWardrobe {...props} />}></Route>

                                    <Route
                                        path="/home"
                                        render={(props) => <Home {...props} />}></Route>

                                    <Route
                                        path="/categories"
                                        render={(props) => <Categories {...props}
                                        />}>
                                    </Route>
                                    <Route
                                        path="/product/:Categories"
                                        render={(props) => <SingleCategories {...props} />}
                                    ></Route>
                                    <Route
                                        path="/wardrobe"
                                        render={(props) => <Wardrobe {...props} />}></Route>

                                    <Route
                                        path="/login"
                                        render={(props) => <Login {...props} />}
                                    ></Route>
                                    <Route
                                        path="/register"
                                        render={(props) => <Register {...props} />}></Route>
                                    <Route
                                        path="/outfits"
                                        render={(props) => <Outfits {...props} />}></Route>
                                    <Route
                                        path="/informations"
                                        render={(props) => <Informations {...props} />}
                                    ></Route>
                                    <Route
                                        path="/preferences"
                                        render={(props) => <Preferences {...props} />}
                                    ></Route>
                                    <Route
                                        path="/all"
                                        render={(props) => <All {...props} />}
                                    ></Route>


                                    <Route
                                        exact
                                        render={() => <p>You are not logged in!</p>}
                                    ></Route>
                                </Switch>
                                )}
                                </Suspense>
                                </BrowserRouter>
                                </div>
                                <Footer></Footer>
                                </UserContext.Provider>


                                </>

                                );
                                }



                                export default App;
