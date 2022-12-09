import AppRouter from "./AppRouter";
import Header from "./components/elements/header/Header";
import Footer from "./components/elements/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <AppRouter/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
