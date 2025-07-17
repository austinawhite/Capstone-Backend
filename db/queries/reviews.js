import db from "../client.js";

export async function getReviewsByExperienceId(experienceId) {
    const { rows } = await db.query(
        `SELECT r.*, u.email
         FROM reviews r
         JOIN users u ON r.user_id = u.id
         WHERE r.experience_id = $1
         ORDER BY r.id DESC;`,
        [experienceId]
    );
    return rows;
}

export async function createReview({ user_id, experience_id, rating, comment }) {
    const { rows } = await db.query(
        `INSERT INTO reviews (user_id, experience_id, rating, comment)
         VALUES ($1, $2, $3, $4)
         RETURNING *;`,
        [user_id, experience_id, rating, comment]
    );
    return rows[0];
}
