import { verifyToken } from "../middleware";
import express from "express";
import db from "../db/client";

const router = express.Router();

//POST /tripexperiences (Add experience to trip)
router.post('/api/tripexperiences', verifyToken, async (req, res) => {
    console.log("Received request to add experience");
    try {
        const { trip_id, experience_id, experience_date } = req.body;

        if (!trip_id || !experience_id || !experience_date) {
            return res.status(400).json({ error: 'Missing required fields'})
        }

        const result = await db.query(`
            INSERT INTO trip_experiences (trip_id, trip_experience, experience_date)
            VALUES ($1, $2, $3)
            RETURNING *;
            `, [trip_id, experience_id, experience_date]);

        res.status(201).json(result.rows[0]);
    } catch(error) {
        console.error('Error adding experiencve to trip:', error);
        res.status(500).json({ error: 'Failed to add experience' })
    }
});

//GET /tripexperiences/:tripId  (Get experiences for a trip)
router.get('/:tripId', verifyToken, async (req, res) => {
    try {
        const { tripId } = req.params;

        const result = await db.query(`
            SELECT 
                trip_experiences.id AS trip_experience_id,
                trip_experiences.trip_id,
                trip_experiences.trip_experience,
                trip_experiences.experience_date,
                experiences.id AS experience_id,
                experiences.experience_name,
                experiences.experience_description,
                experiences.experience_picture,
                experiences.experience_city,
                experiences.experience_category             
            FROM trip_experiences
            JOIN experiences ON trip_experiences.trip_experience = experiences.id
            WHERE trip_experiences.trip_id = $1;
            `, [tripId]);

        res.json(result.rows);
    } catch(error) {
        console.error('Error fetching trip experiences:', error);
        res.status(500).json({ error: 'Failed to fetch experiences' });
    }
});

//DELETE /tripexperiences/:tripExperienceId (Delete experience from a trip)
router.delete('/:tripExperienceId', verifyToken, async (req, res) => {
    try {
        const { tripExperienceId } = req.params;

        const result = await db.query(`
            DELETE FROM trip_experiences WHERE id = $1 RETURNING *;
            `, [tripExperienceId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' })
        }

        res.json({ success: true, deleted: result.rows[0] });
    } catch (error) {
        console.error('Error deleting trip experience:', error);
        res.status(500).json({ error: 'Failed to delete experience' });
    }
});

export default router;