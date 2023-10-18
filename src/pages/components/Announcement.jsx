import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet commodi assumenda
        </Container>
    )
}

export default Announcement