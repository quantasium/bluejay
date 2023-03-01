import type { Actions } from './$types';
import { db } from '$lib/db.server';
import rand from 'random-words';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    let data: any = await request.formData();
    let url: string = data.get('url');
    let id: string = `${rand(1)}_${rand(1)}_${rand(1)}`;

    if (url.includes('http://')) throw redirect(302, '/?e=http');
    if (!url.includes('https://')) url = 'https://' + url;

    db.run('INSERT INTO links (id, url) VALUES (?, ?)', [id, url], err => {
      if (err) throw redirect(302, '/?e');
    });

    throw redirect(302, `/?m=${id}`);
  },
} satisfies Actions;
