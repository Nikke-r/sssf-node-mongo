const router = require('express').Router();
const cat = require('../models/catModel');

router.route('/')
  .post(async (req, res) => {
    try {
      const body = req.body;

      const newCat = await cat.create(body);

      res.json({ cat: newCat });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .get(async (req, res) => {
    try {
      let cats = {};

      const { weight, age, gender } = req.query;

      if (weight) {
        const catsByWeight = await cat.find({}).where('weight').gt(weight);
        cats = { ...cats, ...catsByWeight };
      }

      if (age) {
        const catsByAge = await cat.find({}).where('age').gt(age);
        cats = { ...cats, ...catsByAge };
      }

      if (gender) {
        const catsByGender = await cat.find({ gender });
        cats = { ...cats, ...catsByGender };
      }

      if (!age && !gender && !weight) cats = await cat.find({});

      res.json(cats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;