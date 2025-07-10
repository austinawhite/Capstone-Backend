import db from '../db/db.js';

export async function getReviewsByExperienceId(experienceId) {
        return await db.any(
    `SELECT * FROM reviews WHERE experience_id = $1 ORDER BY created_at DESC`,
    [experienceId]
  );
}

export async function addReview({ experienceId, userId, rating, comment }) {
  return await db.one(
    `INSERT INTO reviews (experience_id, user_id, rating, comment, created_at)
     VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
            [experienceId, userId, rating, comment]
  );
}
