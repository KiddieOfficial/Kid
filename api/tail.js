const store = require("../../lib/donationStore");

export default function handler(req, res) {
  const universeId = req.query.universeId;
  const after = req.query.after || "0";

  const list = store.getAfter(universeId, after);

  res.json(list);
}
