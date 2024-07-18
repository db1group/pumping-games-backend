CREATE TABLE individual_leagues (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(2048),
    season VARCHAR(255),
    status VARCHAR(255) NOT NULL,
    league_form_evidence_id UUID NOT NULL,
    min_participants INT NOT NULL,
    max_participants INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (league_form_evidence_id) REFERENCES league_form_evidences (id)
);

CREATE TABLE individual_leagues_has_participants (
    individual_league_id UUID NOT NULL,
    participant_id UUID NOT NULL,
    PRIMARY KEY (
        individual_league_id,
        participant_id
    ),
    FOREIGN KEY (individual_league_id) REFERENCES individual_leagues (id),
    FOREIGN KEY (participant_id) REFERENCES participants (id)
);