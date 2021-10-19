import styled from 'styled-components';

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(68, 68, 68, 0.452);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin-top: -200px;
`;

export const TitleCloseBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const TitleCloseBtnButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
`;

export const ModalContainerBody = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
    margin-top:-70px;
`;
