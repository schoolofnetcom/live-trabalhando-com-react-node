import Bill from './../../models/Bill';

export default async (req, res) => {
    try {
        const result = await Bill.find({});
        return res.status(200).json({ bills: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}