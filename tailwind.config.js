module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
	darkMode: ["class", "class"],
	theme: {
		extend: {
			colors: {
				primary: {
					background: 'var(--primary-background)',
					foreground: 'hsl(var(--primary-foreground))',
					dark: 'var(--primary-dark)',
					DEFAULT: 'hsl(var(--primary))'
				},
				secondary: {
					background: 'var(--secondary-background)',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'var(--secondary-light)',
					DEFAULT: 'hsl(var(--secondary))'
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
					accent: 'var(--text-accent)',
					light: 'var(--text-light)'
				},
				bg: {
					main: 'var(--bg-main)',
					card: 'var(--bg-card)',
					light: 'var(--bg-light)',
					lighter: 'var(--bg-lighter)',
					lightest: 'var(--bg-lightest)'
				},
				header: {
					text: 'var(--header-text)'
				},
				footer: {
					background: 'var(--footer-bg)',
					text: 'var(--footer-text)',
					textLight: 'var(--footer-text-light)',
					textWhite: 'var(--footer-text-white)'
				},
				button: {
					text: 'var(--button-text)'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				outfit: [
					'Outfit',
					'sans-serif'
				],
				jakarta: [
					'Plus Jakarta Display',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};