interface Tournament {
  name: string
  typeOfEvent: 'ONE_WAY' | 'ROUND'
  teams: string[]
  matches?: Match[]
}

interface Team {
  name: string
  goals: number
}

interface Match {
  local: Team
  visitor: Team
}

interface Group {
  name: string
  teams: string[]
  matches: { firstRound: Match[]; secondRound?: Match[] }
}
