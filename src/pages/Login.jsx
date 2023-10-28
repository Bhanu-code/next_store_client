import styled from 'styled-components';
import {mobile} from "./responsive"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {login} from "../redux/userCalls"

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: lightcyan;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width: "75%"})}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 30%;
margin: 10px 0px;
padding: 10px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
&::disabled{
  background-color: grey;
  cursor: not-allowed;
}
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state)=> state.user)

  const handleLogin = (e)=>{
    e.preventDefault()
    login(dispatch, {username, password})
  }

  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                {/* <Input placeholder="email" type="email" /> */}
                <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
                <Button onClick={handleLogin} disabled={isFetching} >LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE ACCOUNT</Link>
            </Form>
        </Wrapper> 
    </Container>
  )
}

export default Login