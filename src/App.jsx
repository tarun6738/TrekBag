import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

export default function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}
