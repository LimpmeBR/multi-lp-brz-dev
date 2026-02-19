// ============================================================
// Multi LP BRZ Dev — Barrel Export
// ============================================================

// ---- Core Types ----
export type {
  LPContent, LPRecord, LPStatus, LPId,
  HeroSection, BenefitsSection, HowItWorksSection, PlansSection,
  TestimonialsSection, KpisSection, AboutSection, ContactSection,
  BeforeAfterSection, ProcessSection, ServicesSection, VideoSection,
  VideoCarouselSection, WhyChooseSection, CtaFinalSection, FaqSection,
  FormSection, ForWhomSection, FooterSection, SpeakersSection, SponsorsSection,
  DesignSettings, SEOSettings, TrackingSettings,
  ConversionSettings, CountdownSettings, ExitIntentSettings, SocialProofSettings,
  GlobalMenuSettings, FloatingWhatsappSettings, SectionFooterCTA,
  FormField, FormFieldType, FormSuccessAction,
} from './lib/cms-v2/cms-types';

// ---- Template (Gabarito Universal) ----
export { DEFAULT_LP_TEMPLATE, getNewLPContent } from './lib/cms-v2/lp-template';

// ---- API ----
export {
  fetchAllLPs, fetchLPByRef,
  createLP, deleteLP, duplicateLP,
  saveContent, saveLP, updateLPStatus, updateLPSettings,
  fetchGlobalTrackingV2, saveGlobalTrackingV2,
} from './lib/cms-v2/cms-api';

// ---- CMS Provider ----
export { CMSProviderV2, useCMSV2 } from './lib/cms-v2/CMSProvider';

// ---- Utilities ----
export { renderRichText } from './lib/cms-v2/rich-text';
export { applyUTMv2, applyCoupon } from './lib/cms-v2/utm-v2';

// ---- Landing Page Renderer ----
export { default as LandingPageV2 } from './pages/LandingPageV2';

// ---- Admin Pages ----
export { default as LandingPagesV2 } from './pages/admin/LandingPagesV2';
export { default as LPEditorV2 } from './pages/admin/landpage/LPEditorV2';
