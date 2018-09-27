import Bill from './../../models/Bill';

export default async (req, res) => {
    const { id } = req.params;
    try {
        await Bill.findByIdAndRemove(id);
        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ error });
    }
}