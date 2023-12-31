import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ReturnToTop from "@/Components/ReturnToTop";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

function smooothScroll(time) {
  lenis.raf(time);
  requestAnimationFrame(smooothScroll);
}

requestAnimationFrame(smooothScroll);

export default function Main({ children }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-yellow-mikado text-black-bean">
      <Header />
      <main className="flex grow flex-col">{children}</main>
      <Footer />
      <ReturnToTop />
    </div>
  );
}
