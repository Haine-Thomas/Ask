const Tag = require('../models/tag');

const tagController = {
  /* récupérer les catégories */
  getAllTags: async (request, response) => {
    try {
      const tags = await Tag.findAll();
      response.json({ tags });
    } catch (error) {
      response.status(500).send(error);
    }
  }
};

module.exports = tagController;
