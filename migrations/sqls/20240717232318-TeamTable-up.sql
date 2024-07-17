CREATE Table teams (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE teams_has_participants (
    team_id UUID NOT NULL,
    participant_id UUID NOT NULL,
    PRIMARY KEY (team_id, participant_id),
    FOREIGN KEY (team_id) REFERENCES teams (id),
    FOREIGN KEY (participant_id) REFERENCES users (id)
);