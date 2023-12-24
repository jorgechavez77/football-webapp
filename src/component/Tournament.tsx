import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap'
import { useState } from 'react'

export default function Tournament() {
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')
  const [teams, setTeams] = useState<string[]>([])
  const [typeOfEvent, setTypeOfEvent] = useState<any>('ONE_WAY')

  const handleAddTeam = (): void => {
    teams.push(team)
    setTeams(teams)
    setTeam('')
    console.log(teams)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const tournament: Tournament = {
      name,
      typeOfEvent,
      teams,
    }
    console.log(tournament)
  }

  const handleRemove = (index: any) => {
    setTeams(teams.filter((e, i) => i != index))
  }

  // const handleChangeTeam = (index: number, value: string) => {
  //   teams[index] = value
  //   setTeams(teams)
  //   console.log(teams)
  // }

  return (
    <div>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          {/* <Label sm={2}>Name:</Label> */}
          <Col>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></Input>
          </Col>
          <Col></Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input type="select" onChange={(e) => setTypeOfEvent(e.target.value)}>
              <option value={'ONE_WAY'} label="One way" />
              <option value={'ROUND'} label="Round" />
            </Input>
          </Col>
          <Col></Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team Name" />
          </Col>
          <Col>
            <Button color="success" size="sm" onClick={() => handleAddTeam()}>
              +
            </Button>
          </Col>
        </FormGroup>
        {teams.map((_e, i) => (
          <FormGroup row key={i.toString()}>
            <Col>
              <Input value={teams[i]} disabled={true}></Input>
            </Col>
            <Col>
              <Button color="danger" size="sm" onClick={() => handleRemove(i.toString())}>
                x
              </Button>
            </Col>
          </FormGroup>
        ))}
        <Button color="primary">Create</Button>
      </Form>
    </div>
  )
}
