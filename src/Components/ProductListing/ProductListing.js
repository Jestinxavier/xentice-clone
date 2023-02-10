import React from "react";
import { Container } from "react-bootstrap";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import CardComponent from "../Elements/CardComponent";
import "./ProductListing.css";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function ProductListing({ allData, mainData }) {

  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  React.useEffect(() => {
    let data = JSON.stringify(allData);
    let all = JSON.parse(data);
    setItems(allData);
  }, [allData]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className="m-3 mt-5">
      {" "}
      <div className="icon-image-listing-wrapper ml-4">
        <img
          className="subheader-img icon-image-listing-mar"
          style={{ background: "rgb(1 43 114)" }}
          src={mainData.icon}
        ></img>
        
        <h3>{mainData.name}</h3>
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map((item, id) => {
          return (
            <div
              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            >
              <CardComponent
                location={item?.location?.city}
                title={item?.details?.title}
                image={item?.details?.images}
                price={item?.details?.price}
                buildArea={item?.build_area}
                item={item}
              />
            </div>
          );
        })}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      className="ProductListing-icon"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <div className="text-dark">
        <ion-icon
          style={{ color: "#000" }}
          name="chevron-back-outline"
        ></ion-icon>
      </div>
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className="ProductListing-icon"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      <div>
        <ion-icon
          style={{ color: "#000" }}
          name="chevron-forward-outline"
        ></ion-icon>
      </div>
    </div>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default ProductListing;
