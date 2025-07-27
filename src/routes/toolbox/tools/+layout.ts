export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('/data/tools-list.json');
    const tools = await res.json(); 
    return {tools};
}