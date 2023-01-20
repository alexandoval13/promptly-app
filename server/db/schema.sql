-- create a database
DROP DATABASE IF EXISTS promptlydev;
CREATE DATABASE promptlydev;
\c promptlydev;

CREATE TABLE IF NOT EXISTS alien (
    id SERIAL PRIMARY KEY,
    login_id VARCHAR(30) NOT NULL,
    login_pw VARCHAR(30) NOT NULL,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    birth_date DATE,
    create_date DATE DEFAULT CURRENT_DATE,
    update_date DATE DEFAULT CURRENT_DATE
);

CREATE INDEX ON IDX_loginid(login_id);
