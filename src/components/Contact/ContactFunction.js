import styled from "styled-components";

export const ContactContainer = styled.div`
   display: flex;
   justify-content: space-evenly;   
   padding: 50px;
   letter-spacing: 1px;
   @media screen and (max-width: 980px) {
     flex-direction: column;
     align-items: center;
     padding: 30px;
   }
 `;

export const ContactWrapperTop = styled.div`
 background-image: url('https://i.ibb.co/TDfw0Ht/contact-frame.png');
 background-size: contain;
 height: 50px
`

export const ContactWrapperBottom = styled.div`
background-image: url('https://i.ibb.co/TDfw0Ht/contact-frame.png');
background-size: contain;
height: 50px;
transform: rotate(180deg);
`


export const ContactH1 = styled.h1`
   border-bottom: 2px solid #e9ba23;
   text-align: center;
   max-width: 180px;
   margin: 30px auto 50px;
   letter-spacing: 1px;
 `;

export const ContactInput = styled.input`
    padding: 5px;
    outline: none;
    border-radius: 5px;
    border: none;
    border-bottom: 2px solid grey;
    margin-bottom: 10px;
    letter-spacing: 1px;
    transition: all 0.2s ease-out;   
    &::placeholder {
     padding: 5px;
     letter-spacing: 1px;
     &:focus {
      visibility: normal;
      opacity: 1;
      transform: translateY(-2px);
     }
    }
    &:focus {
    border-bottom: 2px solid #ffc500;
    &:invalid {
      border-bottom: 2px solid red;
     }
    }
  `;

export const ContactButton = styled.input`
   align-items: center;
   margin-top: 20px;
   font-size: 1.2rem;
   padding: 1rem;
   border: none;
   background: #e31837;
   color: #fff;
   transition: 0.2s ease-out;
   &:hover {
     background: #ffc500;
     transition: 0.2s ease-out;
     cursor: pointer;
     color: #000;
   }
 `;

export const ContactForm = styled.form`
   width: 343px;
   min-height: 450px;
   padding: 30px;
   box-shadow: 0 3px 3rem rgba(0, 0, 0, 0.2);
   overflow: hidden;
   border-radius: 5px;
   display: grid;
   @media screen and (max-width: 980px) {
     margin-top: 30px;
   }
 `;

export const ContactTextArea = styled.textarea`
padding: 10px;
margin: 10px auto;
height: 112px;
width: 284px;
border: .5px solid grey;
border-radius: 3px;
outline: none;
letter-spacing: 1px;
`

export const ContactMap = styled.iframe`
   box-shadow: 0 2px 3rem rgba(0, 0, 0, 0.1);
   width: 600px;
   height: 400px;
   border: none;
   @media screen and (max-width: 980px) {
     width: 343px;
   }`