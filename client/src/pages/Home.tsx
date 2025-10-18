import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ForCreators from "@/components/ForCreators";
import ForBusinesses from "@/components/ForBusinesses";
import Cases from "@/components/Cases";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ForCreators />
      <ForBusinesses />
      <Cases />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
}
