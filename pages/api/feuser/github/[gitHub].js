import prisma from '../../../../libs/client';

export default async (req, res) => {
  try {
    const { gitHub } = req.query;
    if (req.method === 'GET') {
      const feUser = await prisma.FEUser.findUnique({
        where: {
          gitHub: gitHub,
        },
      });
      res.json(feUser);
    }
  } catch (e) {
    console.log(e);
  }
};
