CREATE Table "events" (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048) NOT NULL,
    season VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events_has_teams (
    event_id UUID NOT NULL,
    team_id UUID NOT NULL,
    PRIMARY KEY (event_id, team_id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (team_id) REFERENCES teams (id)
);

CREATE TABLE events_has_team_leagues (
    event_id UUID NOT NULL,
    team_league_id UUID NOT NULL,
    PRIMARY KEY (event_id, team_league_id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (team_league_id) REFERENCES team_leagues (id)
);