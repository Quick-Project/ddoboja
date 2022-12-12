import prisma from './../../../libs/client';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { sender, reciever, title, content, IDE, date } = req.body;
      const letter = await prisma.letter.create({
        data: {
          reciever,
          title,
          content,
          IDE,
          date,
          user: {
            connect: {
              name: sender,
            },
          },
        },
      });
      res.json(letter);
    }
  } catch (e) {
    console.log(e);
  }
};
