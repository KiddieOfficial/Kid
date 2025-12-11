import store from "../../../lib/donationStore";

export default function handler(req, res) {
  const { universeId } = req.query;
  const body = req.body || {};

  store.pushDonation({
    universeId,
    donorName: body.donor_name || "Anon",
    amount: body.amount || 0,
    message: body.message || "",
    source: "saweria"
  });

  res.status(200).json({ ok: true });
}
