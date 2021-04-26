const express = require("express");
const User = require("./view_model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const rows = await User.getAll();
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const rows = await User.post(req.body);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

router.post("/type", async (req,res,next)=>{
  try{
    const rows = await User.findBy(req.body)
    res.status(200).json(rows)
  } catch(e){
    next(e)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await User.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const rows = await User.edit(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await User.remove(req.params.id);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
