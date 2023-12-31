import React, { FormEvent, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import shuffle from 'lodash/shuffle'

type Props = {
  tournament: Tournament
}

const sortMatches = (teams: string[]) => {
  const _teams = structuredClone(teams)
  const shuffledTeams = shuffle(_teams)
  const matches: Match[] = []
  shuffledTeams.forEach((teamA) => {
    shuffledTeams.forEach((teamB) => {
      if (teamA != teamB) {
        const match: Match = {
          local: { name: teamA, goals: 0 },
          visitor: { name: teamB, goals: 0 },
        }
        matches.push(match)
      }
    })
  })
  return matches
}

export default function EventComponent({ tournament: { name, teams } }: Props) {
  const [matches, setMatches] = useState<Match[]>(() => sortMatches(teams))

  const handleChange = (value: string, matchIndex: number, isLocal: boolean) => {
    // console.log({ value, matchIndex, isLocal })
    const _matches = structuredClone(matches)

    // console.log(_matches[matchIndex])

    const match = _matches[matchIndex]
    if (isLocal) {
      match.local.goals = value as any
    } else {
      match.visitor.goals = value as any
    }

    setMatches(_matches)
  }

  const handleSave = (event: FormEvent) => {
    // event.preventDefault()
    // console.log(matches)
  }

  return (
    <div>
      <br />
      <Form>
        <FormGroup>
          <Label>{name}</Label>
        </FormGroup>
        {matches.map((match, matchIndex) => (
          <FormGroup row key={matchIndex}>
            <Row>
              <Col md="2">
                <Input value={match.local.name} readOnly={true} />
              </Col>
              <Col md="1">
                <Input
                  type="number"
                  value={match.local.goals}
                  onChange={(e) => handleChange(e.target.value, matchIndex, true)}
                />
              </Col>
            </Row>
            <Row>
              <Col md="2">
                <Input value={match.visitor.name} readOnly={true} />
              </Col>
              <Col md="1">
                <Input
                  type="number"
                  value={match.visitor.goals}
                  onChange={(e) => handleChange(e.target.value, matchIndex, false)}
                />
              </Col>
            </Row>
          </FormGroup>
        ))}
        <FormGroup>
          <Row>
            <Col md="2">
              <Button color="primary" onClick={handleSave}>
                Save
              </Button>
            </Col>
            <Col md="2">
              <Button color="success">Finalize</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  )
}
