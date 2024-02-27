DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id  INT GENERATED ALWAYS AS IDENTITY,
    username  VARCHAR(100) NOT NULL UNIQUE,
    name  VARCHAR(100),
    password  VARCHAR(200) NOT NULL,
    email  VARCHAR(100) UNIQUE ,
    level  INT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE permgroups (
    id INT GENERATED ALWAYS AS IDENTITY,
    groupname VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE groupresources (
    id INT GENERATED ALWAYS AS IDENTITY,
    resourcegroupname VARCHAR(100) NOT NULL,
    parentgroup INT NOT NULL,
    FOREIGN KEY (parentgroup) REFERENCES permgroups(id),
    PRIMARY KEY(id)
);


CREATE TABLE indresource (
    id INT GENERATED ALWAYS AS IDENTITY,
    resourcetype INT NOT NULL,
    PRIMARY key (id)
);
