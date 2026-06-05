import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  return (
    <div className="app-viewport-container">
      {/* Componente Navbar Limpio */}
      <Navbar />

      {/* Componente Hero Inteligente en Dos Columnas */}
      <Hero />

      {/* Sección Grid de Tarjetas */}
      <Services setTarjetaSeleccionada={setTarjetaSeleccionada} />

      <Contact />
      <Footer />

      {/* Modal Integrado */}
      {tarjetaSeleccionada && (
        <div className="modal-overlay" onClick={() => setTarjetaSeleccionada(null)}>
          <div className="modal-content-view" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-x" onClick={() => setTarjetaSeleccionada(null)}>×</button>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>{tarjetaSeleccionada.icono}</div>
            <h2 style={{ fontSize: "28px", color: "#a4f4cd", marginBottom: "15px" }}>{tarjetaSeleccionada.titulo}</h2>
            <p style={{ lineHeight: "1.6", color: "rgba(255,255,255,0.85)" }}>{tarjetaSeleccionada.desc}</p>
            
            <button 
              style={{
                marginTop: "30px",
                padding: "12px 25px",
                border: "none",
                borderRadius: "30px",
                background: "#1dd1a1",
                color: "#112036",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%"
              }}
              onClick={() => window.open(`https://wa.me/message/P7ONCPECECOOA1`, '_blank')}
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
