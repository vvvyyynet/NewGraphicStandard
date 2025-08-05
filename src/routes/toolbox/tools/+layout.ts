export const prerender = true;

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('/data/tools-list.json');
    const tools = await res.json(); 
    return {tools};
}