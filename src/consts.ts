// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'DevStylish';
export const SITE_DESCRIPTION = 'Bienvenid@ a mi web, esta es una página que usaré como blog y portfolio (además de incluir algunas cosas sobre programación u otro post friki)';
export const SITE_AUTHOR = 'Moisés Martín Pérez (DevStylish)';
export const SITE_LANG = 'es';

// Prefija rutas internas con el `base` del build (ej. `/webfolio` en GitHub
// Pages). Sin esto, los href/src absolutos se salen del subpath en prod.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL ?? '/';
	const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
	return `${cleanBase}${path.startsWith('/') ? path : `/${path}`}`;
}
