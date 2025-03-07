import {Link} from "react-router-dom";
import {styled} from "styled-components";


const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    list-style: none;
    

    @media screen and (max-width: 750px) {
        flex-direction: row; /* Horizontal Menu */
        justify-content: center;
        padding: 0;
    }
`;

const NavItem = styled.li`
    width: 90%;
    padding: 0;
    margin: 3vh auto;
    font-size: calc(2px + 2vw);
    list-style: none;
    text-decoration:none;
    a{
        text-decoration: none;
    }

    @media screen and (max-width: 750px) {
        
        margin: 1%;
        padding: 1% 0;
        width: auto;
      
    }
`;

export default function Nav() {
    return (
        <NavList>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/education">Education</Link>
            </NavItem>
            <NavItem>
                <Link to="/experience">Experience</Link>
            </NavItem>
            <NavItem>
                <Link to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
                <Link to="/works">Works</Link>
            </NavItem>
            <NavItem>
                <Link to="/references">References</Link>
            </NavItem>

        </NavList>
    );
}

