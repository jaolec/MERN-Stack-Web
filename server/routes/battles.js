const express = require("express");
const router = express.Router();
const Battle = require("../models/Battle");

router.get("/", async (req, res) => {
  try {
    const battles = await Battle.find()
      .populate("tenantId", "name email")
      .populate("propertyId", "address unitNumber")
      .populate("adminId", "name email");
    res.json(battles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const battle = await Battle.findById(req.params.id)
      .populate("tenantId", "name email")
      .populate("propertyId", "address unitNumber")
      .populate("adminId", "name email");
    if (!battle) return res.status(404).json({ message: "Battle not found" });
    res.json(battle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const battle = new Battle(req.body);
  try {
    const newBattle = await battle.save();
    res.status(201).json(newBattle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const battle = await Battle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!battle) return res.status(404).json({ message: "Battle not found" });
    res.json(battle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const battle = await Battle.findByIdAndDelete(req.params.id);
    if (!battle) return res.status(404).json({ message: "Battle not found" });
    res.json({ message: "Battle deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
