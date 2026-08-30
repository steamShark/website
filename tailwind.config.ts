import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: ['"Roboto Flex"', 'system-ui', 'sans-serif'],
    		},
    		fontSize: {
    			'title-1':      ['64px', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }],
    			'header-2':     ['40px', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.15' }],
    			'header-3':     ['24px', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.2' }],
    			'subtitle':     ['24px', { fontWeight: '500', lineHeight: '1.3' }],
    			'body':         ['16px', { fontWeight: '500', lineHeight: '1.4' }],
    			'body-bold':    ['16px', { fontWeight: '700', lineHeight: '1.4' }],
    			'small':        ['14px', { fontWeight: '500', lineHeight: '1.4' }],
    			'pre-title':    ['10px', { fontWeight: '700', letterSpacing: '0.03em', lineHeight: '1' }],
    			'button-label': ['10px', { fontWeight: '700', letterSpacing: '0.03em', lineHeight: '1' }],
    		},
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			steam: {
    				blue: 'hsl(var(--steam-blue))',
    				dark: 'hsl(var(--steam-dark))'
    			},
    			shark: {
    				accent: 'hsl(var(--shark-accent))'
    			},
    			success: {
    				DEFAULT: 'hsl(var(--success))',
    				deep: 'hsl(var(--success-deep))',
    				badge: 'hsl(var(--success-badge))',
    			},
    			error: {
    				DEFAULT: 'hsl(var(--error))',
    				deep: 'hsl(var(--error-deep))',
    				badge: 'hsl(var(--error-badge))',
    			},
    			pending: {
    				DEFAULT: 'hsl(var(--pending))',
    				deep: 'hsl(var(--pending-deep))',
    				badge: 'hsl(var(--pending-badge))',
    			}
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
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			'pulse-glow': {
    				'0%, 100%': {
    					boxShadow: '0 0 20px hsl(224 30% 60% / 0.3)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px hsl(224 30% 60% / 0.6)'
    				}
    			},
    			'shark-swim': {
    				'0%': {
    					transform: 'translateX(-100px) rotate(-5deg)'
    				},
    				'100%': {
    					transform: 'translateX(100px) rotate(5deg)'
    				}
    			},
    			'grid-scroll': {
    				'0%': { backgroundPosition: '0 0' },
    				'100%': { backgroundPosition: '60px 60px' },
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.5s ease-out',
    			float: 'float 3s ease-in-out infinite',
    			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
    			'shark-swim': 'shark-swim 4s ease-in-out infinite alternate',
    			'grid-scroll': 'grid-scroll 6s linear infinite',
    		}
    	}
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
