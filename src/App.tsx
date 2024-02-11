import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <div className={`absolute top-[52px] px-3 w-full`}>
        <Outlet />
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
