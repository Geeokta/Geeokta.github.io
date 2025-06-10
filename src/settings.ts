export const profile = {
	fullName: 'Nydia Catalina Reyes Suárez',
	title: 'Research Technologist',
	institute: '',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'nreyessuarez@ogs.it',
	linkedin: 'https://www.linkedin.com/in/catalina-reyes-su%C3%A1rez-56b235242/',
	x: 'https://www.x.com/',
	github: 'https://github.com/Geeokta',
	//gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=i6wrmqgAAAAJ&hl=en',
	ORCID: 'https://orcid.org/0000-0002-3906-471X',
	website: 'https://Geeokta.github.io',
}

export const template = {
	website_url: 'https://Geeokta.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
