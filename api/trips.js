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
    const { user_id, city_id, start_date, end_date, trip_name } = req.body;
    
    // Insert into your trips table with correct column names
    const query = `
      INSERT INTO trips (user_id, trip_city, trip_date, end_date, trip_name) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `;
    
    const result = await db.query(query, [user_id, city_id, start_date, end_date, trip_name || 'My Trip']);
    
    res.json({ success: true, trip: result.rows[0] });
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ error: 'Failed to create trip' });
  }
});

// Get all of the user's trips based on city 
router.get('/city/:cityId', verifyToken, async (req, res) => {
  try {
    const { cityId } = req.params;
    const userId = req.user.id;
    
    const query = `
      SELECT * FROM trips 
      WHERE user_id = $1 AND trip_city = $2
    `;
    
    const result = await db.query(query, [userId, cityId]);
    
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'No trip found' });
    }
  } catch (error) {
    console.error('Error fetching trip:', error);
    res.status(500).json({ error: 'Failed to fetch trip' });
  }
});

export default router;