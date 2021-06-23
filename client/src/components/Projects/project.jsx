import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const project = () => {
  const heightMarks = {
    0: "0",
    // 10: "10",
    20: "20",
    // 30: "30",
    40: "40",
    // 50: "50",
    60: "60",
    // 70: "70",
    80: "80",
    // 90: "90",
    100: "100",
  };
  return (
    <Card>
      <CardImg top width="100%" src="/images/2.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Slider defaultValue={60} marks={heightMarks} disabled={true} />
        <div className="goal">
          <p>
            Goal : <strong>$300M</strong>
          </p>
          <p id="raised">
            Raised : <strong>22.000</strong>
          </p>
        </div>
        <Button outline>Donate</Button>
      </CardBody>
    </Card>
  );
};

export default project;
