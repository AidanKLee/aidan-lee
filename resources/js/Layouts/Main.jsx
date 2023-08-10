import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Main({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-mikado text-black-bean">
      <Header />
      <main className="flex grow flex-col">{children}</main>
      <Footer />
    </div>
  );
}
