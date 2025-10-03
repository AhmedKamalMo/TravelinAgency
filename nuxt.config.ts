// https://nuxt.com/docs/api/configuration/nuxt-config
const productionURL = 'https://worldtripagency.com'
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  
  devServer: {
    port: 3000,
    host: 'localhost'
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/image'],


  

  runtimeConfig: {
    // MySQL Database configuration
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 3306,
    dbUser: process.env.DB_USER || 'travel',
    dbPassword: process.env.DB_PASSWORD || 'support@Passord123',
    dbName: process.env.DB_NAME || 'travel',
    
    // JWT configuration
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-here',
    
    // Twilio configuration for WhatsApp notifications
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || '',
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || '',
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '',
    salesManagerPhone: process.env.SALES_MANAGER_PHONE || '',
    
    public: {
      siteUrl: process.env.PUBLIC_SITE_URL || (process.env.NODE_ENV === 'production'
        ? productionURL
        : 'http://localhost:3000'),
      
      // Public site URL for links in notifications
      publicSiteUrl: process.env.PUBLIC_SITE_URL || 'https://worldtripagency.com'
    }
  },

  // Security configuration
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'production' ? 'require-corp' : false,
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:', 'https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://api.iconify.design'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'img-src': ["'self'", 'data:', 'https:', 'https://images.unsplash.com', 'https://images.pexels.com'],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://api.iconify.design'],
        'script-src': ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'", 'https://img1.wsimg.com', 'https://static.cloudflareinsights.com'],
        'connect-src': ["'self'", 'https:', 'https://api.iconify.design', 'https://img1.wsimg.com', 'https://api.iconify.design'],
        'frame-src': ["'self'"],
        'upgrade-insecure-requests': process.env.NODE_ENV === 'production' ? [] : false
      }
    }
  },

  image: {
    provider: 'ipx',
    dir: 'public',
    domains: ['images.unsplash.com', 'images.pexels.com'],
    format: ['jpg', 'jpeg', 'png', 'webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    quality: 80,
    densities: [1, 2],
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'ar-SA',
    locales: [
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English',
        dir: 'ltr'
      },
      {
        code: 'ar-SA',
        language: 'ar-SA',
        name: 'العربية',
        dir: 'rtl'
      }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    trailingSlash: true,
    differentDomains: false,
    lazy: true
  },
  // Configure sitemap for multiple languages
  sitemap: {
    urls: async () => {
      // Your sitemap URLs generation logic here
      return []
    },
    sitemapI18n: {
      locales: ['en-US', 'ar-SA'],
      routesNameSeparator: '___'
    }
  },

  // Schema.org configuration for multiple languages
  schemaOrg: {
    siteUrl: process.env.NODE_ENV === 'production'
      ? productionURL
      : 'http://localhost:3000'
  },

  css: [
    '~/assets/css/transitions.css',
    '~/assets/css/form.css',
    '~/assets/css/direction.css',
    '~/assets/css/tooltip.css'
  ],

  plugins: [
    // AOS plugin removed as it's now handled by the nuxt-aos module
    '~/plugins/i18n.client.ts',
    '~/plugins/language-direction.ts',
    '~/plugins/initial-direction.server.ts'
  ],

  vite: {
    build: {
      // Optimize for memory usage
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            utils: ['@vueuse/core'],
            ui: ['@nuxt/icon', 'nuxt-aos']
          }
        }
      }
    }
  },

  nitro: {
    preset: 'node-server',
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    minify: true,
    // Optimize for memory usage
    experimental: {
      wasm: false
    },
    // Improve static asset handling
    publicAssets: [
      {
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365, // Cache for 1 year
        baseURL: '/'
      }
    ],
    routeRules: {
      '/images/**': { static: true },
      '/icons/**': { static: true },
      // Disable caching for API routes
      '/api/**': { 
        headers: { 
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    },
    // Ensure proper module resolution
    esbuild: {
      options: {
        target: 'es2020'
      }
    }
  },

  experimental: {
    viewTransition: true
  },

  app: {
    head: {
      title: 'World Trip Agency',
      htmlAttrs: {
        lang: 'ar-SA',
        dir: 'rtl'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Your trusted travel partner for unforgettable experiences'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  build: {
    transpile: []
  },

  vite: {
    build: {
      cssMinify: true,
      minify: true
    },
    css: {
      devSourcemap: false
    }
  },
  compatibilityDate: '2025-02-07'
})