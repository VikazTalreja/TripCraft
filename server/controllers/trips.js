export const allTrips = (req, res) => {
  console.log(`welcome ${req.user.email}`);
  return res.json({ email: req.user.email, message: "all trips" });
};

export const trip = (req, res) => {
  return res.json({ message: "single trip" });
};
