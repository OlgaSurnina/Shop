import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;
`;

const Image = styled.img`
height: 387px;
@media screen and (max-width: 1499px){
    height: 272px;
}
`;

function Product() {
    return (
        <Container>
            <Image src="./images/image-1.webp"
                alt="изображение iPhone" />
            <Image src="./images/image-2.webp"
                alt="изображение iPhone" />
            <Image src="./images/image-3.webp"
                alt="изображение iPhone" />
            <Image src="./images/image-4.webp"
                alt="изображение iPhone" />
            <Image src="./images/image-5.webp"
                alt="изображение iPhone" />

        </Container>
    )
}
export default Product