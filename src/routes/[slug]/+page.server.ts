import { db } from '$lib/db.server';
import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
let url: string;

export const load = (async ({ params }) => {
  db.get('SELECT url FROM links WHERE id = ?', [params.slug], (err, row) => {
    return (url = row.url);
  });
  throw redirect(302, url);
}) satisfies PageServerLoad;
