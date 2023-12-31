interface Tournament {
  name: string
  typeOfEvent: 'ONE_WAY' | 'ROUND'
  teams: string[]
  matches?: Math[]
}

interface Team {
  name: string
  goals: number
}

interface Match {
  local: Team
  visitor: Team
}

interface NewTournament {
  name: string
  type: 'ONE_WAY' | 'ROUND'
  teams: string[]
  numberOfGroups: number
  groups: Group[]
}

interface Group {
  name: string
  teams: string[]
  matches: { firstRound: Math[]; secondRound?: Match[] }
}
