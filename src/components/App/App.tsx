import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Home/Home";
import "./App.sass";
import Header from "../Header/Header";
import ArtistInfo from "../Artist/Artist";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/artist/:artistid" component={ArtistInfo} />
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;
