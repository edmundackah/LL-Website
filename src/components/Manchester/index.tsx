import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";

const Manchester: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Manchester</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Italian brothers, Matteo and Stefan, who moved to the United Kingdom.
        </p>
        <p className="lead-txt">
          To craft the menu, my brother relies on family recipes and his experience as a chef in Italy.
        </p>
      </Content>
      <Image>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnz_BbOaoincSTgwBeI4sBytQi5GvBuXH2SZcbs7wIZtDK0a7iii_CenvmdoHUDo2mKoA&usqp=CAU" alt="Two chefs" />
        <img src="https://thetomato.ca/wp-content/uploads/2016/01/top-pick-13.jpg" alt="Two chefs" />
      </Image>
    </Container>
  );
};

export default Manchester;