import styled from 'styled-components';

// import Badge from '@mui/material/Badge';
// or
import { Badge, Button } from '@mui/material';
import { Link } from "react-router-dom"

import { Search, ShoppingCart } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userCalls'

import { useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.div`
font-weight: bold;
font-size: 35px;
${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`

const MenuItem = styled.div`
font-size: 14px;
margin-left: 25px;
text-decoration: none;
cursor: pointer;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const SearchContainer = styled.div`
border: 1px solid grey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`

const Navbar = () => {
    const token = document.cookie.includes('jwt');
    // const user = useSelector(state => state.user.currentUser);
    const quantity = useSelector(state => state.cart.quantity);


    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout(dispatch);
        navigateTo('/');
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search..' />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer> */}
                </Left>
                <Center>
                    <Logo>NEXT.Store</Logo>
                </Center>
                <Right>
                    <Link to='/cart/'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </MenuItem>
                    </Link>
                    {!token && <>
                        <Link to='/login' >
                            <Button >Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button >Register</Button>
                        </Link>
                    </>
                    }
                    {token &&
                        <Button onClick={handleLogout}>LOGOUT</Button>
                    }
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar