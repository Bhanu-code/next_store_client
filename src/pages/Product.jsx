import styled from 'styled-components'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { Add, Remove } from '@mui/icons-material'

import {mobile} from "./responsive"

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection: "column"})}
`
const ImageContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 5px;
${mobile({padding: "10px"})}
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}
`
const FilterTitle = styled.span`
font: 20px;
font-weight: 200;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 10px;

`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`
const Amount = styled.span`
width: 30px;
height: 30px;
display: flex;
border-radius: 10px;
border: 1px solid teal;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
font-weight: 500;
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;

&:hover {
    background-color: #f8f4f4;
}
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/DG69bQ4/2.png" alt="product image"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Shoes</Title>
                    <Desc>Lorem ipsum dolor sitjh bnjbjb knk
                    hvh jbjkbj </Desc>
                    <Price>Rs 5667</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="red" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product