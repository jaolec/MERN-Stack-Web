const express = require("express");
const router = express.Router();
const Lease = require("../models/Lease");

router.get("/", async (req, res) => {
  try {
    const leases = await Lease.find()
      .populate("tenantId", "name email")
      .populate("propertyId", "address unitNumber");
    res.json(leases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lease = await Lease.findById(req.params.id)
      .populate("tenantId", "name email")
      .populate("propertyId", "address unitNumber");
    if (!lease) return res.status(404).json({ message: "Lease not found" });
    res.json(lease);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const lease = new Lease(req.body);
  try {
    const newLease = await lease.save();
    res.status(201).json(newLease);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const lease = await Lease.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lease) return res.status(404).json({ message: "Lease not found" });
    res.json(lease);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const lease = await Lease.findByIdAndDelete(req.params.id);
    if (!lease) return res.status(404).json({ message: "Lease not found" });
    res.json({ message: "Lease deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
