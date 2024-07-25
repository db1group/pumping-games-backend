CREATE TABLE team_leagues (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048) NOT NULL,
    season VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    min_teams INT NOT NULL,
    max_teams INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team_leagues_has_teams (
    team_league_id UUID NOT NULL,
    team_id UUID NOT NULL,
    PRIMARY KEY (team_league_id, team_id),
    FOREIGN KEY (team_league_id) REFERENCES team_leagues (id),
    FOREIGN KEY (team_id) REFERENCES teams (id)
);