export const profile = {
	fullName: 'Catalina Reyes Suárez',
	title: 'Research Technologist',
	institute: 'National Institute of Oceanography and Applied Geophysics - OGS in Trieste, Italy',
	author_name: 'N.C Reyes-Suarez', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Physical and chemical oceanography', description: '', field: 'Physical oceanography' },
		 { title: 'Marine data management and analysis', description: '', field: 'Marine data management and analysis' },
		//  { title: 'Marine Environmental Monitoring', description: '', field: 'Marine Environmental Monitoring' },
		 { title: 'Data visualization and toolboxes', description: '', field: 'Data visualization and toolboxes' },
		//  { title: 'Oceanographic instrumentation', description: '', field: 'Oceanographic instrumentation' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'nreyessuarez@ogs.it',
	linkedin: 'https://www.linkedin.com/in/catalina-reyes-su%C3%A1rez-56b235242/',
	x: 'https://x.com/GeOkTa/',
	github: 'https://github.com/Geeokta',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=i6wrmqgAAAAJ&hl=en',
	orcid: 'https://orcid.org/0000-0002-3906-471X',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://Geeokta.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'winter', // Select one of the Daisy UI Themes, it select the first one by default
	darkTheme: 'dracula', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
