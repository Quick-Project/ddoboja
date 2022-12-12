import prisma from './../../../libs/client';

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const letter = await prisma.letter.findMany();
      res.json(letter);
    }
  } catch (e) {
    console.log(e);
  }
};
