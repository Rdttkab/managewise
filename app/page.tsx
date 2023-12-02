import FAQ from "./ui/faq";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Pricing from "./ui/pricing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FDF2EC]">
      <Header />
      <main className="bg-[rgb(253, 242, 236)] mt-[100px] w-full">
        <Hero />
        <FAQ />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
