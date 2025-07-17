import express from "express";
const router = express.Router();

import {
  getReviewsByExperienceId,
  createReview,
} from "../db/queries/reviews.js";

// GET reviews for an experience
router.get("/:experienceId", async (req, res) => {
  try {
    const reviews = await getReviewsByExperienceId(req.params.experienceId);
    res.send(reviews);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const review = await createReview(req.body);
    res.status(201).send(review);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
