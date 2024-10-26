/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	// Fetch the person with ID 32
	const person = await directus.request(readItem('person', 32, {
		fields: ['name', 'surname'], 
	}));

	return {
		person,
	};
}