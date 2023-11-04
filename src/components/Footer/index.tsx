import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src="https://media.houseandgarden.co.uk/photos/626bae2b6fc29fccf7658b2a/1:1/w_2000,h_2000,c_limit/220311_Lisboeta0739_039_+R2_Lights_HiRes.jpg" alt="Food" />
        <Column>
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Order Online</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Login</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                Manchester <br />
                Lancaster
                <br />
                Weaste M16 2TG <br />
                UK
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+44195275588" target="_blank" rel="external">
                +44 1952 75588
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:fake@email.com"
                target="_blank"
                rel="external"
              >
                fake@email.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Infused with a flavour of Europe</span>
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
