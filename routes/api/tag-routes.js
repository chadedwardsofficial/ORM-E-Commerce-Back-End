const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', async (req, res) => {
  try {
   
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag, 
        },
      ],
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const tagData = await Tag.findByPk(req.params.id);

  return res.json(tagData);
});

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body);

  return res.json(tagData);
});

router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(
    {
     tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  return res.json(tagData);
});

router.delete('/:id', async (req, res) => {
  const bookData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(bookData);
});

module.exports = router;
