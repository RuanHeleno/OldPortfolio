import React, { useState } from 'react';

import { 
  StyledContact, 
  StyledTitle,
  StyledContent,
  StyledContent2,
  StyledP,
  StyledForm, 
  StyledButton 
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, subject, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Accept": "application/json"
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      console.log(result);
      alert(result.status);
    };

  return (
      <StyledContact className="container-fluid">
          <div className="row">
            <div className="col">
              <StyledTitle>Entre em contato comigo através de alguma das redes sociais abaixo</StyledTitle>
            </div>
          </div>
          <StyledContent className="row">
            <div className="col">
              <a href="https://www.linkedin.com/in/ruan-heleno-da-rocha-vieira-753155105/" target="_blank" className="button linkedin" rel="noreferrer"><span><FontAwesomeIcon icon={faLinkedin} /></span><p>Linkedin</p></a>

              <a href="https://github.com/ruanheleno" target="_blank" className="button github" rel="noreferrer"><span><FontAwesomeIcon icon={faGithub} /></span><p>Github</p></a>

              <a href="https://www.instagram.com/ruanhelenoof" className="button instagram"><span><FontAwesomeIcon icon={faInstagram} /></span><p>Instagram</p></a>

              <a href="mailto:ruanheleno.dev@gmail.com" className="button email"><span><FontAwesomeIcon icon={faEnvelope} /></span><p>Email</p></a>

              <a href="https://wa.me/+5521964252735" className="button whatsapp"><span><FontAwesomeIcon icon={faWhatsapp} /></span><p>Whatsapp</p></a>
            </div>
          </StyledContent>
          <StyledContent2
           className="row">
              <div className="col"> Ou... </div>
          </StyledContent2>
          <div className="row">
              <div className="col">
                <StyledP>Me envie uma mensagem por aqui mesmo!</StyledP>
              </div>
            </div>
          <StyledForm id="contact-form" action="send" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col">
                  <label htmlFor="nome">Seu Nome</label>
                  <input type="text" className="form-control" id="nome" name="name" required />
              </div>
              <div className="form-group col">
                <label htmlFor="email">Seu Email</label>
                <input type="email" placeholder="email@example.com" className="form-control" name="email" id="email" aria-describedby="emailHelp" required />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                  <label htmlFor="assunto">Assunto</label>
                  <input type="text" className="form-control" id="assunto" name="subject" required />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea className="form-control" rows="5" id="mensagem" name="message" required ></textarea>
              </div>
            </div>
            <StyledButton type="submit" value="submit" className="btn btn-success">Enviar</StyledButton>
        </StyledForm>
      </StyledContact>
  );
}