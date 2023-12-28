import styled from 'styled-components';

import { mobile } from "./responsive"
import { useState } from 'react';
import { register } from '../redux/userCalls';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: lightcyan;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`


const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  })

  const [final_password, setFinal_password] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
    // console.log(user)
  }
  // console.log(final_password)

  const navigateTo = useNavigate()

  const handleSubmit = (e) => {
    if (user.password !== final_password) {
      toast.warn('Passwords are not matching!', {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      try {
        register(user);
        
        toast.success('Successfully Registered', {
          position: toast.POSITION.TOP_CENTER,
        })
        
        navigateTo('/');

      } catch (error) {
        console.log(error)
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    }

  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" name="first_name" onChange={handleChange} />
          <Input placeholder="last name" name="last_name" onChange={handleChange} />
          <Input placeholder="username" name="username" onChange={handleChange} />
          <Input placeholder="email" type="email" name="email" onChange={handleChange} />
          <Input placeholder="password" type="password" name="password" onChange={handleChange} />
          <Input placeholder="confirm passsword" type="password" name="final_pasowrd" onChange={
            (e) => {
              setFinal_password(e.target.value)
            }} />
          <Agreement>By creating an account, I consent to
            the processing of my personal data in accordance with
            <b> PRIVACY POLICY</b></Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register


