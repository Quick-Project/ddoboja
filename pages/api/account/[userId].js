import prisma from '../../../libs/client';

export default async (req, res) => {
  try {
    const { userId } = req.query;
    if (req.method === 'GET') {
      const account = await prisma.account.findMany({
        where: {
          userId: userId,
        },
      });
      res.json(account);
    }
  } catch (e) {
    console.log(e);
  }
};
