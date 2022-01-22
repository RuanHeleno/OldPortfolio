import React from 'react';
import { MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

import { StyledContent, StyledMDBCard, StyledMDBTitle, StyledDiv, StyledButton, StyledLink } from './style';
import ProjectCovid19 from '../../Assets/Images/Projects/Covid19inWorld.png';
import GithubSearchProfile from '../../Assets/Images/Projects/GithubSearchProfile.png';
import RescueGame from '../../Assets/Images/Projects/RescueGame.png';
import CartShopping from '../../Assets/Images/Projects/CartShopping.png';

export default function Cards() {
    return (
        <StyledContent>
            <StyledMDBCard className="Cards">
                <MDBCardImage src={ProjectCovid19} fluid alt='Vírus da Covid 19' />
                <MDBCardBody>
                    <StyledMDBTitle>Covid 19</StyledMDBTitle>
                    <MDBCardText>
                        Dados da covid 19 em alguns países utilizando requisição via API.
                    </MDBCardText>
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
            
            <StyledMDBCard className="Cards">
                <MDBCardImage src={GithubSearchProfile} fluid alt='Perfil buscado no Github' />
                <MDBCardBody>
                    <StyledMDBTitle>Perfis do Github</StyledMDBTitle>
                    <MDBCardText>
                        Site de Busca de perfis do GitHub utilizando requisição via API.
                    </MDBCardText>
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

            <StyledMDBCard className="Cards">
                <MDBCardImage src={RescueGame} fluid alt='Jogo de Helicóptero com o objetivo de resgatar os prisioneiros' />
                <MDBCardBody>
                    <StyledMDBTitle>Jogo do Resgate</StyledMDBTitle>
                    <MDBCardText>
                        Jogo de resgatar o prisioneiro e destruir os inimigos utilizando JQuery.
                    </MDBCardText>
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

            <StyledMDBCard className="Cards">
                <MDBCardImage src={CartShopping} fluid alt='Loja de Camisas de time com Carrinho' />
                <MDBCardBody>
                    <StyledMDBTitle>Loja com Carrinho</StyledMDBTitle>
                    <MDBCardText>
                        Loja de produtos com categorias e carrinho que salva os itens.
                    </MDBCardText>
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
        </StyledContent>
    )
}