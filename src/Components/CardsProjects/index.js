import React from 'react';
import { MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';

import { 
    StyledContent,
    StyledMDBCard, 
    StyledMDBTitle, 
    StyledMDBText, 
    StyledDiv, 
    StyledButton, 
    StyledLink 
} from './style';
import Curriculum from '../../Assets/Images/Projects/CurriculumVitae.png';
import ProjectCovid19 from '../../Assets/Images/Projects/Covid19inWorld.png';
import GithubSearchProfile from '../../Assets/Images/Projects/GithubSearchProfile.png';
import RescueGame from '../../Assets/Images/Projects/RescueGame.png';
import CartShopping from '../../Assets/Images/Projects/CartShopping.png';
import FrontEndMentor from '../../Assets/Images/Projects/FrontEndMentor.png';

export default function Cards() {
    return (
        <StyledContent className="animate__animated animate__fadeIn container-fluid">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-sl-12 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={Curriculum} fluid alt='Currículo de Ruan Heleno' />
                        <MDBCardBody>
                            <StyledMDBTitle>Currículo</StyledMDBTitle>
                            <StyledMDBText>
                                Currículo em HTML, CSS e Bootstrap e com opção de Download.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/CurriculumVitae' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://curriculumvitaeruanheleno.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
                <div className="col-sm-12 col-md-12 col-sl-12 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={ProjectCovid19} fluid alt='Vírus da Covid 19' />
                        <MDBCardBody>
                            <StyledMDBTitle>Covid 19</StyledMDBTitle>
                            <StyledMDBText>
                                Dados da covid 19 em alguns países utilizando requisição via API.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/Covid19PWA' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://covid19inworld.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
                <div className="col-sm-12 col-md-12 col-sl-12 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={GithubSearchProfile} fluid alt='Perfil buscado no Github' />
                        <MDBCardBody>
                            <StyledMDBTitle>Perfis do Github</StyledMDBTitle>
                            <StyledMDBText>
                                Site de Busca de perfis do GitHub utilizando requisição via API.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/GitHubSearchProfile' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://githubsearchprofiles.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
                <div className="col-sm-12 col-md-12 col-sl-6 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={RescueGame} fluid alt='Jogo de Helicóptero com o objetivo de resgatar os prisioneiros' />
                        <MDBCardBody>
                            <StyledMDBTitle>Jogo do Resgate</StyledMDBTitle>
                            <StyledMDBText>
                                Jogo de resgatar o prisioneiro e destruir os inimigos com JQuery.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/RescueGame' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://rescuegame.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
                <div className="col-sm-12 col-md-12 col-sl-6 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={CartShopping} fluid alt='Loja de Camisas de time com Carrinho' />
                        <MDBCardBody>
                            <StyledMDBTitle>Loja com Carrinho</StyledMDBTitle>
                            <StyledMDBText>
                                Loja de produtos com categorias e carrinho que salva os itens.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/CartShopping' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://cartshoppingsystem.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
                <div className="col-sm-12 col-md-12 col-sl-6 col-xl-6">
                    <StyledMDBCard className="Cards">
                        <MDBCardImage src={FrontEndMentor} fluid alt='Site inicial com botões para desafios de Front End' />
                        <MDBCardBody>
                            <StyledMDBTitle>Desafios do FrontendMentor</StyledMDBTitle>
                            <StyledMDBText>
                                Homepage separando e ordenando os desafios do FrontEndMentor.
                            </StyledMDBText>
                            <StyledDiv>
                                <StyledButton>
                                    <StyledLink href='https://github.com/RuanHeleno/FrontEndMentor' target="_blank" rel="noreferrer">Github</StyledLink>
                                </StyledButton>
                                <StyledButton>
                                    <StyledLink href='https://frontendmentorchallengesrh.netlify.app' target="_blank" rel="noreferrer">Demo</StyledLink>
                                </StyledButton>
                            </StyledDiv>
                        </MDBCardBody>
                    </StyledMDBCard>
                </div>
            </div>
        </StyledContent>
    )
}