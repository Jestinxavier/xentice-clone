import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardComponent.css";
function CardComponent({ image, title, location, price,item }) {
  return (
    <Card style={{ width: "18rem" }} className="mx-3">
      <Card.Img variant="top" className="card-image-list" src={image} />
      <Card.Body>
        <Card.Title>
          <div className="CardComponent-flex">
            <p>{title}</p>
            <ion-icon name="heart-outline" ></ion-icon>
          </div>
        </Card.Title>

        <div>
          <p>{location}</p>

          {price?.rate ? (
           
            <p className="text-danger">{price?.rate + price?.type}</p>
          ) : 
            null
          }
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">
          <div class="d-flex justify-content-end explore-link pop">
            Explore Now
          </div>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
