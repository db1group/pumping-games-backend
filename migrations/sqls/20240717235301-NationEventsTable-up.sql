CREATE TABLE nations (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(255) NOT NULL
);

create table nations_has_participants (
    nation_id UUID NOT NULL,
    participant_id UUID NOT NULL,
    PRIMARY KEY (nation_id, participant_id),
    FOREIGN KEY (nation_id) REFERENCES nations (id),
    FOREIGN KEY (participant_id) REFERENCES participants (id)
);

CREATE TABLE nation_events (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048),
    season VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE nation_events_has_nations (
    nation_event_id UUID NOT NULL,
    nation_id UUID NOT NULL,
    PRIMARY KEY (nation_event_id, nation_id),
    FOREIGN KEY (nation_event_id) REFERENCES nation_events (id),
    FOREIGN KEY (nation_id) REFERENCES nations (id)
);

CREATE TABLE nation_events_has_team_leagues (
    nation_event_id UUID NOT NULL,
    team_league_id UUID NOT NULL,
    PRIMARY KEY (
        nation_event_id,
        team_league_id
    ),
    FOREIGN KEY (nation_event_id) REFERENCES nation_events (id),
    FOREIGN KEY (team_league_id) REFERENCES team_leagues (id)
);