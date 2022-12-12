import prisma from './../../../libs/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'GET') {
    const feuser = await prisma.FEUser.findMany({});
    res.json(feuser);
  }
};
