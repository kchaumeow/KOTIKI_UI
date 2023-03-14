import "buttons_style.css";
import Button from "react-bootstrap/Button";
export default function Buttons() {
  return (
    <div className="d-grid gap-4 col-3 mx-auto">
      <Button variant="outline-primary" size="lg">PrimaryButtonText</Button>{' '}
      <Button variant="primary" size="lg">SecondaryButtonText</Button>{' '}
    </div>
  );
}