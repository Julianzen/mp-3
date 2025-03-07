import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import References from "./components/References.tsx";
import Projects from "./components/Projects.tsx"
import Works from "./components/Works.tsx";
import Home from "./components/Home.tsx";
import Nav from "./components/Nav.tsx";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";


const PageWrapper = styled.div`
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction: column;
height: 100vh;
`;

const Header = styled.header`
display: flex;
flex-direction: column;
padding: 1vh 1vw;
background-color: darkslateblue;
color: bisque;

    @media screen and (max-width: 750px) {
        justify-content: center; 
        align-items: center; 
    }

`;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    background-color: white;
    height: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: column; 
        height: 100%;        
    }
`;

const Navigator = styled.nav`
width: 30%;
max-width: 100%;
background-color: lavender;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width: 750px) {
        width: 100%; 
        flex-direction: row; 
}    
`;

const NavList = styled.ul`
max-height: 100%;    
display: flex;
flex-direction: column;
list-style: none;
padding-left: 0;
text-align: center;
font-size: calc(2px + 1vw);
@media screen and (max-width: 750px) {
    flex-direction: row; 
    justify-content: space-between;
    padding: 0 1vw;
}
`;

const NavItem = styled.li`
max-width: 100%;
max-height: 100%;    
padding: 2vh 0;
margin: 5vh auto;
font-size: calc(3px + 3vw);
list-style: none;

`;

const Content = styled.main`
width: 70%;
max-width:100%;    
display: flex;
flex-direction: column;
background-color: white;
text-align: center;
@media screen and (max-width: 750px) {
        width: 100%; 
        height: 100%;
}
`;

const Footer = styled.footer`
background-color: darkslateblue;
color: bisque;
padding: 1vh 1vw;
display: flex;
justify-content: space-evenly;
`;

function DynamicHeader() {
    const location = useLocation();
    console.log("Current Pathname:", location.pathname);
    let title = "Home"; // Default title

    if (location.pathname === "/") {
        title = "Home";
    } else if (location.pathname === "/education") {
        title = "Education";
    } else if (location.pathname === "/experience") {
        title = "Experience";
    } else if (location.pathname === "/references") {
        title = "References";
    } else if (location.pathname === "/projects") {
        title = "Projects";
    } else if (location.pathname === "/works") {
        title = "Works";
    }

    return <h1>{title}</h1>;
}




function Root() {
    return (
        <Router>
            <PageWrapper>
                <Header>
                    <DynamicHeader />
                </Header>
                <Container>
                    <Navigator>
                        <NavList>
                            <NavItem>
                                <Nav />
                            </NavItem>
                        </NavList>
                    </Navigator>
                    <Content>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/references" element={<References />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/works" element={<Works />} />

                        </Routes>
                    </Content>
                </Container>
                <Footer>
                    <footer> All rights reserved: <Link to="/references">Credits</Link> &#169;</footer>
                </Footer>
            </PageWrapper>
        </Router>
    );
}

export default function App() {
    return <Root />;
}
