import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.ENDPOINT!, {
    req,
    accessToken: process.env.TOKEN
  });

  return prismic;
}