import React from 'react';
import { 
  StyledText,
  StyledAboutMe,
  StyledContent,
  StyledImg, 
  StyledDiv, 
  StyledTitle,
  StyledSpan,
  StyledFoot,
  StyledText2
} from './style';

export default function AboutMe() {
  return (
    <StyledAboutMe className="container-fluid">
      <StyledTitle className="animate__animated animate__fadeInDownBig row">
        <div className="col">  Conheça um pouco sobre minha jornada </div>
      </StyledTitle>
      <StyledContent className="row">
        <div className="col"> <StyledImg className="animate__animated animate__fadeIn" /> </div>
        <div className="col-6">
          <StyledDiv className="animate__animated animate__fadeInRightBig">
            <StyledText className="row"> Programador Apaixonado </StyledText>
            <div className="row">
              <div className="col"> 
                <StyledSpan> &gt; </StyledSpan> Idade: 25 anos <br />
                <StyledSpan> &gt; </StyledSpan> Técnico em Informática focado em programação <br />
                <StyledSpan> &gt; </StyledSpan> Bacharel em Sistemas de Informação 
              </div>
              <div className="col">
                <StyledSpan> &gt; </StyledSpan> Freelancer <br />
                <StyledSpan> &gt; </StyledSpan> Bootcamps em Front-end e FullStack <br />
                <StyledSpan> &gt; </StyledSpan> Experiência Freelancer de 6 meses 
              </div>
            </div>
            <StyledFoot>
              Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.
            </StyledFoot>
          </StyledDiv>
        </div>
      </StyledContent>
      <StyledText2 className="animate__animated animate__fadeInUpBig row">
        <div className="col">
          Como um iniciante no campo da programação, eu desejo conseguir participar de uma empresa onde eu possa utilizar todos os meus conhecimentos e as minhas habilidades da melhor maneira possível e consiga crescer na minha carreira profissional.
        </div>
      </StyledText2>
    </StyledAboutMe>
  );
}