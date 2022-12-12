import prisma from '../../../libs/client';

export default async (req, res) => {
  try {
    const { reciever } = req.query;
    if (req.method === 'GET') {
      const letter = await prisma.letter.findMany({
        where: {
          reciever: reciever,
        },
      });
      res.json(letter);
    }
  } catch (e) {
    console.log(e);
  }
};
