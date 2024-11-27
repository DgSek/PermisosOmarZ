// PreguntasFrecuentes.jsx
import React from 'react';
import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
  return (
    <div className="faq-container">
      {/* Encabezado de la sección */}
      <div className="faq-header">
        <img src="https://www.puertopenasco.tecnm.mx/wp-content/uploads/2020/01/Encabezado-scaled.jpg" alt="Encabezado Institución" />
      </div>

      <div className="faq-content">
        <h1>Preguntas Frecuentes</h1>
        <ol>
          <li><strong>¿Cómo creo una cuenta en este sitio web de la universidad?</strong>
            <p>Para crear una cuenta o un registro nuevo, pulsa en el botón de registro que está en la parte derecha de la página principal del programa...</p>
          </li>
          <li><strong>¿Qué documentos necesito subir para mi solicitud?</strong>
            <p>Generalmente, necesitarás subir tu expediente académico, cartas de recomendación...</p>
          </li>
          <li><strong>¿Cómo puedo verificar el estado de mi solicitud?</strong>
            <p>Inicia sesión en tu cuenta en el sitio web de la universidad y dirígete a la sección de “Estado de la Solicitud”...</p>
          </li>
          <li><strong>¿Puedo actualizar mi solicitud después de enviarla?</strong>
            <p>Depende de la política de la universidad...</p>
          </li>
          <li><strong>¿Cómo puedo contactar al soporte técnico si tengo problemas con el sitio web?</strong>
            <p>La mayoría de los sitios web universitarios tienen una sección de “Contacto” o “Soporte Técnico”...</p>
          </li>
          <li><strong>¿Qué hago si olvido mi contraseña?</strong>
            <p>Utiliza la opción de “Olvidé mi contraseña” en la página de inicio de sesión...</p>
          </li>
          <li><strong>¿Cómo puedo pagar la tarifa de solicitud?</strong>
            <p>La tarifa de solicitud generalmente se puede pagar en línea...</p>
          </li>
          <li><strong>¿Qué navegadores son compatibles con el sitio web de la universidad?</strong>
            <p>La mayoría de los sitios web universitarios son compatibles con navegadores modernos...</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
