// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Michael',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '55083ee42137c9f010e40cfab328d7ef', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-38.149918',
	defaultLongitude: '144.361725',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '23:59',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/mich-murphy',
		},
		{
			id: '2',
			name: 'YNAB',
			icon: 'wallet',
			link: 'https://app.youneedabudget.com/',
		},
		{
			id: '3',
			name: 'Tailscale',
			icon: 'network',
			link: 'https://login.tailscale.com/admin/machines',
		},
		{
			id: '4',
			name: 'Blog',
			icon: 'laptop',
			link: 'https://micha.elmurphy.com',
		},
		{
			id: '5',
			name: 'Nix Search',
			icon: 'package-search',
			link: 'https://search.nixos.org/packages',
		},
		{
			id: '6',
			name: 'Proxmox',
			icon: 'server',
			link: 'https://alpha.zonkey-goblin.ts.net:8006/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'book-open',
			id: '1',
			links: [
				{
					name: 'Nix Manual',
					link: 'https://nixos.org/manual/nix/unstable/introduction.html',
				},
				{
					name: 'NixOS Manual',
					link: 'https://nixos.org/manual/nixos/stable/index.html#nixos-manual',
				},
				{
					name: 'Home Manager',
					link: 'https://nix-community.github.io/home-manager/options.html',
				},
				{
					name: 'Nix Darwin',
					link: 'https://daiderd.com/nix-darwin/manual/index.html#sec-options',
				},
			],
		},
		{
			icon: 'newspaper',
			id: '2',
			links: [
				{
					name: 'ABC News',
					link: 'https://www.abc.net.au/news/',
				},
				{
					name: 'Guardian',
					link: 'https://www.theguardian.com/au',
				},
				{
					name: 'The Saturday Paper',
					link: 'https://www.thesaturdaypaper.com.au/',
				},
				{
					name: 'The Age',
					link: 'https://www.theage.com.au/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
