import { VercelRequest, VercelResponse } from '@vercel/node';

export default (_: VercelRequest, res: VercelResponse) => {
  res.status(200).json({
    name: 'Web App API',
    author: 'oktus',
    versions: [
      {
        version: 1,
        url: 'https://oktus.io/api/v1'
      }
    ]
  });
};
