import express from "express";
import { verifyToken } from "../middleware.js";
import db from "../db/client.js";

const router = express.Router();

// Get all trips for a user (all cities)
router.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const query = `
      SELECT t.*, c.city_name, c.city_image 
      FROM trips t
      JOIN cities c ON t.trip_city = c.id
      WHERE t.user_id = $1
      ORDER BY t.trip_date ASC
    `;
    
    const result = await db.query(query, [userId]);
    
    res.json({ 
      success: true, 
      trips: result.rows,
      count: result.rows.length 
    });
  } catch (error) {
    console.error('Error fetching user trips:', error);
    res.status(500).json({ error: 'Failed to fetch trips' });
  }
});

// Create a trip for a user 
router.post('/', verifyToken, async (req, res) => {
  try {
    const { user_id, city_id, trip_date, end_date, trip_name } = req.body;
    
    // Insert into your trips table with correct column names
    const query = `
      INSERT INTO trips (user_id, trip_city, trip_date, end_date, trip_name) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `;
    
    const result = await db.query(query, [user_id, city_id, trip_date, end_date, trip_name || 'My Trip']);
    
    res.json({ success: true, trip: result.rows[0] });
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ error: 'Failed to create trip' });
  }
});

// Get all of the user's trips based on city 
router.get('/city/:cityId', verifyToken, async (req, res) => {
  console.log("Route reached for cityId:", req.params.cityId);
  try {
    const { cityId } = req.params;
    const userId = req.user.id;
    
    const query = `
      SELECT * FROM trips 
      WHERE user_id = $1 AND trip_city = $2
    `;

    console.log('Executing query with:', [userId, cityId]);
    
    const result = await db.query(query, [userId, cityId]);
    
    if (result.rows.length > 0) {
      console.log('Trips found:', result.rows);
      res.json(result.rows);
    } else {
      res.status(404).json({ message: 'No trip found' });
    }
  } catch (error) {
    console.error('Error fetching trip:', error);
    res.status(500).json({ error: 'Failed to fetch trip' });
  }
});

// GET /trips/with-experiences (get all trips with their experiences for the user)
router.get('/with-experiences', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const query = `
      SELECT 
        t.id AS trip_id,
        t.trip_name,
        t.trip_date,
        t.end_date,
        t.user_id,
        t.trip_city,
        c.city_name,
        c.city_image, 
        e.id AS experience_id,
        e.experience_name,
        e.experience_description, 
        e.experience_picture, 
        e.city_id AS experience_city_id,
        te.experience_date
      FROM trips t
      JOIN cities c ON t.trip_city = c.id
      LEFT JOIN trip_experiences te ON t.id = te.trip_id
      LEFT JOIN experiences e ON te.experience_id = e.id
      WHERE t.user_id = $1
      ORDER BY t.trip_date ASC
    `;

    const result = await db.query(query, [userId]);

    const tripsMap = {};

    result.rows.forEach(row => {
      if (!tripsMap[row.id]) {
        tripsMap[row.trip_id] = {
          trip_id: row.trip_id,
          trip_name: row.trip_name,
          trip_date: row.trip_date,
          end_date: row.end_date,
          user_id: row.user_id,
          trip_city: row.trip_city,
          city: {
            city_name: row.city_name,
            city_image: row.city_image,
          },
          experiences: [],
        };
      }

      if (row.experience_id) {
        tripsMap[row.id].experiences.push({
          experience_id: row.experience_id,
          experience_name: row.experience_name,
          experience_description: row.experience_description,
          experience_picture: row.experience_picture,
          experience_city_id: row.city_id,
          experience_date: row.experience_date
        });
      }
    });

    const trips = Object.values(tripsMap);

    res.json({ success: true, trips, count: trips,length });
  } catch (error) {
    console.error('Error fetching trips with experiences:', error);
    res.status(500).json({ error: 'Failed to fetch trips with experiences'});
  }
});

export default router;