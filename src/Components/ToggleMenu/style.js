import styled from 'styled-components';

export const StyledToggle = styled.button`
    position: fixed;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 99;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: black;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
      
        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media screen and (max-width: 599px) {
        top: 1%;
        left: 3%;
    }

    @media screen and (min-width: 600px) { 
        top: 1%;
        left: 3%;
    }

    @media screen and (min-width: 900px) {
        top: 1%;
        left: 2%;
    }

    @media screen and (min-width: 1200px) {
        top: 1%;
        left: 1%;
    }

    @media screen and (min-width: 1800px) { 

    }
`;