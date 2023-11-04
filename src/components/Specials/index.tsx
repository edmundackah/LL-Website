import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Customer favourites</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl="https://nocrumbsleft.net/wp-content/uploads/2021/06/vegan-mediterranean-salad.jpg"
          title="House Salad"
          price={22.17}
          description="For this Vegan Mediterranean Salad, I loved adding Greek flavors to create the dish. Plus, the Crunchy Chickpeas add some beautiful texture to the salad."
        />
        <SpecialFoodCard
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/190326-strawberry-tart-horizontal-2-1554319677.png?crop=0.668xw:1.00xh;0.200xw,0&resize=1200:*"
          title="Strawberry Tart"
          price={10.47}
          description="This Strawberry Tart is the perfect dish for celebrating spring and summer!"
        />
        <SpecialFoodCard
          imageUrl="https://theloopywhisk.com/wp-content/uploads/2021/05/White-Chocolate-Cheesecake_730px-featured.jpg"
          title="Lemon Dessert"
          price={3.14}
          description="An old classic re-imagined with a British twist that surprises and excites the senses"
        />
      </Cards>
    </Container>
  );
};

export default Specials;