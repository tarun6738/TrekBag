import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";

export default function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
          <Header />
          <ItemList />
          <Sidebar />
      </main>

      <Footer />
    </>
  );
}
