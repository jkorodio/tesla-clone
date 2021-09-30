import React, { useRef } from 'react';
import { auth } from './firebase';
import styled from 'styled-components';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <LoginContainer>
      <img src='/images/favicon.ico' />
      <LoginSpace></LoginSpace>
      <LoginInput>
        <h1>Sign In</h1>
        <form>
          <input ref={emailRef} placeholder='Email' type='email' />
          <input ref={passwordRef} placeholder='Password' type='password' />
          <button type='submit' onClick={signIn}>
            Sign In
          </button>
        </form>
        <RegisterBtn>
          <button onClick={register}>Create an account</button>
        </RegisterBtn>
      </LoginInput>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  img {
    padding: 10px 10px;
  }
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url('/images/new-interior.jpg');
`;

const LoginSpace = styled.div`
  padding-bottom: 120px;
`;

const LoginInput = styled.div`
  max-width: 350px;
  padding: 70px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.85);
  h1 {
    padding-left: 55px;
    margin-bottom: 25px;
    color: white;
  }

  form {
    display: grid;
    flex-direction: column;
    input {
      padding: 0 5px;
      border-radius: 5px;
      border-width: 0;
      outline-width: 0;
      height: 40px;
      margin-bottom: 14px;
    }
    button {
      border-radius: 5px;
      border-width: 0;
      height: 30px;
      font-size: 15px;
      color: white;
      background-color: #4287f5;
      cursor: pointer;
    }
  }
`;

const RegisterBtn = styled.div`
  display: grid;
  padding-top: 10px;
  button {
    border-radius: 5px;
    border-width: 0;
    height: 30px;
    font-size: 13px;
    color: white;
    background-color: #58eb50;
    cursor: pointer;
  }
`;
