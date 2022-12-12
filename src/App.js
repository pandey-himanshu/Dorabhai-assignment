// components import
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import MobileFooter from "./components/MobileFooter/MobileFooter";

function App() {
    return (
        <div className="App">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Section */}
            <main>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main">
                    <Main />
                    <div className="buffer"></div>
                </div>
            </main>

            {/* Footer */}
            <div className="footer">
                <Footer />
            </div>

            {/* Mobile Footer */}
            <div className="mobile">
                <MobileFooter />
            </div>
        </div>
    );
}

export default App;
