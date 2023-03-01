import type { Actions } from './$types';
import { db } from '$lib/db.server';
import { goto } from '$app/navigation';
import rand from 'random-words';

export const actions = {
  default: async ({ request }) => {
    let data: any = await request.formData();
    let url: string = data.get('url');
    let id: string = `${rand(1)}_${rand(1)}_${rand(1)}`;

    if (url.includes('http://')) return goto('/?e=http');
    if (!url.includes('https://')) url = 'https://' + url;

    db.run('INSERT INTO links (id, url) VALUES (?, ?)', [id, url], err => {
      if (err) return console.error(err);
    });
  },
} satisfies Actions;
