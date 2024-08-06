/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site, } = require("../../models");

/* ROUTES */

/*get all countries*/
//works
router.get("/countries", async (req, res) => {
  try {
    const countryData = await Country.findAll();
    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*get country with associated Provinces*/
//works
router.get('/countries/:id', async (req,res) => {
  try {
    const countryData = await Country.findByPk(req.params.id,
      {
      include: [{model:Province}
      ]
    }
  );
    res.status(200).json(countryData);
} catch(err) {
  res.status(500).json(err)
}
}); 

/*Get provinces with associated towns */
//works
router.get('/provinces/:id', async(req, res) => {
  try {
    const ProvinceData = await Province.findByPk(req.params.id, {
      include: [{model:Town}]
    });
    res.status(200).json(ProvinceData);
  } catch(err){
    res.status(500).json(err);
  }
});

/*Get all towns available */
//works
router.get('/towns', async(req,res)=> {
  try {
    const townsData = await Town.findAll();
    res.status(200).json(townsData);
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
