
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'ContactForm': typeof import("../components/ContactForm.vue")['default']
    'HomeSectionsHeroSection': typeof import("../components/HomeSections/HeroSection.vue")['default']
    'HomeSectionsFeaturedPackages': typeof import("../components/HomeSections/featuredPackages.vue")['default']
    'HomeSectionsGlobalDestinations': typeof import("../components/HomeSections/globalDestinations.vue")['default']
    'HomeSectionsSaudiDestinations': typeof import("../components/HomeSections/saudiDestinations.vue")['default']
    'HomeSectionsSearchSection': typeof import("../components/HomeSections/searchSection.vue")['default']
    'HomeSectionsServicesSection': typeof import("../components/HomeSections/servicesSection.vue")['default']
    'AdminFilters': typeof import("../components/admin/AdminFilters.vue")['default']
    'AdminPageHeader': typeof import("../components/admin/AdminPageHeader.vue")['default']
    'AdminPagination': typeof import("../components/admin/AdminPagination.vue")['default']
    'AdminSEODashboard': typeof import("../components/admin/AdminSEODashboard.vue")['default']
    'AdminSearchInput': typeof import("../components/admin/AdminSearchInput.vue")['default']
    'AdminSelect': typeof import("../components/admin/AdminSelect.vue")['default']
    'AdminStats': typeof import("../components/admin/AdminStats.vue")['default']
    'AdminTable': typeof import("../components/admin/AdminTable.vue")['default']
    'AdminNotificationDropdown': typeof import("../components/admin/NotificationDropdown.vue")['default']
    'ChartsBarChart': typeof import("../components/charts/BarChart.vue")['default']
    'ChartsDoughnutChart': typeof import("../components/charts/DoughnutChart.vue")['default']
    'ChartsLineChart': typeof import("../components/charts/LineChart.vue")['default']
    'ChartsPieChart': typeof import("../components/charts/PieChart.vue")['default']
    'Charts': typeof import("../components/charts/index")['default']
    'CMSAbout': typeof import("../components/cms/CMSAbout.vue")['default']
    'CMSContact': typeof import("../components/cms/CMSContact.vue")['default']
    'CMSFooter': typeof import("../components/cms/CMSFooter.vue")['default']
    'CMSGeneric': typeof import("../components/cms/CMSGeneric.vue")['default']
    'CMSHeading': typeof import("../components/cms/CMSHeading.vue")['default']
    'CMSHero': typeof import("../components/cms/CMSHero.vue")['default']
    'CMSImage': typeof import("../components/cms/CMSImage.vue")['default']
    'CMSNavigation': typeof import("../components/cms/CMSNavigation.vue")['default']
    'CMSParagraph': typeof import("../components/cms/CMSParagraph.vue")['default']
    'CMSRenderer': typeof import("../components/cms/CMSRenderer.vue")['default']
    'CMSServices': typeof import("../components/cms/CMSServices.vue")['default']
    'CMSTestimonials': typeof import("../components/cms/CMSTestimonials.vue")['default']
    'CmsMediaLibrary': typeof import("../components/cms/MediaLibrary.vue")['default']
    'CmsWYSIWYGEditor': typeof import("../components/cms/WYSIWYGEditor.vue")['default']
    'DestinationsDestinationCard': typeof import("../components/destinations/DestinationCard.vue")['default']
    'HomeSearch': typeof import("../components/home/HomeSearch.vue")['default']
    'LayoutAppFooter': typeof import("../components/layout/AppFooter.vue")['default']
    'PackagesPackageCard': typeof import("../components/packages/PackageCard.vue")['default']
    'PackagesPackageDetails': typeof import("../components/packages/PackageDetails.vue")['default']
    'SearchFilterPanel': typeof import("../components/search/FilterPanel.vue")['default']
    'SearchPackageFilterPanel': typeof import("../components/search/PackageFilterPanel.vue")['default']
    'SearchPackageSearchBar': typeof import("../components/search/PackageSearchBar.vue")['default']
    'SearchBar': typeof import("../components/search/SearchBar.vue")['default']
    'UiBlurImage': typeof import("../components/ui/BlurImage.vue")['default']
    'UiCarousel': typeof import("../components/ui/Carousel.vue")['default']
    'UiCloseButton': typeof import("../components/ui/CloseButton.vue")['default']
    'UiFloatingButtons': typeof import("../components/ui/FloatingButtons.vue")['default']
    'UiImageUpload': typeof import("../components/ui/ImageUpload.vue")['default']
    'UiMorphingTypewriter': typeof import("../components/ui/MorphingTypewriter.vue")['default']
    'UiNotification': typeof import("../components/ui/Notification.vue")['default']
    'UiNotificationContainer': typeof import("../components/ui/NotificationContainer.vue")['default']
    'UiNotificationStatus': typeof import("../components/ui/NotificationStatus.vue")['default']
    'UiOfflineNotification': typeof import("../components/ui/OfflineNotification.vue")['default']
    'UiPwaInstallPrompt': typeof import("../components/ui/PwaInstallPrompt.vue")['default']
    'UiPwaUpdatePrompt': typeof import("../components/ui/PwaUpdatePrompt.vue")['default']
    'UiSearchBar': typeof import("../components/ui/SearchBar.vue")['default']
    'UiSlideText': typeof import("../components/ui/SlideText.vue")['default']
    'UiAboutHeroSection': typeof import("../components/ui/about/AboutHeroSection.vue")['default']
    'UiAboutMissionSection': typeof import("../components/ui/about/AboutMissionSection.vue")['default']
    'UiAboutAgencyOverview': typeof import("../components/ui/about/AgencyOverview.vue")['default']
    'UiAboutCoreValuesGrid': typeof import("../components/ui/about/CoreValuesGrid.vue")['default']
    'UiAboutHistoryTimeline': typeof import("../components/ui/about/HistoryTimeline.vue")['default']
    'UiIconsFlightIcon': typeof import("../components/ui/icons/FlightIcon.vue")['default']
    'UiIconsSaudiRyialSymbol': typeof import("../components/ui/icons/SaudiRyialSymbol.vue")['default']
    'UiModalsDestinationContactFormModal': typeof import("../components/ui/modals/DestinationContactFormModal.vue")['default']
    'UiModalsPackageContactFormModal': typeof import("../components/ui/modals/PackageContactFormModal.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyContactForm': LazyComponent<typeof import("../components/ContactForm.vue")['default']>
    'LazyHomeSectionsHeroSection': LazyComponent<typeof import("../components/HomeSections/HeroSection.vue")['default']>
    'LazyHomeSectionsFeaturedPackages': LazyComponent<typeof import("../components/HomeSections/featuredPackages.vue")['default']>
    'LazyHomeSectionsGlobalDestinations': LazyComponent<typeof import("../components/HomeSections/globalDestinations.vue")['default']>
    'LazyHomeSectionsSaudiDestinations': LazyComponent<typeof import("../components/HomeSections/saudiDestinations.vue")['default']>
    'LazyHomeSectionsSearchSection': LazyComponent<typeof import("../components/HomeSections/searchSection.vue")['default']>
    'LazyHomeSectionsServicesSection': LazyComponent<typeof import("../components/HomeSections/servicesSection.vue")['default']>
    'LazyAdminFilters': LazyComponent<typeof import("../components/admin/AdminFilters.vue")['default']>
    'LazyAdminPageHeader': LazyComponent<typeof import("../components/admin/AdminPageHeader.vue")['default']>
    'LazyAdminPagination': LazyComponent<typeof import("../components/admin/AdminPagination.vue")['default']>
    'LazyAdminSEODashboard': LazyComponent<typeof import("../components/admin/AdminSEODashboard.vue")['default']>
    'LazyAdminSearchInput': LazyComponent<typeof import("../components/admin/AdminSearchInput.vue")['default']>
    'LazyAdminSelect': LazyComponent<typeof import("../components/admin/AdminSelect.vue")['default']>
    'LazyAdminStats': LazyComponent<typeof import("../components/admin/AdminStats.vue")['default']>
    'LazyAdminTable': LazyComponent<typeof import("../components/admin/AdminTable.vue")['default']>
    'LazyAdminNotificationDropdown': LazyComponent<typeof import("../components/admin/NotificationDropdown.vue")['default']>
    'LazyChartsBarChart': LazyComponent<typeof import("../components/charts/BarChart.vue")['default']>
    'LazyChartsDoughnutChart': LazyComponent<typeof import("../components/charts/DoughnutChart.vue")['default']>
    'LazyChartsLineChart': LazyComponent<typeof import("../components/charts/LineChart.vue")['default']>
    'LazyChartsPieChart': LazyComponent<typeof import("../components/charts/PieChart.vue")['default']>
    'LazyCharts': LazyComponent<typeof import("../components/charts/index")['default']>
    'LazyCMSAbout': LazyComponent<typeof import("../components/cms/CMSAbout.vue")['default']>
    'LazyCMSContact': LazyComponent<typeof import("../components/cms/CMSContact.vue")['default']>
    'LazyCMSFooter': LazyComponent<typeof import("../components/cms/CMSFooter.vue")['default']>
    'LazyCMSGeneric': LazyComponent<typeof import("../components/cms/CMSGeneric.vue")['default']>
    'LazyCMSHeading': LazyComponent<typeof import("../components/cms/CMSHeading.vue")['default']>
    'LazyCMSHero': LazyComponent<typeof import("../components/cms/CMSHero.vue")['default']>
    'LazyCMSImage': LazyComponent<typeof import("../components/cms/CMSImage.vue")['default']>
    'LazyCMSNavigation': LazyComponent<typeof import("../components/cms/CMSNavigation.vue")['default']>
    'LazyCMSParagraph': LazyComponent<typeof import("../components/cms/CMSParagraph.vue")['default']>
    'LazyCMSRenderer': LazyComponent<typeof import("../components/cms/CMSRenderer.vue")['default']>
    'LazyCMSServices': LazyComponent<typeof import("../components/cms/CMSServices.vue")['default']>
    'LazyCMSTestimonials': LazyComponent<typeof import("../components/cms/CMSTestimonials.vue")['default']>
    'LazyCmsMediaLibrary': LazyComponent<typeof import("../components/cms/MediaLibrary.vue")['default']>
    'LazyCmsWYSIWYGEditor': LazyComponent<typeof import("../components/cms/WYSIWYGEditor.vue")['default']>
    'LazyDestinationsDestinationCard': LazyComponent<typeof import("../components/destinations/DestinationCard.vue")['default']>
    'LazyHomeSearch': LazyComponent<typeof import("../components/home/HomeSearch.vue")['default']>
    'LazyLayoutAppFooter': LazyComponent<typeof import("../components/layout/AppFooter.vue")['default']>
    'LazyPackagesPackageCard': LazyComponent<typeof import("../components/packages/PackageCard.vue")['default']>
    'LazyPackagesPackageDetails': LazyComponent<typeof import("../components/packages/PackageDetails.vue")['default']>
    'LazySearchFilterPanel': LazyComponent<typeof import("../components/search/FilterPanel.vue")['default']>
    'LazySearchPackageFilterPanel': LazyComponent<typeof import("../components/search/PackageFilterPanel.vue")['default']>
    'LazySearchPackageSearchBar': LazyComponent<typeof import("../components/search/PackageSearchBar.vue")['default']>
    'LazySearchBar': LazyComponent<typeof import("../components/search/SearchBar.vue")['default']>
    'LazyUiBlurImage': LazyComponent<typeof import("../components/ui/BlurImage.vue")['default']>
    'LazyUiCarousel': LazyComponent<typeof import("../components/ui/Carousel.vue")['default']>
    'LazyUiCloseButton': LazyComponent<typeof import("../components/ui/CloseButton.vue")['default']>
    'LazyUiFloatingButtons': LazyComponent<typeof import("../components/ui/FloatingButtons.vue")['default']>
    'LazyUiImageUpload': LazyComponent<typeof import("../components/ui/ImageUpload.vue")['default']>
    'LazyUiMorphingTypewriter': LazyComponent<typeof import("../components/ui/MorphingTypewriter.vue")['default']>
    'LazyUiNotification': LazyComponent<typeof import("../components/ui/Notification.vue")['default']>
    'LazyUiNotificationContainer': LazyComponent<typeof import("../components/ui/NotificationContainer.vue")['default']>
    'LazyUiNotificationStatus': LazyComponent<typeof import("../components/ui/NotificationStatus.vue")['default']>
    'LazyUiOfflineNotification': LazyComponent<typeof import("../components/ui/OfflineNotification.vue")['default']>
    'LazyUiPwaInstallPrompt': LazyComponent<typeof import("../components/ui/PwaInstallPrompt.vue")['default']>
    'LazyUiPwaUpdatePrompt': LazyComponent<typeof import("../components/ui/PwaUpdatePrompt.vue")['default']>
    'LazyUiSearchBar': LazyComponent<typeof import("../components/ui/SearchBar.vue")['default']>
    'LazyUiSlideText': LazyComponent<typeof import("../components/ui/SlideText.vue")['default']>
    'LazyUiAboutHeroSection': LazyComponent<typeof import("../components/ui/about/AboutHeroSection.vue")['default']>
    'LazyUiAboutMissionSection': LazyComponent<typeof import("../components/ui/about/AboutMissionSection.vue")['default']>
    'LazyUiAboutAgencyOverview': LazyComponent<typeof import("../components/ui/about/AgencyOverview.vue")['default']>
    'LazyUiAboutCoreValuesGrid': LazyComponent<typeof import("../components/ui/about/CoreValuesGrid.vue")['default']>
    'LazyUiAboutHistoryTimeline': LazyComponent<typeof import("../components/ui/about/HistoryTimeline.vue")['default']>
    'LazyUiIconsFlightIcon': LazyComponent<typeof import("../components/ui/icons/FlightIcon.vue")['default']>
    'LazyUiIconsSaudiRyialSymbol': LazyComponent<typeof import("../components/ui/icons/SaudiRyialSymbol.vue")['default']>
    'LazyUiModalsDestinationContactFormModal': LazyComponent<typeof import("../components/ui/modals/DestinationContactFormModal.vue")['default']>
    'LazyUiModalsPackageContactFormModal': LazyComponent<typeof import("../components/ui/modals/PackageContactFormModal.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const HomeSectionsHeroSection: typeof import("../components/HomeSections/HeroSection.vue")['default']
export const HomeSectionsFeaturedPackages: typeof import("../components/HomeSections/featuredPackages.vue")['default']
export const HomeSectionsGlobalDestinations: typeof import("../components/HomeSections/globalDestinations.vue")['default']
export const HomeSectionsSaudiDestinations: typeof import("../components/HomeSections/saudiDestinations.vue")['default']
export const HomeSectionsSearchSection: typeof import("../components/HomeSections/searchSection.vue")['default']
export const HomeSectionsServicesSection: typeof import("../components/HomeSections/servicesSection.vue")['default']
export const AdminFilters: typeof import("../components/admin/AdminFilters.vue")['default']
export const AdminPageHeader: typeof import("../components/admin/AdminPageHeader.vue")['default']
export const AdminPagination: typeof import("../components/admin/AdminPagination.vue")['default']
export const AdminSEODashboard: typeof import("../components/admin/AdminSEODashboard.vue")['default']
export const AdminSearchInput: typeof import("../components/admin/AdminSearchInput.vue")['default']
export const AdminSelect: typeof import("../components/admin/AdminSelect.vue")['default']
export const AdminStats: typeof import("../components/admin/AdminStats.vue")['default']
export const AdminTable: typeof import("../components/admin/AdminTable.vue")['default']
export const AdminNotificationDropdown: typeof import("../components/admin/NotificationDropdown.vue")['default']
export const ChartsBarChart: typeof import("../components/charts/BarChart.vue")['default']
export const ChartsDoughnutChart: typeof import("../components/charts/DoughnutChart.vue")['default']
export const ChartsLineChart: typeof import("../components/charts/LineChart.vue")['default']
export const ChartsPieChart: typeof import("../components/charts/PieChart.vue")['default']
export const Charts: typeof import("../components/charts/index")['default']
export const CMSAbout: typeof import("../components/cms/CMSAbout.vue")['default']
export const CMSContact: typeof import("../components/cms/CMSContact.vue")['default']
export const CMSFooter: typeof import("../components/cms/CMSFooter.vue")['default']
export const CMSGeneric: typeof import("../components/cms/CMSGeneric.vue")['default']
export const CMSHeading: typeof import("../components/cms/CMSHeading.vue")['default']
export const CMSHero: typeof import("../components/cms/CMSHero.vue")['default']
export const CMSImage: typeof import("../components/cms/CMSImage.vue")['default']
export const CMSNavigation: typeof import("../components/cms/CMSNavigation.vue")['default']
export const CMSParagraph: typeof import("../components/cms/CMSParagraph.vue")['default']
export const CMSRenderer: typeof import("../components/cms/CMSRenderer.vue")['default']
export const CMSServices: typeof import("../components/cms/CMSServices.vue")['default']
export const CMSTestimonials: typeof import("../components/cms/CMSTestimonials.vue")['default']
export const CmsMediaLibrary: typeof import("../components/cms/MediaLibrary.vue")['default']
export const CmsWYSIWYGEditor: typeof import("../components/cms/WYSIWYGEditor.vue")['default']
export const DestinationsDestinationCard: typeof import("../components/destinations/DestinationCard.vue")['default']
export const HomeSearch: typeof import("../components/home/HomeSearch.vue")['default']
export const LayoutAppFooter: typeof import("../components/layout/AppFooter.vue")['default']
export const PackagesPackageCard: typeof import("../components/packages/PackageCard.vue")['default']
export const PackagesPackageDetails: typeof import("../components/packages/PackageDetails.vue")['default']
export const SearchFilterPanel: typeof import("../components/search/FilterPanel.vue")['default']
export const SearchPackageFilterPanel: typeof import("../components/search/PackageFilterPanel.vue")['default']
export const SearchPackageSearchBar: typeof import("../components/search/PackageSearchBar.vue")['default']
export const SearchBar: typeof import("../components/search/SearchBar.vue")['default']
export const UiBlurImage: typeof import("../components/ui/BlurImage.vue")['default']
export const UiCarousel: typeof import("../components/ui/Carousel.vue")['default']
export const UiCloseButton: typeof import("../components/ui/CloseButton.vue")['default']
export const UiFloatingButtons: typeof import("../components/ui/FloatingButtons.vue")['default']
export const UiImageUpload: typeof import("../components/ui/ImageUpload.vue")['default']
export const UiMorphingTypewriter: typeof import("../components/ui/MorphingTypewriter.vue")['default']
export const UiNotification: typeof import("../components/ui/Notification.vue")['default']
export const UiNotificationContainer: typeof import("../components/ui/NotificationContainer.vue")['default']
export const UiNotificationStatus: typeof import("../components/ui/NotificationStatus.vue")['default']
export const UiOfflineNotification: typeof import("../components/ui/OfflineNotification.vue")['default']
export const UiPwaInstallPrompt: typeof import("../components/ui/PwaInstallPrompt.vue")['default']
export const UiPwaUpdatePrompt: typeof import("../components/ui/PwaUpdatePrompt.vue")['default']
export const UiSearchBar: typeof import("../components/ui/SearchBar.vue")['default']
export const UiSlideText: typeof import("../components/ui/SlideText.vue")['default']
export const UiAboutHeroSection: typeof import("../components/ui/about/AboutHeroSection.vue")['default']
export const UiAboutMissionSection: typeof import("../components/ui/about/AboutMissionSection.vue")['default']
export const UiAboutAgencyOverview: typeof import("../components/ui/about/AgencyOverview.vue")['default']
export const UiAboutCoreValuesGrid: typeof import("../components/ui/about/CoreValuesGrid.vue")['default']
export const UiAboutHistoryTimeline: typeof import("../components/ui/about/HistoryTimeline.vue")['default']
export const UiIconsFlightIcon: typeof import("../components/ui/icons/FlightIcon.vue")['default']
export const UiIconsSaudiRyialSymbol: typeof import("../components/ui/icons/SaudiRyialSymbol.vue")['default']
export const UiModalsDestinationContactFormModal: typeof import("../components/ui/modals/DestinationContactFormModal.vue")['default']
export const UiModalsPackageContactFormModal: typeof import("../components/ui/modals/PackageContactFormModal.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/ContactForm.vue")['default']>
export const LazyHomeSectionsHeroSection: LazyComponent<typeof import("../components/HomeSections/HeroSection.vue")['default']>
export const LazyHomeSectionsFeaturedPackages: LazyComponent<typeof import("../components/HomeSections/featuredPackages.vue")['default']>
export const LazyHomeSectionsGlobalDestinations: LazyComponent<typeof import("../components/HomeSections/globalDestinations.vue")['default']>
export const LazyHomeSectionsSaudiDestinations: LazyComponent<typeof import("../components/HomeSections/saudiDestinations.vue")['default']>
export const LazyHomeSectionsSearchSection: LazyComponent<typeof import("../components/HomeSections/searchSection.vue")['default']>
export const LazyHomeSectionsServicesSection: LazyComponent<typeof import("../components/HomeSections/servicesSection.vue")['default']>
export const LazyAdminFilters: LazyComponent<typeof import("../components/admin/AdminFilters.vue")['default']>
export const LazyAdminPageHeader: LazyComponent<typeof import("../components/admin/AdminPageHeader.vue")['default']>
export const LazyAdminPagination: LazyComponent<typeof import("../components/admin/AdminPagination.vue")['default']>
export const LazyAdminSEODashboard: LazyComponent<typeof import("../components/admin/AdminSEODashboard.vue")['default']>
export const LazyAdminSearchInput: LazyComponent<typeof import("../components/admin/AdminSearchInput.vue")['default']>
export const LazyAdminSelect: LazyComponent<typeof import("../components/admin/AdminSelect.vue")['default']>
export const LazyAdminStats: LazyComponent<typeof import("../components/admin/AdminStats.vue")['default']>
export const LazyAdminTable: LazyComponent<typeof import("../components/admin/AdminTable.vue")['default']>
export const LazyAdminNotificationDropdown: LazyComponent<typeof import("../components/admin/NotificationDropdown.vue")['default']>
export const LazyChartsBarChart: LazyComponent<typeof import("../components/charts/BarChart.vue")['default']>
export const LazyChartsDoughnutChart: LazyComponent<typeof import("../components/charts/DoughnutChart.vue")['default']>
export const LazyChartsLineChart: LazyComponent<typeof import("../components/charts/LineChart.vue")['default']>
export const LazyChartsPieChart: LazyComponent<typeof import("../components/charts/PieChart.vue")['default']>
export const LazyCharts: LazyComponent<typeof import("../components/charts/index")['default']>
export const LazyCMSAbout: LazyComponent<typeof import("../components/cms/CMSAbout.vue")['default']>
export const LazyCMSContact: LazyComponent<typeof import("../components/cms/CMSContact.vue")['default']>
export const LazyCMSFooter: LazyComponent<typeof import("../components/cms/CMSFooter.vue")['default']>
export const LazyCMSGeneric: LazyComponent<typeof import("../components/cms/CMSGeneric.vue")['default']>
export const LazyCMSHeading: LazyComponent<typeof import("../components/cms/CMSHeading.vue")['default']>
export const LazyCMSHero: LazyComponent<typeof import("../components/cms/CMSHero.vue")['default']>
export const LazyCMSImage: LazyComponent<typeof import("../components/cms/CMSImage.vue")['default']>
export const LazyCMSNavigation: LazyComponent<typeof import("../components/cms/CMSNavigation.vue")['default']>
export const LazyCMSParagraph: LazyComponent<typeof import("../components/cms/CMSParagraph.vue")['default']>
export const LazyCMSRenderer: LazyComponent<typeof import("../components/cms/CMSRenderer.vue")['default']>
export const LazyCMSServices: LazyComponent<typeof import("../components/cms/CMSServices.vue")['default']>
export const LazyCMSTestimonials: LazyComponent<typeof import("../components/cms/CMSTestimonials.vue")['default']>
export const LazyCmsMediaLibrary: LazyComponent<typeof import("../components/cms/MediaLibrary.vue")['default']>
export const LazyCmsWYSIWYGEditor: LazyComponent<typeof import("../components/cms/WYSIWYGEditor.vue")['default']>
export const LazyDestinationsDestinationCard: LazyComponent<typeof import("../components/destinations/DestinationCard.vue")['default']>
export const LazyHomeSearch: LazyComponent<typeof import("../components/home/HomeSearch.vue")['default']>
export const LazyLayoutAppFooter: LazyComponent<typeof import("../components/layout/AppFooter.vue")['default']>
export const LazyPackagesPackageCard: LazyComponent<typeof import("../components/packages/PackageCard.vue")['default']>
export const LazyPackagesPackageDetails: LazyComponent<typeof import("../components/packages/PackageDetails.vue")['default']>
export const LazySearchFilterPanel: LazyComponent<typeof import("../components/search/FilterPanel.vue")['default']>
export const LazySearchPackageFilterPanel: LazyComponent<typeof import("../components/search/PackageFilterPanel.vue")['default']>
export const LazySearchPackageSearchBar: LazyComponent<typeof import("../components/search/PackageSearchBar.vue")['default']>
export const LazySearchBar: LazyComponent<typeof import("../components/search/SearchBar.vue")['default']>
export const LazyUiBlurImage: LazyComponent<typeof import("../components/ui/BlurImage.vue")['default']>
export const LazyUiCarousel: LazyComponent<typeof import("../components/ui/Carousel.vue")['default']>
export const LazyUiCloseButton: LazyComponent<typeof import("../components/ui/CloseButton.vue")['default']>
export const LazyUiFloatingButtons: LazyComponent<typeof import("../components/ui/FloatingButtons.vue")['default']>
export const LazyUiImageUpload: LazyComponent<typeof import("../components/ui/ImageUpload.vue")['default']>
export const LazyUiMorphingTypewriter: LazyComponent<typeof import("../components/ui/MorphingTypewriter.vue")['default']>
export const LazyUiNotification: LazyComponent<typeof import("../components/ui/Notification.vue")['default']>
export const LazyUiNotificationContainer: LazyComponent<typeof import("../components/ui/NotificationContainer.vue")['default']>
export const LazyUiNotificationStatus: LazyComponent<typeof import("../components/ui/NotificationStatus.vue")['default']>
export const LazyUiOfflineNotification: LazyComponent<typeof import("../components/ui/OfflineNotification.vue")['default']>
export const LazyUiPwaInstallPrompt: LazyComponent<typeof import("../components/ui/PwaInstallPrompt.vue")['default']>
export const LazyUiPwaUpdatePrompt: LazyComponent<typeof import("../components/ui/PwaUpdatePrompt.vue")['default']>
export const LazyUiSearchBar: LazyComponent<typeof import("../components/ui/SearchBar.vue")['default']>
export const LazyUiSlideText: LazyComponent<typeof import("../components/ui/SlideText.vue")['default']>
export const LazyUiAboutHeroSection: LazyComponent<typeof import("../components/ui/about/AboutHeroSection.vue")['default']>
export const LazyUiAboutMissionSection: LazyComponent<typeof import("../components/ui/about/AboutMissionSection.vue")['default']>
export const LazyUiAboutAgencyOverview: LazyComponent<typeof import("../components/ui/about/AgencyOverview.vue")['default']>
export const LazyUiAboutCoreValuesGrid: LazyComponent<typeof import("../components/ui/about/CoreValuesGrid.vue")['default']>
export const LazyUiAboutHistoryTimeline: LazyComponent<typeof import("../components/ui/about/HistoryTimeline.vue")['default']>
export const LazyUiIconsFlightIcon: LazyComponent<typeof import("../components/ui/icons/FlightIcon.vue")['default']>
export const LazyUiIconsSaudiRyialSymbol: LazyComponent<typeof import("../components/ui/icons/SaudiRyialSymbol.vue")['default']>
export const LazyUiModalsDestinationContactFormModal: LazyComponent<typeof import("../components/ui/modals/DestinationContactFormModal.vue")['default']>
export const LazyUiModalsPackageContactFormModal: LazyComponent<typeof import("../components/ui/modals/PackageContactFormModal.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
