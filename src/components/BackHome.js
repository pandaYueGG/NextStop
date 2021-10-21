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
    <div className="mt-10">
        <div className="border rounded-lg bg-white shadow-lg overflow-hidden mx-52">
            <div className="mt-10 text-4xl font-bold mx-auto">Your Booking Confirmation</div>
                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden py-16 my-10">
                    <div className="h-64 grid grid-rows-4 grid-flow-col gap-4 my-20">
                      <div className="text-2xl font-bold">
                        London, here you come!
                      </div>
                      <div className="font-bold">
                      Thank you for booking with NextStop. Please check your email for a confirmation from your airline.
                      </div>
                      <div className="mx-40">
                          Essential information to enter the UK
                          The United Kingdom is taking steps to help stop the spread of COVID-19.

                          To protect your health and others', everyone must complete an online passenger locator form before arrival in the United Kingdom.
                          You may be required to self-isolate for 14 days on arrival. Check the exempt countries list immediately before you travel as this list can change at short notice.
                          It is a legal requirement that you wear a face covering on public transport in the UK.
                          Failure to comply with the above measures is a criminal offence and you could be fined. Please visit www.gov.uk/uk-border-control for detailed public health advice and requirements for entering the UK.
                      </div>
                    </div>
                </div>
        </div>
      <Button  onClick={() => {history.push("/")}} className="pay-btn">Back to Homepage</Button>
    </div>
  );
};

export default BackHome;