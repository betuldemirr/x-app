import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     const { query } = req.query;

     try {
          const response = await axios.get(
               'https://api.twitter.com/2/tweets/search/recent',
               {
                    params: {
                         query: query || '#Nextjs',
                         'tweet.fields': 'author_id,created_at,text',
                    },
                    headers: {
                         Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
                    },
               }
          );

          console.log('Response data:', response.data);
          res.status(200).json(response.data);
     } catch (error: unknown) {
          if (error instanceof Error) {
               console.error('Error fetching tweets:', error.message);
          } else {
               console.error('Unexpected error:', error);
          }
          res.status(500).json({ error: 'Failed to fetch tweets' });
     }

}
