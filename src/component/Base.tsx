import { Container } from 'reactstrap'
import TournamentComponent from './TournamentComponent'
import EventComponent from './EventComponent'
import { useState } from 'react'

export default function Base() {
  const [tournament, setTournament] = useState<Tournament>()

  return (
    <div>
      <Container className="bg-light border" fluid='sm'>
        {!!!tournament && <TournamentComponent setTournament={setTournament} />}
        {!!tournament && <EventComponent tournament={tournament} />}
      </Container>
    </div>
  )
}
