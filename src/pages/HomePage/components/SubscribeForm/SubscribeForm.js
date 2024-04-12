import React, {useState} from "react";

const SubscribeForm = ({ data }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        validateForm(newName, email, termsAccepted);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateForm(name, newEmail, termsAccepted);
    };

    const handleTermsChange = (event) => {
        const accepted = event.target.checked;
        setTermsAccepted(accepted);
        validateForm(name, email, accepted);
    };

    const validateForm = (name, email, termsAccepted) => {
        const namePattern = /^[A-Z][a-zA-Z]*$/;
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/;

        const isNameValid = namePattern.test(name) && name.length <= 15;
        const isEmailValid = emailPattern.test(email) && email.length <= 30;

        if (isNameValid && isEmailValid && termsAccepted) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Formulario enviado');
    };

    console.log(data)
    return (
      <div className="container">
        <div className="row row-cols-2">
          <div>
            <img src={data[0]?.suscribete?.imgUrl} alt="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1>{data[0]?.suscribete?.titulo}</h1>
            <div>
              <label htmlFor="name">{data[0]?.suscribete?.nombreLabel}:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">{data[0]?.suscribete?.emailLabel}:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={handleTermsChange}
                required
              />
              <label htmlFor="terms">
                Estoy de acuerdo con los T&C del programa
              </label>
            </div>
            <button type="submit" disabled={!formValid}>
              {data[0]?.suscribete?.btnTexto}
            </button>
          </form>
        </div>
      </div>
    );
};

export default SubscribeForm;
