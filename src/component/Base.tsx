import { Button, Container } from 'reactstrap'
import Tournament from './Tournament'

export default function Base() {
  return (
    <div>
      <Container className="bg-light border">
        {/* <Button color="success">Continue</Button>{" "}
        <Button color="primary">New</Button> */}
        <Tournament />
      </Container>
    </div>
  )
}
