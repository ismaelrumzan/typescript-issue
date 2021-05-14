import { VercelRequest, VercelResponse } from '@vercel/node';

export default (_: VercelRequest, res: VercelResponse) => {
  res.status(200).json({
    name: 'Web App API',
    author: 'oktus',
    version: 1
  });
};
