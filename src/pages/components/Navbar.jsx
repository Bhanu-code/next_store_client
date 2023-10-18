import styled from 'styled-components';

// import Badge from '@mui/material/Badge';
// or
import { Badge } from '@mui/material';

import { Search, ShoppingCart } from '@mui/icons-material';
import { mobile } from '../responsive';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({padding: "10px 0px"})}
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
font-size: 25px;
${mobile({fontSize: "24px"})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`

const MenuItem = styled.div`
font-size: 14px;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
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
${mobile({width: "50px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search..' />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>NEXT.Store</Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </MenuItem>
                        <MenuItem>LOGIN</MenuItem>
                        <MenuItem>REGISTER</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar