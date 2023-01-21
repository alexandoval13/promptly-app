-- create a database
DROP DATABASE IF EXISTS promptlydev;
CREATE DATABASE promptlydev;
\c promptlydev;

-- USERS
CREATE TABLE IF NOT EXISTS alien (
    id SERIAL PRIMARY KEY,
    login_id VARCHAR(30) NOT NULL,
    login_pw VARCHAR(30) NOT NULL,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    birth_date DATE,
    create_date DATE DEFAULT CURRENT_DATE,
    update_date DATE DEFAULT CURRENT_DATE,
    settings JSON
);

CREATE INDEX ON alien(login_id);

COPY alien(id,login_id,login_pw,first_name,last_name,birth_date,create_date,update_date,settings)
FROM '/Users/alexandra/Engineering/Promptly/promptly-app/server/db/csv/alien.csv'
DELIMITER ','
CSV HEADER;

-- USER SPECIFIC REMINDERS
CREATE TABLE IF NOT EXISTS thought_space (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    thought VARCHAR(500),
    create_date DATE DEFAULT CURRENT_DATE,
    update_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_userThought
        FOREIGN KEY(user_id)
            REFERENCES alien(id)
);

CREATE INDEX ON thought_space(user_id);

COPY thought_space(id,user_id,thought,create_date,update_date)
FROM '/Users/alexandra/Engineering/Promptly/promptly-app/server/db/csv/thought_space.csv'
DELIMITER ','
CSV HEADER;

-- SPACE TIME TYPE OPTIONS
CREATE TABLE IF NOT EXISTS space_time_types (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(50),
    base BOOLEAN,
    custom BOOLEAN
);

COPY space_time_types(id,type_name,base,custom)
FROM '/Users/alexandra/Engineering/Promptly/promptly-app/server/db/csv/space_time_types.csv'
DELIMITER ','
CSV HEADER;

-- SPACE TIME BANK
CREATE TABLE IF NOT EXISTS space_time (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    ex_name VARCHAR(50),
    ex_description VARCHAR(200),
    space_time_types INT,
    time_commitment VARCHAR(50),
    difficulty VARCHAR(50),
    CONSTRAINT fk_userSpace
        FOREIGN KEY(user_id)
            REFERENCES alien(id),
    CONSTRAINT fk_spaceTimeType
        FOREIGN KEY(space_time_types)
            REFERENCES space_time_types(id)
);

CREATE INDEX ON space_time(user_id);

COPY space_time(id,user_id,ex_name,ex_description,space_time_types,time_commitment,difficulty)
FROM '/Users/alexandra/Engineering/Promptly/promptly-app/server/db/csv/space_time.csv'
DELIMITER ','
CSV HEADER;