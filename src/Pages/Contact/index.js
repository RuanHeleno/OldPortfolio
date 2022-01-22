import React from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

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
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: "Ruan Heleno",
      from_name: document.getElementById("nome").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("mensagem").value
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID, ACCESS_TOKEN)
      .then(() => {
        Swal.fire({
          text: 'Email enviado com sucesso!',
          icon: 'success'
        })
      }, () => {
        Swal.fire({
          text: 'Falha no envio do email!',
          icon: 'Error'
        })
      });
    e.target.reset();
  };

  return (
      <StyledContact className="animate__animated animate__fadeIn container-fluid">
          <div className="row">
            <div className="col">
              <StyledTitle>Entre em contato comigo através de alguma das redes sociais abaixo</StyledTitle>
            </div>
          </div>
          <StyledContent className="row">
            <div className="col">
              <a href="https://www.linkedin.com/in/ruan-heleno-da-rocha-vieira-753155105/" target="_blank" className="button linkedin" rel="noreferrer"><span><FontAwesomeIcon icon={faLinkedin} /></span><p>Linkedin</p></a>

              <a href="https://github.com/ruanheleno" target="_blank" className="button github" rel="noreferrer"><span><FontAwesomeIcon icon={faGithub} /></span><p>Github</p></a>

              <a href="https://www.instagram.com/ruanhelenoof" target="_blank" className="button instagram" rel="noreferrer"><span><FontAwesomeIcon icon={faInstagram} /></span><p>Instagram</p></a>

              <a href="mailto:ruanheleno.dev@gmail.com" target="_blank" className="button email" rel="noreferrer"><span><FontAwesomeIcon icon={faEnvelope} /></span><p>Email</p></a>

              <a href="https://wa.me/+5521964252735" target="_blank" className="button whatsapp" rel="noreferrer"><span><FontAwesomeIcon icon={faWhatsapp} /></span><p>Whatsapp</p></a>
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
          <StyledForm id="contact-form" onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="form-group col">
                  <label htmlFor="nome">Seu Nome</label>
                  <input type="text" className="form-control" id="nome" name="user_name" required 
                  style={{ border: "1px solid black" }} />
              </div>
              <div className="form-group col">
                <label htmlFor="email">Seu Email</label>
                <input type="email" placeholder="email@example.com" className="form-control" name="user_email" id="email" aria-describedby="emailHelp" required style={{ border: "1px solid black" }} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea className="form-control" rows="5" id="mensagem" name="user_message" required 
                  style={{ border: "1px solid black" }} ></textarea>
              </div>
            </div>
            <StyledButton type="submit" value="submit" className="btn btn-success">Enviar</StyledButton>
        </StyledForm>
      </StyledContact>
  );
}