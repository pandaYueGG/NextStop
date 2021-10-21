import React from 'react';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';
import img from './splash-image.png'


const Button = styled.button`
  position: absolute;
  right: 42%;
  bottom: 10%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 360px;
  height: 36px;
  font-size: 16px;
  background-color: #EDEDED;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const BackHome = () => {

  let history = useHistory();

  return (
    <div className="text-3xl bold m-auto">
      <span>Thank You For Your Payment !</span><br />
      <span>Enjoy Your Trip</span>
      <Button  onClick={() => {history.push("/")}} className="pay-btn">Back to Homepage</Button>
    </div>
  );
};

export default BackHome;