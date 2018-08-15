CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  users_id INTEGER NOT NULL,
  text VARCHAR(200),
  completed BOOLEAN DEFAULT FALSE,
  date DATE
);
