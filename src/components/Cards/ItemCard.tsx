import { Tooltip } from "@mui/material";
import { CustomButton } from "../CustomButton/CustomButton";

interface CardProps {
  image: string;
  label: string;
}

export const ItemCard = ({ items }: { items: CardProps[] }) => {
  return (
    items &&
    items.map((item, index) => (
      <div
        key={index}
        className="flex-col flex w-20 h-20 gap-5 animate_quick_scale"
      >
        <CustomButton
          id="item-card-button"
          className="w-full h-full flex items-center justify-center p-2"
        >
          <Tooltip title={item.label}>
            <img
              id="item-card"
              className="w-full h-full"
              src={item.image}
              alt={item.image}
            />
          </Tooltip>
        </CustomButton>
      </div>
    ))
  );
};
