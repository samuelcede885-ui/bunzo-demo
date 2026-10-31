import { useEffect } from "react";
import { initSmoothScroll, destroySmoothScroll, ScrollTrigger, scrollToHash } from "./lib/motion";
import { OrderProvider } from "./lib/order";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import BurgerBuild from "./components/BurgerBuild";
import Menu from "./components/Menu";
import Featured from "./components/Featured";
import Extras from "./components/Extras";
import Catering from "./components/Catering";
import Locations from "./components/Locations";
import FinalCTA from "./components/FinalCTA";
import OrderSheet from "./components/OrderSheet";

export default function App() {
  useEffect(() => {
    initSmoothScroll();
    // Recalcular pines cuando cargan fuentes e imágenes (evita saltos de layout)
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    if (location.hash) setTimeout(() => scrollToHash(location.hash), 400);
    return () => {
      window.removeEventListener("load", refresh);
      destroySmoothScroll();
    };
  }, []);

  return (
    <OrderProvider>
      <Loader />
      <Header />
      <main id="contenido">
        <Hero />
        <Marquee words={["Hamburguesas", "Papas", "Shakes", "Buena vibra"]} />
        <BurgerBuild eyebrow="Así se arma" title={["Capa por", "capa, sin", "atajos."]} caption="Ingredientes reales, capa por capa, en cada mordida." bigWord="Bunzo" alt="Hamburguesa con todas sus capas" />
        <Menu />
        <Featured />
        <Marquee words={["Muerde. Repite.", "Bunzo"]} tone="yellow" reverse tilt={1.5} />
        <Extras />
        <Catering />
        <Locations />
        <FinalCTA />
      </main>
      <OrderSheet />
    </OrderProvider>
  );
}
