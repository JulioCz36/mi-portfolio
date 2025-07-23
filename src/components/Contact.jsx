import './Contact.css'; 
import { useRef, useState } from 'react';

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    let formErrors = {};

    if (!name) formErrors.name = 'Por favor, introduce tu nombre';
    if (!email) formErrors.email = 'Por favor, introduce tu email';
    else if (!validateEmail(email)) formErrors.email = 'Por favor, introduce un email válido';
    if (!message) formErrors.message = 'Por favor, introduce tu mensaje';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simula envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-container">
          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nombre <span className="blink">*</span>
                </label>
                <input type="text" id="name" name="name" className="form-input" ref={nameRef} required />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="blink">*</span>
                </label>
                <input type="email" id="email" name="email" className="form-input" ref={emailRef} required />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje <span className="blink">*</span>
                </label>
                <textarea id="message" name="message" className="form-textarea" ref={messageRef} required />
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {isSubmitting && (
                <div className="loading-spinner">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_640.png"
                    alt="Loading..."
                    width="30"
                    height="30"
                    className="pixelate"
                  />
                </div>
              )}
            </form>
          ) : (
            <div className="thank-you">
              <h3 className="thank-you-message">¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</h3>
              <button className="btn" onClick={handleSendAnother}>Enviar Otro Mensaje</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
