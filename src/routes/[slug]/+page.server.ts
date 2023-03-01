import { db } from '$lib/db.server';
import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const getData = (params: any): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      db.get(
        'SELECT url FROM links WHERE id = ?',
        [params.slug],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row.url);
          }
        }
      );
    });
  };

  await getData(params).then(url => {
    throw redirect(302, url);
  });
}) satisfies PageServerLoad;
