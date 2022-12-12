import prisma from '../../../../libs/client';

export default async (req, res) => {
  try {
    const { name } = req.query;
    if (req.method === 'GET') {
      const feUser = await prisma.FEUser.findUnique({
        where: {
          name: name,
        },
      });
      res.json(feUser);
    }
  } catch (e) {
    console.log(e);
  }
};
