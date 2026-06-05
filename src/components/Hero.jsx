import { motion } from "framer-motion";
import imagenLaptop from "../assets/principal.png"; // Ruta directa a tu imagen suelta

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Primeros Auxilios <br /> Informáticos
          </h1>
          <p>
            Soporte técnico profesional a domicilio y soluciones digitales inmediatas 
            para computadoras, servidores y redes en Ecuador.
          </p>
          <button 
            type="button" 
            className="hero-btn"
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Servicios
          </button>
        </motion.div>

        {/* COLUMNA DERECHA: IMAGEN (Aparecerá gracias al index.css) */}
        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={imagenLaptop} alt="Laptop Techplus" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
