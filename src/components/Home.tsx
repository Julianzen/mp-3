import {styled} from "styled-components";

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #98c5c2;
    max-width: 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const ContentImg = styled.img`
    width: 50%;
    max-width: 50%;
    max-height: 50%;
    height: 50%;
    margin-bottom: 2vw;
    margin-top: 2vw;
`
export const MainParagraph = styled.p`
    font-size: calc(2px + 2vw); 
    color: darkslategray;       
    line-height: 1.5;           
    margin: 2vw 1vw;           
    max-width: 80%;            
`

   export default function Home(){
        return(
            <MainContentDiv>
                <ContentImg src="/meimage.PNG" alt="image of Julian Shyu" />
                <MainParagraph>
                <p> Hi, my name is Julian Shyu and I am a student studying at Boston University. I'm a computer science
                major and psychology major. You can find me drawing or writing short stories when I am not doing a problem set.
                </p>

                </MainParagraph>


            </MainContentDiv>
        )
   }
