import prisma from '../../../libs/client';

export default async (req, res) => {
  try {
    const { id } = req.query;
    if (req.method === 'GET') {
      const alert = await prisma.alert.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      res.json(alert);
    }
  } catch (e) {
    console.log(e);
  }
};
