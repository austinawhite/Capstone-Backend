DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS experience_category CASCADE;
DROP TABLE IF EXISTS experiences CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city_name TEXT UNIQUE NOT NULL,
    city_description TEXT,
    city_image TEXT NOT NULL
);

CREATE TABLE experience_category (
    id SERIAL PRIMARY KEY,
    category_name TEXT UNIQUE NOT NULL
);

CREATE TABLE experiences (
    id SERIAL PRIMARY KEY,
    experience_name TEXT NOT NULL,
    experience_description TEXT NOT NULL,
    experience_picture TEXT NOT NULL, 
    experience_city INTEGER NOT NULL,
    experience_category INTEGER NOT NULL,
    FOREIGN KEY (experience_city) REFERENCES cities(id) ON DELETE CASCADE,
    FOREIGN KEY (experience_category) REFERENCES experience_category(id) ON DELETE CASCADE 
);

CREATE TABLE trips(
    id SERIAL PRIMARY KEY,
    trip_name TEXT NOT NULL,
    trip_date DATE NOT NULL,
    end_date DATE NOT NULL,
    user_id INTEGER NOT NULL, 
    trip_city INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (trip_city) REFERENCES cities(id) ON DELETE CASCADE
); 

/* This is for the specific experiences selected for a person's trip */
CREATE TABLE trip_experiences(
    id SERIAL PRIMARY KEY, 
    trip_id INTEGER NOT NULL,
    trip_experience INTEGER NOT NULL, 
    experience_date DATE NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
    FOREIGN KEY (trip_experience) REFERENCES experiences(id) ON DELETE CASCADE
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    experience_id INTEGER NOT NULL,
    rating INTEGER not null,
    comment TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (experience_id) REFERENCES experiences(id) ON DELETE CASCADE
);