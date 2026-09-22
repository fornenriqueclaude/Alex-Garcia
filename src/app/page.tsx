import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifiesto } from "@/components/Manifiesto";
import { Especialidades } from "@/components/Especialidades";
import { ComoTrabajo } from "@/components/ComoTrabajo";
import { Asesoria } from "@/components/Asesoria";
import { Cuestionario } from "@/components/Cuestionario";
import { SobreMi } from "@/components/SobreMi";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifiesto />
        <Especialidades />
        <ComoTrabajo />
        <Asesoria />
        <Cuestionario />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
