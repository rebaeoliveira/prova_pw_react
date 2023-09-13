// npm install react-icons

import { Container, Content} from "./styles";
import { SocialIcons } from "./styles";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGit, FaGithub, FaTelegram, FaSkype} from 'react-icons/fa';

export function Footer() {
    return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Renivaldo Baessa de Oliveira</h1>
          <h2>Programação Web 2 - Professor Fernando</h2>
        </div>

        <SocialIcons>
          <FaInstagram/>
          <FaFacebook/>
          <FaTwitter/>
          <FaGithub/>
          <FaTelegram/>
          <FaSkype/>
        </SocialIcons>
      </Content>
    </Container>
  );
}