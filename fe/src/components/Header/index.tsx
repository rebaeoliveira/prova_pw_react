
import logo from "../../assets/images/ifpr2.jpg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>IFPR - Instituto Federal do Paraná</h1>
                    <h2>Campus Cascavel</h2>
                </div>

                <img src={logo} alt="AppFood" />
            </Content>
        </Container>
    );
}