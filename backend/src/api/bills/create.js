import Bill from './../../models/Bill';

export default async (req, res) => {
    const bill = new Bill(req.body);
    try {
        const result = await bill.save();
        return res.status(201).json({ bill: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}