import { createClient as Gs } from "@supabase/supabase-js";
import { jsx as e, jsxs as a, Fragment as oe } from "react/jsx-runtime";
import * as A from "react";
import Qs, { createContext as Ys, useState as T, useRef as ce, useCallback as j, useEffect as Q, useContext as Js, memo as $ } from "react";
import { useParams as ra, Navigate as bt, Link as Zs, useNavigate as Ks } from "react-router-dom";
import { clsx as er } from "clsx";
import { twMerge as tr } from "tailwind-merge";
import { Home as dt, Leaf as ar, Users as vt, Clock as oa, Shield as na, Sparkles as Ze, PhoneCall as sr, CalendarCheck as rr, Gem as or, Crown as nr, Award as la, Medal as ia, Check as ue, ArrowLeft as ca, ArrowRight as lr, Wrench as ir, Star as ze, CircleX as cr, CircleCheck as dr, Calendar as mr, MapPin as ur, Camera as hr, Play as da, ThumbsUp as gr, ChevronDown as Pe, Music2 as fr, Youtube as pr, Linkedin as Nt, Facebook as xr, Instagram as yt, Minus as br, ChevronUp as Ke, CheckCircle2 as wt, Loader2 as ge, CheckCircle as vr, Send as Nr, Globe as ma, X as De, ChevronRight as Ct, Circle as ua, Monitor as yr, Smartphone as ha, RotateCcw as ga, Activity as wr, Save as fa, LayoutTemplate as Cr, Plus as J, Rocket as kr, FileText as Dr, Eye as pa, Edit as Sr, Copy as mt, Settings as Er, Pencil as xa, Trash2 as Y, AlertCircle as ba, History as Ie, AlertTriangle as Pr, Upload as Tr, GripVertical as pe, ArrowUp as va, ArrowDown as Na, HelpCircle as ya, Paintbrush as qt, MessageCircle as ut, Ticket as _r, Timer as Ar, Palette as Ye, ShieldAlert as Ir, Trophy as kt, Menu as wa, Mic2 as Ca, ListOrdered as Mr, Zap as Lr, MessageSquare as Vr, Search as jr, Target as $r, Compass as zr, CreditCard as Fr, BarChart3 as Rr, Info as qr, Mail as Or, ImageIcon as Wr, Route as Hr, ShoppingBag as Ur, Video as Br, PlayCircle as Xr, Megaphone as Gr, ClipboardList as Qr, LayoutGrid as Ot, RefreshCw as Yr } from "lucide-react";
import Jr from "embla-carousel-react";
import { Slot as Zr } from "@radix-ui/react-slot";
import { cva as et } from "class-variance-authority";
import * as Kr from "@radix-ui/react-aspect-ratio";
import * as Ce from "@radix-ui/react-accordion";
import * as ka from "@radix-ui/react-label";
import * as ht from "@radix-ui/react-checkbox";
import * as X from "@radix-ui/react-select";
import * as H from "@radix-ui/react-dialog";
import * as G from "@radix-ui/react-dropdown-menu";
import { toast as F } from "sonner";
import * as Dt from "@radix-ui/react-collapsible";
import { format as eo } from "date-fns";
import * as we from "@radix-ui/react-scroll-area";
import * as ae from "@radix-ui/react-alert-dialog";
import { useQuery as to, useQueryClient as ao, useMutation as so } from "@tanstack/react-query";
import * as gt from "@radix-ui/react-switch";
import ro from "browser-image-compression";
import * as Me from "@radix-ui/react-slider";
import { useSensors as oo, useSensor as rt, PointerSensor as no, TouchSensor as lo, KeyboardSensor as io, DndContext as co, closestCenter as mo } from "@dnd-kit/core";
import { sortableKeyboardCoordinates as uo, SortableContext as ho, verticalListSortingStrategy as go, arrayMove as fo, useSortable as po } from "@dnd-kit/sortable";
import { CSS as xo } from "@dnd-kit/utilities";
const Z = {
  enabled: !1,
  text: "Quero contratar",
  link: "#plans",
  mobileHidden: !1
}, bo = {
  // ==================== HERO ====================
  hero: {
    enabled: !0,
    title: "",
    subtitle: "",
    ctaPrimary: { text: "Contratar agora", link: "#plans" },
    ctaSecondary: { text: "Saiba mais", link: "#beneficios" },
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== BENEFITS ====================
  benefits: {
    enabled: !0,
    title: "",
    items: [
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" }
    ],
    footerCta: { ...Z }
  },
  // ==================== HOW IT WORKS ====================
  howItWorks: {
    enabled: !0,
    title: "",
    steps: ["", "", ""],
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== BEFORE & AFTER ====================
  beforeAfter: {
    enabled: !1,
    title: "",
    subtitle: "",
    images: [
      { before: "", after: "", caption: "" }
    ],
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== PROCESS ====================
  process: {
    enabled: !0,
    title: "",
    subtitle: "",
    steps: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" }
    ],
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== FOR WHOM ====================
  forWhom: {
    enabled: !1,
    title: "",
    subtitle: "",
    items: ["", "", "", ""],
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== SERVICES ====================
  services: {
    enabled: !0,
    title: "",
    items: [
      { text: "", enabled: !0 },
      { text: "", enabled: !0 },
      { text: "", enabled: !0 },
      { text: "", enabled: !0 },
      { text: "", enabled: !0 }
    ],
    footerCta: { ...Z }
  },
  // ==================== PLANS ====================
  plans: {
    enabled: !0,
    title: "",
    items: [
      {
        id: "bronze",
        name: "Bronze",
        frequency: "",
        price: "",
        originalPrice: "",
        showStrikethrough: !1,
        discount: "",
        supportText: "",
        features: ["", "", ""],
        ctaText: "Contratar",
        link: "",
        recommended: !1
      },
      {
        id: "silver",
        name: "Prata",
        frequency: "",
        price: "",
        originalPrice: "",
        showStrikethrough: !1,
        discount: "",
        supportText: "",
        features: ["", "", ""],
        ctaText: "Contratar",
        link: "",
        recommended: !1
      },
      {
        id: "gold",
        name: "Ouro",
        frequency: "",
        price: "",
        originalPrice: "",
        showStrikethrough: !1,
        discount: "",
        supportText: "",
        features: ["", "", ""],
        ctaText: "Contratar",
        link: "",
        recommended: !0
      },
      {
        id: "diamond",
        name: "Diamante",
        frequency: "",
        price: "",
        originalPrice: "",
        showStrikethrough: !1,
        discount: "",
        supportText: "",
        features: ["", "", ""],
        ctaText: "Contratar",
        link: "",
        recommended: !1
      }
    ],
    footerCta: { ...Z }
  },
  // ==================== VIDEO ====================
  video: {
    enabled: !1,
    title: "",
    subtitle: "",
    url: "",
    footerCta: { ...Z }
  },
  // ==================== WHY CHOOSE ====================
  whyChoose: {
    enabled: !1,
    title: "",
    subtitle: "",
    items: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" }
    ],
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== TESTIMONIALS ====================
  testimonials: {
    enabled: !0,
    title: "",
    items: [
      { image: "", text: "", name: "", city: "", rating: 5 },
      { image: "", text: "", name: "", city: "", rating: 5 },
      { image: "", text: "", name: "", city: "", rating: 5 }
    ],
    footerCta: { ...Z }
  },
  // ==================== VIDEO CAROUSEL ====================
  videoCarousel: {
    enabled: !1,
    title: "",
    items: [
      { title: "", url: "" }
    ],
    footerCta: { ...Z }
  },
  // ==================== KPIS ====================
  kpis: {
    enabled: !0,
    items: [
      { enabled: !0, value: "", label: "", description: "" },
      { enabled: !0, value: "", label: "", description: "" },
      { enabled: !0, value: "", label: "", description: "" }
    ],
    footerCta: { ...Z }
  },
  // ==================== SPEAKERS ====================
  speakers: {
    enabled: !1,
    title: "",
    subtitle: "",
    items: [],
    layout: "grid",
    footerCta: { ...Z }
  },
  // ==================== SPONSORS ====================
  sponsors: {
    enabled: !1,
    title: "",
    subtitle: "",
    tiers: [
      { name: "Diamante", enabled: !0, color: "#B9F2FF", logoHeight: "lg", items: [] },
      { name: "Ouro", enabled: !0, color: "#FFD700", logoHeight: "md", items: [] },
      { name: "Prata", enabled: !0, color: "#C0C0C0", logoHeight: "md", items: [] },
      { name: "Bronze", enabled: !1, color: "#CD7F32", logoHeight: "sm", items: [] },
      { name: "Apoio", enabled: !1, color: "", logoHeight: "sm", items: [] }
    ],
    footerCta: { ...Z }
  },
  // ==================== ABOUT ====================
  about: {
    enabled: !0,
    title: "",
    text: "",
    imageDesktop: "",
    imageMobile: "",
    footerCta: { ...Z }
  },
  // ==================== FAQ ====================
  faq: {
    enabled: !0,
    title: "",
    items: [
      { question: "", answer: "" },
      { question: "", answer: "" },
      { question: "", answer: "" }
    ],
    footerCta: { ...Z }
  },
  // ==================== FORM ====================
  form: {
    enabled: !1,
    title: "",
    subtitle: "",
    ctaButton: "Enviar",
    fields: [
      { id: "nome", type: "text", label: "Nome completo", placeholder: "Seu nome", required: !0, width: "100%" },
      { id: "email", type: "email", label: "E-mail", placeholder: "seu@email.com", required: !0, width: "50%" },
      { id: "whatsapp", type: "whatsapp", label: "WhatsApp", placeholder: "(00) 00000-0000", required: !0, width: "50%" }
    ],
    footerCta: { ...Z },
    successAction: {
      type: "toast",
      redirectUrl: "",
      successTitle: "Enviado com sucesso!",
      successMessage: "Entraremos em contato em breve.",
      successImage: ""
    },
    webhookUrl: ""
  },
  // ==================== CTA FINAL ====================
  ctaFinal: {
    enabled: !0,
    title: "",
    subtitle: "",
    buttonText: "Contratar agora",
    buttonLink: "#plans",
    imageDesktop: "",
    imageMobile: "",
    trustText: ""
  },
  // ==================== CONTACT ====================
  contact: {
    enabled: !0,
    title: "",
    subtitle: "",
    whatsappLink: ""
  },
  // ==================== FOOTER ====================
  footer: {
    enabled: !0,
    logo: "",
    logoDesktop: "",
    logoMobile: "",
    links: [],
    privacy: { text: "Política de Privacidade", url: "", hasLink: !1, enabled: !0 },
    terms: { text: "Termos de Uso", url: "", hasLink: !1, enabled: !0 },
    cnpj: { text: "", enabled: !1 },
    socials: {
      instagram: { url: "", enabled: !1 },
      facebook: { url: "", enabled: !1 },
      linkedin: { url: "", enabled: !1 },
      youtube: { url: "", enabled: !1 },
      tiktok: { url: "", enabled: !1 }
    }
  },
  // ==================== SECTION ORDER ====================
  sectionOrder: [
    "hero",
    "benefits",
    "howItWorks",
    "beforeAfter",
    "process",
    "forWhom",
    "services",
    "plans",
    "video",
    "whyChoose",
    "testimonials",
    "videoCarousel",
    "kpis",
    "speakers",
    "sponsors",
    "about",
    "faq",
    "form",
    "ctaFinal",
    "contact"
  ],
  // ==================== DESIGN (Midnight = default) ====================
  design: {
    preset: "midnight",
    primaryColor: "#6366F1",
    secondaryColor: "#818CF8",
    backgroundColor: "#0F0B1A",
    gradient: { from: "#0F0B1A", to: "#1A1333" },
    glassIntensity: 0.08,
    buttonColor: "#6366F1",
    titleColor: "#FFFFFF",
    borderColor: "#312E81",
    iconColor: "#818CF8",
    starColor: "#FBBF24",
    cardRoundness: "medio",
    verticalSpacing: "medium",
    fontFamily: "Inter",
    textPrimaryColor: "#FFFFFF",
    textSecondaryColor: "#A1A1AA"
  },
  // ==================== SEO (sempre vazio — LP-specific) ====================
  seo: {
    metaTitle: "",
    metaDescription: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: ""
  },
  // ==================== TRACKING (sempre vazio — LP-specific) ====================
  tracking: {
    enabled: !1,
    meta: "",
    ga: "",
    tiktok: "",
    linkedin: "",
    gtm: ""
  },
  // ==================== FLOATING WHATSAPP ====================
  floatingWhatsapp: {
    enabled: !1,
    phoneNumber: "",
    message: "",
    label: "Fale conosco",
    pulseEffect: !0,
    showOnMobile: !0,
    showLabelOnMobile: !1,
    stickyCta: {
      enabled: !1,
      text: "Contratar agora",
      link: "#plans",
      scrollThreshold: 600
    }
  },
  // ==================== CONVERSION ====================
  conversion: {
    couponCode: "",
    countdown: {
      enabled: !1,
      mode: "evergreen",
      evergreenHours: 24,
      roundHourAhead: 2,
      label: "OFERTA EXPIRA EM",
      showInPlans: !0,
      showInCtaFinal: !1,
      expiredText: "Oferta expirada",
      urgencyColor: ""
    },
    exitIntent: {
      enabled: !1,
      title: "",
      text: "",
      ctaText: "Aproveitar oferta",
      ctaLink: "#plans",
      dismissText: "Não, obrigado",
      titleUppercase: !0,
      frequency: "session",
      delaySeconds: 3,
      imageUrl: "",
      imagePosition: "top"
    },
    socialProof: {
      enabled: !1,
      items: [
        { name: "", city: "", plan: "", timeAgo: "há 5 minutos" },
        { name: "", city: "", plan: "", timeAgo: "há 12 minutos" },
        { name: "", city: "", plan: "", timeAgo: "há 23 minutos" }
      ],
      intervalSeconds: 15,
      maxPerVisit: 5,
      position: "bottom-left",
      toastDuration: 4
    }
  },
  // ==================== GLOBAL MENU ====================
  globalMenu: {
    enabled: !1,
    logoUrl: "",
    links: []
  }
}, vo = () => JSON.parse(JSON.stringify(bo)), No = void 0, yo = void 0;
throw new Error(
  "[Multi LP] Faltam variáveis de ambiente: VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY. Configure no .env do projeto."
);
const B = Gs(No, yo, {
  auth: {
    storage: localStorage,
    persistSession: !0,
    autoRefreshToken: !0
  }
}), Da = (t) => ({
  id: t.id,
  lp_key: t.lp_key,
  name: t.name,
  slug: t.slug,
  status: t.status,
  content: t.content,
  created_at: t.created_at ?? "",
  updated_at: t.updated_at ?? ""
}), wo = (t) => ({
  lp_key: t.lp_key,
  name: t.name,
  slug: t.slug,
  status: t.status,
  content: t.content
}), Fe = async (t) => {
  try {
    const { data: r, error: s } = await B.from("bd_cms_lp_v2").select("*").or(`lp_key.eq.${t},slug.eq.${t}`).single();
    return s ? (console.error(`[CMS-V2] Erro ao buscar LP (${t}):`, s), null) : r ? Da(r) : null;
  } catch (r) {
    return console.error("[CMS-V2] Erro crítico no fetch:", r), null;
  }
}, Sa = async () => {
  try {
    const { data: t, error: r } = await B.from("bd_cms_lp_v2").select("*").order("lp_key");
    return r ? (console.error("[CMS-V2] Erro ao listar LPs:", r), []) : (t || []).map(Da);
  } catch (t) {
    return console.error("[CMS-V2] Erro crítico no fetchAll:", t), [];
  }
}, Ea = async (t, r) => {
  try {
    const { error: s } = await B.from("bd_cms_lp_v2").update({
      content: r,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("lp_key", t);
    return s ? (console.error(`[CMS-V2] Erro ao salvar content (${t}):`, s), !1) : !0;
  } catch (s) {
    return console.error("[CMS-V2] Erro crítico no saveContent:", s), !1;
  }
}, Mi = async (t) => {
  try {
    const r = {
      lp_key: t.lp_key,
      name: t.name ?? "",
      slug: t.slug ?? t.lp_key,
      status: t.status ?? "draft",
      content: t.content ?? {}
    }, { error: s } = await B.from("bd_cms_lp_v2").upsert(r, { onConflict: "lp_key" });
    return s ? (console.error(`[CMS-V2] Erro ao salvar LP (${t.lp_key}):`, s), !1) : !0;
  } catch (r) {
    return console.error("[CMS-V2] Erro crítico no save:", r), !1;
  }
}, Co = async (t) => {
  try {
    const { error: r } = await B.from("bd_cms_lp_v2").delete().eq("lp_key", t);
    return r ? (console.error(`[CMS-V2] Erro ao deletar LP (${t}):`, r), !1) : !0;
  } catch (r) {
    return console.error("[CMS-V2] Erro crítico no delete:", r), !1;
  }
}, ko = async (t, r, s, o) => {
  try {
    const n = await Fe(t);
    if (!n)
      return console.error(`[CMS-V2] LP origem não encontrada: ${t}`), !1;
    const { error: d } = await B.from("bd_cms_lp_v2").insert({
      lp_key: r,
      name: s,
      slug: o,
      status: "draft",
      content: n.content
    });
    return d ? (console.error("[CMS-V2] Erro ao duplicar LP:", d), !1) : !0;
  } catch (n) {
    return console.error("[CMS-V2] Erro crítico no duplicate:", n), !1;
  }
}, Do = async (t) => {
  try {
    const r = wo(t), { error: s } = await B.from("bd_cms_lp_v2").insert(r);
    return s ? (console.error("[CMS-V2] Erro ao criar LP:", s), !1) : !0;
  } catch (r) {
    return console.error("[CMS-V2] Erro crítico no create:", r), !1;
  }
}, So = async (t, r) => {
  try {
    const { error: s } = await B.from("bd_cms_lp_v2").update({ status: r, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("lp_key", t);
    return s ? (console.error("[CMS-V2] Erro ao atualizar status:", s), !1) : !0;
  } catch (s) {
    return console.error("[CMS-V2] Erro crítico no updateStatus:", s), !1;
  }
}, Wt = async (t, r) => {
  try {
    const { error: s } = await B.from("bd_cms_lp_v2").update({
      name: r.name,
      slug: r.slug,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("lp_key", t);
    return s ? (console.error("[CMS-V2] Erro ao atualizar settings:", s), !1) : !0;
  } catch (s) {
    return console.error("[CMS-V2] Erro crítico no updateSettings:", s), !1;
  }
}, Ue = "global-v2", St = async () => {
  try {
    const t = await Fe(Ue);
    return t?.content?.tracking ? t.content.tracking : null;
  } catch (t) {
    return console.error("[CMS-V2] Erro ao buscar tracking global:", t), null;
  }
}, Eo = async (t) => {
  try {
    const r = await Fe(Ue);
    if (r) {
      const o = { ...r.content, tracking: t };
      return await Ea(Ue, o);
    }
    const { error: s } = await B.from("bd_cms_lp_v2").insert({
      lp_key: Ue,
      name: "Global V2 (Tracking)",
      slug: "global-v2",
      status: "active",
      content: { tracking: t }
    });
    return s ? (console.error("[CMS-V2] Erro ao criar registro global-v2:", s), !1) : !0;
  } catch (r) {
    return console.error("[CMS-V2] Erro crítico no saveGlobalTracking:", r), !1;
  }
}, Po = 300 * 1e3, To = 3e4, _o = (t) => {
  try {
    const r = localStorage.getItem(`cms_v2_cache_${t}`);
    if (!r) return null;
    const s = JSON.parse(r);
    return !s.timestamp || Date.now() - s.timestamp > Po ? (localStorage.removeItem(`cms_v2_cache_${t}`), null) : s.content;
  } catch {
    return localStorage.removeItem(`cms_v2_cache_${t}`), null;
  }
}, Ao = (t, r) => {
  try {
    const s = { content: r, timestamp: Date.now() };
    localStorage.setItem(`cms_v2_cache_${t}`, JSON.stringify(s));
  } catch {
  }
}, Pa = Ys(void 0), Io = ({ children: t, lpKey: r }) => {
  const [s, o] = T(null), [n, d] = T(!0), [h, f] = T(null), l = ce(0), m = j(async () => {
    l.current = Date.now();
    for (let i = 0; i < 3; i++)
      try {
        const c = await Fe(r);
        if (c?.content) {
          o(c.content), Ao(r, c.content), f(null);
          return;
        }
      } catch {
        if (i < 2) {
          await new Promise((u) => setTimeout(u, Math.pow(2, i) * 1e3));
          continue;
        }
      }
    f("LP não encontrada ou sem conteúdo.");
  }, [r]);
  return Q(() => {
    d(!0);
    const i = _o(r);
    i && o(i), m().finally(() => d(!1));
  }, [r, m]), Q(() => {
    const i = () => {
      document.visibilityState === "visible" && (Date.now() - l.current < To || m());
    };
    return document.addEventListener("visibilitychange", i), () => document.removeEventListener("visibilitychange", i);
  }, [m]), Q(() => {
    if (!s?.design) return;
    const { design: i } = s, c = document.documentElement, u = (S) => {
      if (!S || !S.startsWith("#")) return null;
      let _ = 0, y = 0, v = 0;
      S.length === 4 ? (_ = parseInt(S[1] + S[1], 16), y = parseInt(S[2] + S[2], 16), v = parseInt(S[3] + S[3], 16)) : S.length === 7 && (_ = parseInt(S.slice(1, 3), 16), y = parseInt(S.slice(3, 5), 16), v = parseInt(S.slice(5, 7), 16)), _ /= 255, y /= 255, v /= 255;
      const k = Math.max(_, y, v), E = Math.min(_, y, v);
      let L = 0, V = 0;
      const z = (k + E) / 2;
      if (k !== E) {
        const U = k - E;
        switch (V = z > 0.5 ? U / (2 - k - E) : U / (k + E), k) {
          case _:
            L = ((y - v) / U + (y < v ? 6 : 0)) / 6;
            break;
          case y:
            L = ((v - _) / U + 2) / 6;
            break;
          case v:
            L = ((_ - y) / U + 4) / 6;
            break;
        }
      }
      return `${Math.round(L * 360)} ${Math.round(V * 100)}% ${Math.round(z * 100)}%`;
    }, x = (S, _) => {
      const y = S.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
      if (!y) return S;
      const v = Math.min(100, Math.max(0, parseInt(y[3], 10) + _));
      return `${y[1]} ${y[2]}% ${v}%`;
    }, p = (S, _) => {
      const y = u(_);
      return y && c.style.setProperty(S, y), y;
    };
    i.primaryColor && p("--ds-color-accent", i.primaryColor), i.buttonColor && p("--ds-color-btn", i.buttonColor), i.titleColor && p("--ds-color-title", i.titleColor), i.secondaryColor && p("--ds-color-secondary", i.secondaryColor), i.borderColor && p("--ds-border-color", i.borderColor), i.iconColor && p("--ds-color-icon", i.iconColor), i.starColor && p("--ds-color-star", i.starColor);
    const b = i.backgroundColor ? p("--ds-color-bg", i.backgroundColor) : null;
    b && (c.style.setProperty("--background", b), c.style.setProperty("--ds-color-surface", x(b, 5)), c.style.setProperty("--ds-color-glass", x(b, 3)), c.style.setProperty("--card", x(b, 5)), c.style.setProperty("--muted", x(b, 10)));
    const w = i.textPrimaryColor || i.titleColor;
    if (w) {
      const S = p("--ds-color-text", w);
      S && (c.style.setProperty("--foreground", S), c.style.setProperty("--card-foreground", S));
    }
    if (i.textSecondaryColor) {
      const S = p("--ds-color-text-soft", i.textSecondaryColor);
      S && c.style.setProperty("--muted-foreground", S);
    }
    i.glassIntensity !== void 0 && c.style.setProperty("--ds-glass-opacity", i.glassIntensity.toString());
    const I = {
      leve: "0.5rem",
      medio: "1rem",
      full: "1.5rem"
    };
    if (i.cardRoundness && I[i.cardRoundness] && c.style.setProperty("--ds-radius", I[i.cardRoundness]), b) {
      const S = b.match(/(\d+)\s+(\d+)%\s+(\d+)%/), y = (S ? parseInt(S[3], 10) : 50) > 60, v = S ? S[1] : "0";
      c.style.setProperty("--ds-color-btn-text", y ? "0 0% 100%" : b);
      const k = y ? `${v} 30% 50%` : "0 0% 0%", E = y ? 0.14 : 0.35, L = y ? 0.22 : 0.45;
      c.style.setProperty("--ds-shadow", `0 4px 24px hsl(${k} / ${E})`), c.style.setProperty("--ds-shadow-lg", `0 12px 40px hsl(${k} / ${L})`);
    }
    if (b) {
      const S = b.match(/(\d+)\s+(\d+)%\s+(\d+)%/), _ = S ? parseInt(S[3], 10) : 50;
      c.style.setProperty("--ds-border-opacity", _ > 60 ? "0.5" : "0.14");
    }
    i.fontFamily && (c.style.setProperty("--ds-font-family", i.fontFamily), document.body.style.fontFamily = i.fontFamily);
  }, [s]), /* @__PURE__ */ e(Pa.Provider, { value: { content: s, lpKey: r, isLoading: n, error: h, refresh: m }, children: t });
}, Mo = () => {
  const t = Js(Pa);
  if (!t) throw new Error("useCMSV2 deve ser usado dentro de um CMSProviderV2");
  return t;
};
function xe(t, r) {
  return t ? t.split(`
`).map((o, n) => /* @__PURE__ */ a(Qs.Fragment, { children: [
    n > 0 && /* @__PURE__ */ e("br", {}),
    Lo(o, r)
  ] }, n)) : null;
}
function Lo(t, r) {
  const s = [], o = /(\*\*(.+?)\*\*|\{\{(.+?)\}\})/g;
  let n = 0, d;
  for (; (d = o.exec(t)) !== null; )
    d.index > n && s.push(t.slice(n, d.index)), d[2] ? s.push(/* @__PURE__ */ e("strong", { children: d[2] }, `b-${d.index}`)) : d[3] && s.push(
      /* @__PURE__ */ e(
        "span",
        {
          style: { color: r || "hsl(var(--ds-color-accent))" },
          className: "font-semibold",
          children: d[3]
        },
        `h-${d.index}`
      )
    ), n = o.lastIndex;
  return n < t.length && s.push(t.slice(n)), s;
}
const ke = (t, r, s) => {
  if (!t) return "";
  if (t.startsWith("#") || (t.startsWith("http://") || t.startsWith("https://")) && !t.includes("limpme.com"))
    return t;
  const o = t.includes("?") ? "&" : "?";
  return `${t}${o}utm_lp=${r}`;
}, Re = (t, r) => {
  if (!r || !t || t.startsWith("#") || t.includes("coupon=")) return t;
  const s = t.includes("?") ? "&" : "?";
  return `${t}${s}coupon=${r}`;
};
function Vo(t, r) {
  return !t || t.enabled === !1 ? {
    enabled: !1,
    meta: "",
    ga: "",
    gtm: "",
    tiktok: "",
    linkedin: ""
  } : t.useGlobal === !1 || !r ? {
    enabled: !0,
    meta: t.meta?.trim() || "",
    ga: t.ga?.trim() || "",
    gtm: t.gtm?.trim() || "",
    tiktok: t.tiktok?.trim() || "",
    linkedin: t.linkedin?.trim() || ""
  } : {
    enabled: !0,
    meta: t.meta?.trim() || r.meta?.trim() || "",
    ga: t.ga?.trim() || r.ga?.trim() || "",
    gtm: t.gtm?.trim() || r.gtm?.trim() || "",
    tiktok: t.tiktok?.trim() || r.tiktok?.trim() || "",
    linkedin: t.linkedin?.trim() || r.linkedin?.trim() || ""
  };
}
function C(...t) {
  return tr(er(t));
}
const K = ({ data: t, className: r, lpKey: s, couponCode: o }) => {
  if (!t?.enabled) return null;
  const n = Re(ke(t.link, s), o);
  return /* @__PURE__ */ e(
    "div",
    {
      className: C(
        "w-full flex justify-center py-10 md:py-12 relative z-10",
        t.mobileHidden && "hidden md:flex",
        r
      ),
      children: /* @__PURE__ */ e(
        "a",
        {
          href: n,
          className: `
          group relative inline-flex items-center justify-center
          px-12 py-4 text-lg font-bold transition-all duration-300
          rounded-full shadow-lg
          bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))]
          hover:scale-105 hover:shadow-[0_8px_24px_hsl(var(--ds-color-accent)/0.4)]
          active:scale-95
        `,
          children: t.text
        }
      )
    }
  );
}, jo = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ a("section", { className: "relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 md:px-6 py-16 md:py-24 overflow-hidden", children: [
  t.imageDesktop && /* @__PURE__ */ a(oe, { children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-cover bg-center hidden md:block", style: { backgroundImage: `url(${t.imageDesktop})` } }),
    t.imageMobile && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-cover bg-center md:hidden", style: { backgroundImage: `url(${t.imageMobile})` } }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-b from-[hsl(var(--ds-color-bg))]/40 to-[hsl(var(--ds-color-bg))]/60 backdrop-blur-sm" })
  ] }),
  /* @__PURE__ */ a("div", { className: "max-w-5xl mx-auto text-center relative z-10", children: [
    /* @__PURE__ */ e("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-[1.1] tracking-tight", children: t.title }),
    /* @__PURE__ */ e("p", { className: "text-lg md:text-xl lg:text-2xl mb-10 md:mb-14 text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.subtitle }),
    /* @__PURE__ */ a("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-6 md:mt-10", children: [
      t.ctaPrimary && /* @__PURE__ */ e("a", { href: ke(t.ctaPrimary.link, r), className: "w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:scale-105 hover:shadow-[0_16px_32px_hsl(var(--ds-color-accent)/0.4)] shadow-[0_8px_16px_hsl(var(--ds-color-accent)/0.2)]", children: t.ctaPrimary.text }),
      t.ctaSecondary && /* @__PURE__ */ e("a", { href: ke(t.ctaSecondary.link, r), className: "w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 border-2 border-[hsl(var(--ds-color-accent))] text-[hsl(var(--ds-color-accent))] bg-transparent hover:bg-[hsl(var(--ds-color-accent)/0.1)] hover:scale-105", children: t.ctaSecondary.text })
    ] })
  ] }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }), $o = {
  sm: { container: "w-10 h-10", icon: 18 },
  md: { container: "w-12 h-12", icon: 22 },
  lg: { container: "w-14 h-14 md:w-16 md:h-16", icon: 28 }
}, Et = ({ icon: t, size: r = "md", color: s, className: o }) => {
  const { container: n, icon: d } = $o[r], h = s ? {
    backgroundColor: `${s}22`,
    // 13% opacity
    borderColor: `${s}4D`,
    // 30% opacity
    color: s
  } : void 0;
  return /* @__PURE__ */ e(
    "div",
    {
      className: C(
        n,
        "rounded-full flex items-center justify-center border-2 flex-shrink-0",
        // Design token classes V2 (usadas quando nao tem cor custom)
        !s && "bg-[hsl(var(--ds-color-icon)/0.15)] border-[hsl(var(--ds-color-icon)/0.3)]",
        o
      ),
      style: h,
      children: /* @__PURE__ */ e(
        t,
        {
          size: d,
          className: C(!s && "text-[hsl(var(--ds-color-icon))]"),
          style: s ? { color: s } : void 0
        }
      )
    }
  );
}, Ht = [dt, ar, vt, oa, na, Ze], zo = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: t.items?.map((o, n) => {
    const d = Ht[n % Ht.length];
    return /* @__PURE__ */ a("div", { className: "glass-card p-8 md:p-10 text-center hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ e("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ e(Et, { icon: d }) }),
      o.image && /* @__PURE__ */ e(
        "img",
        {
          loading: "lazy",
          src: o.image,
          alt: o.title,
          className: "w-full h-48 md:h-56 object-cover rounded-[var(--ds-radius)] mb-6"
        }
      ),
      /* @__PURE__ */ e("h3", { className: "text-xl md:text-2xl font-bold mb-4 text-foreground leading-tight", children: o.title }),
      /* @__PURE__ */ e("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: o.description })
    ] }, n);
  }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Ut = [sr, rr, Ze], Fo = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12", children: t.steps?.map((o, n) => {
    const d = Ut[n % Ut.length];
    return /* @__PURE__ */ a("div", { className: "glass-card p-8 md:p-10 text-center hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ e("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-[hsl(var(--ds-color-icon)/0.15)] border-2 border-[hsl(var(--ds-color-icon)/0.3)] flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ e(d, { size: 32, className: "text-[hsl(var(--ds-color-icon))]" }) }),
      /* @__PURE__ */ a("p", { className: "text-base md:text-lg text-foreground leading-relaxed", children: [
        /* @__PURE__ */ e("span", { className: "font-bold text-[hsl(var(--ds-color-icon))]", children: n + 1 }),
        /* @__PURE__ */ e("span", { className: "mx-2 text-muted-foreground", children: "—" }),
        o
      ] })
    ] }, n);
  }) }),
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ e("div", { className: "w-full max-w-5xl mx-auto mt-12 md:mt-20 rounded-[var(--ds-radius)] aspect-video flex items-center justify-center overflow-hidden glass-card", children: /* @__PURE__ */ a("picture", { children: [
    t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
    t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.imageDesktop || t.imageMobile,
        className: "w-full h-full object-cover",
        alt: "Como funciona"
      }
    )
  ] }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Ta = "lp_countdown_", Ro = (t, r) => {
  const s = `${Ta}${t}`, o = localStorage.getItem(s);
  if (o) {
    const d = parseInt(o, 10);
    if (!isNaN(d)) return d;
  }
  const n = Date.now() + r * 60 * 60 * 1e3;
  return localStorage.setItem(s, n.toString()), n;
}, qo = (t, r) => {
  const s = `${Ta}${t}_rh`, o = localStorage.getItem(s);
  if (o) {
    const f = parseInt(o, 10);
    if (!isNaN(f)) return f;
  }
  const n = /* @__PURE__ */ new Date(), d = new Date(n);
  d.setMinutes(0, 0, 0), d.setHours(d.getHours() + r);
  const h = d.getTime();
  return localStorage.setItem(s, h.toString()), h;
}, Oo = (t) => {
  const r = t - Date.now();
  return r <= 0 ? null : {
    days: Math.floor(r / (1e3 * 60 * 60 * 24)),
    hours: Math.floor(r / (1e3 * 60 * 60) % 24),
    minutes: Math.floor(r / (1e3 * 60) % 60),
    seconds: Math.floor(r / 1e3 % 60)
  };
}, Wo = (t) => t.toString().padStart(2, "0"), Pt = $(({ settings: t, lpKey: r }) => {
  const [s, o] = T(null), [n, d] = T(!1), h = j(() => t.mode === "deadline" && t.deadline ? new Date(t.deadline).getTime() : t.mode === "roundHour" ? qo(r, t.roundHourAhead || 2) : Ro(r, t.evergreenHours || 24), [t.mode, t.deadline, t.evergreenHours, t.roundHourAhead, r]);
  if (Q(() => {
    if (!t.enabled) return;
    const p = h(), b = () => {
      const I = Oo(p);
      I ? o(I) : (d(!0), o(null));
    };
    b();
    const w = setInterval(b, 1e3);
    return () => clearInterval(w);
  }, [h, t.enabled]), !t.enabled) return null;
  if (n)
    return t.expiredText ? /* @__PURE__ */ e("div", { className: "w-full text-center py-3", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium", children: t.expiredText }) }) : null;
  if (!s) return null;
  const f = t.urgencyColor || void 0, l = f ? { color: f } : void 0, m = f ? "" : "text-[hsl(var(--ds-color-accent))]", i = f ? { backgroundColor: `${f}20`, borderColor: `${f}55`, boxShadow: `0 0 20px ${f}30, inset 0 1px 0 ${f}15` } : void 0, c = f ? "" : "bg-[hsl(var(--ds-color-accent)/0.12)] border-[hsl(var(--ds-color-accent)/0.35)] shadow-[0_0_20px_hsl(var(--ds-color-accent)/0.15)]", u = f ? { color: f } : void 0, x = f ? "" : "text-[hsl(var(--ds-color-accent))]";
  return /* @__PURE__ */ a("div", { className: "w-full flex flex-col items-center gap-4 py-6", children: [
    t.label && /* @__PURE__ */ e(
      "p",
      {
        className: `text-base md:text-lg font-extrabold uppercase tracking-[0.15em] ${m}`,
        style: l,
        children: t.label
      }
    ),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-3 md:gap-4", children: [
      s.days > 0 && /* @__PURE__ */ a(oe, { children: [
        /* @__PURE__ */ e(Oe, { value: s.days, label: "Dias", boxStyle: i, boxClass: c }),
        /* @__PURE__ */ e("span", { className: `text-3xl md:text-4xl font-black -mt-4 opacity-60 ${x}`, style: u, children: ":" })
      ] }),
      /* @__PURE__ */ e(Oe, { value: s.hours, label: "Horas", boxStyle: i, boxClass: c }),
      /* @__PURE__ */ e("span", { className: `text-3xl md:text-4xl font-black -mt-4 opacity-60 ${x}`, style: u, children: ":" }),
      /* @__PURE__ */ e(Oe, { value: s.minutes, label: "Min", boxStyle: i, boxClass: c }),
      /* @__PURE__ */ e("span", { className: `text-3xl md:text-4xl font-black -mt-4 opacity-60 ${x}`, style: u, children: ":" }),
      /* @__PURE__ */ e(Oe, { value: s.seconds, label: "Seg", boxStyle: i, boxClass: c, isSeconds: !0 })
    ] })
  ] });
});
Pt.displayName = "CountdownTimerV2";
const Oe = ({ value: t, label: r, boxStyle: s, boxClass: o, isSeconds: n }) => /* @__PURE__ */ a("div", { className: "flex flex-col items-center", children: [
  /* @__PURE__ */ e(
    "span",
    {
      className: `text-3xl md:text-5xl font-black text-foreground tabular-nums rounded-xl px-4 md:px-5 py-2.5 md:py-3 min-w-[3.5rem] md:min-w-[4.5rem] text-center border-2 ${o} ${n ? "animate-[pulse_1s_ease-in-out_infinite]" : ""}`,
      style: s,
      children: Wo(t)
    }
  ),
  /* @__PURE__ */ e("span", { className: "text-[10px] md:text-xs text-muted-foreground mt-1.5 uppercase tracking-[0.2em] font-bold", children: r })
] }), Ho = {
  bronze: ia,
  silver: la,
  gold: nr,
  diamond: or
}, Uo = {
  bronze: "#CD7F32",
  silver: "#C0C0C0",
  gold: "#FFD700",
  diamond: "#B9F2FF"
}, Bo = ({ data: t, lpKey: r, couponCode: s, conversion: o }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  o?.countdown?.enabled && o.countdown.showInPlans && /* @__PURE__ */ e(Pt, { settings: o.countdown, lpKey: r }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12", children: t.items?.map((n) => {
    const d = Ho[n.id] || ia, h = Uo[n.id];
    return /* @__PURE__ */ a("div", { className: `glass-card p-8 md:p-10 flex flex-col hover:scale-[1.02] transition-all duration-300 relative ${n.recommended ? "ring-2 ring-[hsl(var(--ds-color-accent))] shadow-[0_0_30px_hsl(var(--ds-color-accent)/0.3)] scale-[1.02]" : ""}`, children: [
      n.recommended && /* @__PURE__ */ e("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold bg-[hsl(var(--ds-color-accent))] text-[hsl(var(--ds-color-btn-text))]", children: "Recomendado" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0",
            style: h ? {
              backgroundColor: `${h}22`,
              borderColor: `${h}4D`
            } : void 0,
            children: /* @__PURE__ */ e(
              d,
              {
                size: 24,
                style: h ? { color: h } : void 0,
                className: h ? void 0 : "text-[hsl(var(--ds-color-icon))]"
              }
            )
          }
        ),
        /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-foreground", children: n.name })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm mb-6 text-muted-foreground", children: n.frequency }),
      n.originalPrice && /* @__PURE__ */ e("p", { className: `text-base mb-1 text-muted-foreground ${n.showStrikethrough ? "line-through" : ""}`, children: n.originalPrice }),
      /* @__PURE__ */ e("p", { className: "text-4xl font-bold mb-2 text-[hsl(var(--ds-color-accent))]", children: n.price }),
      n.discount && /* @__PURE__ */ e("p", { className: "text-sm mb-2 font-semibold text-[hsl(var(--ds-color-accent))]", children: n.discount }),
      n.supportText && /* @__PURE__ */ e("p", { className: "text-sm mb-6 text-muted-foreground leading-relaxed", children: n.supportText }),
      n.features && n.features.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3 mb-6", children: n.features.map((f, l) => /* @__PURE__ */ a("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ e(
          ue,
          {
            size: 16,
            className: "mt-0.5 flex-shrink-0 text-[hsl(var(--ds-color-icon))]"
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground leading-relaxed", children: f })
      ] }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex-grow" }),
      /* @__PURE__ */ e(
        "a",
        {
          href: Re(ke(n.link, r), s),
          className: "w-full text-center py-4 font-semibold text-base transition-all duration-300 mt-6 rounded-full bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_hsl(var(--ds-color-accent)/0.4)]",
          children: n.ctaText || "Assinar"
        }
      )
    ] }, n.id);
  }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Xo = ({ item: t }) => /* @__PURE__ */ a("div", { className: "glass-card relative p-8 pt-16 hover:scale-[1.02] transition-all duration-300", children: [
  /* @__PURE__ */ e("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", children: t.image ? /* @__PURE__ */ e(
    "img",
    {
      loading: "lazy",
      src: t.image,
      className: "w-20 h-20 rounded-full object-cover border-4 border-card shadow-lg",
      alt: t.name
    }
  ) : /* @__PURE__ */ e("div", { className: "w-20 h-20 rounded-full bg-muted border-4 border-card shadow-lg flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-muted-foreground text-xs", children: "Foto" }) }) }),
  /* @__PURE__ */ a("div", { className: "flex items-center justify-center gap-2", children: [
    /* @__PURE__ */ e("p", { className: "font-bold text-lg md:text-xl text-foreground", children: t.name }),
    /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: "•" }),
    /* @__PURE__ */ e("p", { className: "text-sm md:text-base text-muted-foreground", children: t.city })
  ] }),
  /* @__PURE__ */ e("div", { className: "min-h-[220px] mt-4", children: /* @__PURE__ */ a("p", { className: "italic text-base md:text-lg text-muted-foreground leading-relaxed text-center", children: [
    '"',
    t.text,
    '"'
  ] }) }),
  /* @__PURE__ */ e("p", { className: "text-[hsl(var(--ds-color-star))] mt-4 text-xl md:text-2xl text-center", children: "★".repeat(Math.max(0, Math.min(5, Math.floor(Number(t.rating) || 0)))) })
] }), Tt = et(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outlineAdmin: "border border-primary/50 bg-transparent hover:bg-primary/10 hover:border-primary hover:text-foreground text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), D = A.forwardRef(
  ({ className: t, variant: r, size: s, asChild: o = !1, ...n }, d) => /* @__PURE__ */ e(o ? Zr : "button", { className: C(Tt({ variant: r, size: s, className: t })), ref: d, ...n })
);
D.displayName = "Button";
const _a = A.createContext(null);
function tt() {
  const t = A.useContext(_a);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const _t = A.forwardRef(
  ({ orientation: t = "horizontal", opts: r, setApi: s, plugins: o, className: n, children: d, ...h }, f) => {
    const [l, m] = Jr(
      {
        ...r,
        axis: t === "horizontal" ? "x" : "y"
      },
      o
    ), [i, c] = A.useState(!1), [u, x] = A.useState(!1), p = A.useCallback((S) => {
      S && (c(S.canScrollPrev()), x(S.canScrollNext()));
    }, []), b = A.useCallback(() => {
      m?.scrollPrev();
    }, [m]), w = A.useCallback(() => {
      m?.scrollNext();
    }, [m]), I = A.useCallback(
      (S) => {
        S.key === "ArrowLeft" ? (S.preventDefault(), b()) : S.key === "ArrowRight" && (S.preventDefault(), w());
      },
      [b, w]
    );
    return A.useEffect(() => {
      !m || !s || s(m);
    }, [m, s]), A.useEffect(() => {
      if (m)
        return p(m), m.on("reInit", p), m.on("select", p), () => {
          m?.off("select", p);
        };
    }, [m, p]), /* @__PURE__ */ e(
      _a.Provider,
      {
        value: {
          carouselRef: l,
          api: m,
          opts: r,
          orientation: t || (r?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: b,
          scrollNext: w,
          canScrollPrev: i,
          canScrollNext: u
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: f,
            onKeyDownCapture: I,
            className: C("relative", n),
            role: "region",
            "aria-roledescription": "carousel",
            ...h,
            children: d
          }
        )
      }
    );
  }
);
_t.displayName = "Carousel";
const At = A.forwardRef(
  ({ className: t, ...r }, s) => {
    const { carouselRef: o, orientation: n } = tt();
    return /* @__PURE__ */ e("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: C("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
        ...r
      }
    ) });
  }
);
At.displayName = "CarouselContent";
const It = A.forwardRef(
  ({ className: t, ...r }, s) => {
    const { orientation: o } = tt();
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        role: "group",
        "aria-roledescription": "slide",
        className: C("min-w-0 shrink-0 grow-0 basis-full", o === "horizontal" ? "pl-4" : "pt-4", t),
        ...r
      }
    );
  }
);
It.displayName = "CarouselItem";
const Mt = A.forwardRef(
  ({ className: t, variant: r = "outline", size: s = "icon", ...o }, n) => {
    const { orientation: d, scrollPrev: h, canScrollPrev: f } = tt();
    return /* @__PURE__ */ a(
      D,
      {
        ref: n,
        variant: r,
        size: s,
        className: C(
          "absolute h-8 w-8 rounded-full",
          d === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !f,
        onClick: h,
        ...o,
        children: [
          /* @__PURE__ */ e(ca, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
Mt.displayName = "CarouselPrevious";
const Lt = A.forwardRef(
  ({ className: t, variant: r = "outline", size: s = "icon", ...o }, n) => {
    const { orientation: d, scrollNext: h, canScrollNext: f } = tt();
    return /* @__PURE__ */ a(
      D,
      {
        ref: n,
        variant: r,
        size: s,
        className: C(
          "absolute h-8 w-8 rounded-full",
          d === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !f,
        onClick: h,
        ...o,
        children: [
          /* @__PURE__ */ e(lr, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
Lt.displayName = "CarouselNext";
const Go = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ a(
    _t,
    {
      opts: { align: "start" },
      className: "w-full max-w-7xl mx-auto mt-8 md:mt-12",
      children: [
        /* @__PURE__ */ e(At, { className: "pt-12 pb-4", children: t.items?.map((o, n) => /* @__PURE__ */ e(It, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ e("div", { className: "pt-10", children: /* @__PURE__ */ e(Xo, { item: o }) }) }, n)) }),
        /* @__PURE__ */ e(Mt, { className: "-left-12 hidden lg:flex w-12 h-12 bg-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/80 text-[hsl(var(--ds-color-btn-text))] border-0 shadow-lg" }),
        /* @__PURE__ */ e(Lt, { className: "-right-12 hidden lg:flex w-12 h-12 bg-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/80 text-[hsl(var(--ds-color-btn-text))] border-0 shadow-lg" })
      ]
    }
  ),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Bt = [vt, ir, ze], Qo = ({ data: t, lpKey: r, couponCode: s }) => {
  if (!t || t.enabled === !1 || !t.items || t.items.length === 0) return null;
  const o = t.items.filter((n) => n.enabled);
  return o.length === 0 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10", children: o.map((n, d) => {
      const h = Bt[d % Bt.length];
      return /* @__PURE__ */ a("div", { className: "text-center glass-card p-10 md:p-14 hover:scale-[1.03] transition-all duration-300", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center mb-5", children: /* @__PURE__ */ e(Et, { icon: h, size: "lg" }) }),
        /* @__PURE__ */ e("p", { className: "text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--ds-color-accent))] mb-4 md:mb-6", children: n.value }),
        /* @__PURE__ */ e("p", { className: "text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3", children: n.label }),
        n.description && /* @__PURE__ */ e("p", { className: "text-sm md:text-base mt-3 text-muted-foreground leading-relaxed", children: n.description })
      ] }, d);
    }) }),
    /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
  ] }) });
}, Yo = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-6xl mx-auto text-center", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("p", { className: "mb-12 md:mb-16 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.text }),
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ e("div", { className: "w-full max-w-4xl mx-auto rounded-[var(--ds-radius)] aspect-video overflow-hidden glass-card flex items-center justify-center", children: /* @__PURE__ */ a("picture", { children: [
    t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
    t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.imageDesktop || t.imageMobile,
        className: "w-full h-full object-cover",
        alt: "Sobre"
      }
    )
  ] }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Jo = ({ className: t }) => /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: t, children: /* @__PURE__ */ e("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }), Zo = ({ data: t, lpKey: r }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-4xl mx-auto text-center glass-card p-10 md:p-16 lg:p-20", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("p", { className: "mb-10 md:mb-14 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: t.subtitle }),
  /* @__PURE__ */ a(
    "a",
    {
      href: t.whatsappLink,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 md:px-16 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:scale-105 hover:shadow-[0_16px_32px_hsl(var(--ds-color-accent)/0.4)] shadow-[0_8px_16px_hsl(var(--ds-color-accent)/0.2)] transition-all duration-300",
      children: [
        /* @__PURE__ */ e(Jo, { className: "w-6 h-6" }),
        "Falar no WhatsApp"
      ]
    }
  )
] }) }), Ko = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ a("section", { className: "w-full py-16 md:py-24 px-4 md:px-6 relative overflow-hidden", children: [
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ e("div", { className: "absolute inset-0 -z-10 opacity-10", children: /* @__PURE__ */ a("picture", { children: [
    t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
    t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.imageDesktop || t.imageMobile,
        className: "w-full h-full object-cover",
        alt: "Background"
      }
    )
  ] }) }),
  /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto relative", children: [
    /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
    /* @__PURE__ */ e("p", { className: "text-center mb-12 md:mb-20 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.subtitle }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12", children: t.images?.map((o, n) => /* @__PURE__ */ a("div", { className: "glass-card p-8 md:p-12 flex flex-col items-center hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ a("div", { className: "grid grid-cols-2 gap-4 md:gap-8 w-full", children: [
        /* @__PURE__ */ a("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ a("span", { className: "inline-flex items-center gap-1.5 text-sm md:text-base mb-3 md:mb-4 font-bold text-foreground", children: [
            /* @__PURE__ */ e(cr, { size: 16, className: "text-red-400/70" }),
            "Antes"
          ] }),
          /* @__PURE__ */ e("div", { className: "w-full aspect-square rounded-[var(--ds-radius)] overflow-hidden glass-card flex items-center justify-center text-xs md:text-sm", children: o.before ? /* @__PURE__ */ e("img", { loading: "lazy", src: o.before, className: "w-full h-full object-cover", alt: "Antes" }) : /* @__PURE__ */ e("span", { className: "image-placeholder", children: "Imagem Antes" }) })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ a("span", { className: "inline-flex items-center gap-1.5 text-sm md:text-base mb-3 md:mb-4 font-bold text-foreground", children: [
            /* @__PURE__ */ e(dr, { size: 16, className: "text-[hsl(var(--ds-color-icon))]" }),
            "Depois"
          ] }),
          /* @__PURE__ */ e("div", { className: "w-full aspect-square rounded-[var(--ds-radius)] overflow-hidden glass-card flex items-center justify-center text-xs md:text-sm", children: o.after ? /* @__PURE__ */ e("img", { loading: "lazy", src: o.after, className: "w-full h-full object-cover", alt: "Depois" }) : /* @__PURE__ */ e("span", { className: "image-placeholder", children: "Imagem Depois" }) })
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: "mt-8 text-center text-base text-muted-foreground leading-relaxed", children: o.caption })
    ] }, n)) }),
    /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
  ] })
] }), Xt = [mr, ur, Ze, hr], en = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("p", { className: "text-center mb-12 md:mb-20 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.subtitle }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: t.steps?.map((o, n) => {
    const d = Xt[n % Xt.length];
    return /* @__PURE__ */ a("div", { className: "glass-card p-8 md:p-10 hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ e(
          d,
          {
            size: 24,
            className: "text-[hsl(var(--ds-color-icon))] flex-shrink-0"
          }
        ),
        /* @__PURE__ */ e("h3", { className: "text-xl md:text-2xl font-bold text-foreground leading-tight", children: o.title })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: o.description })
    ] }, n);
  }) }),
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ e("div", { className: "w-full max-w-5xl mx-auto mt-12 md:mt-20 rounded-[var(--ds-radius)] aspect-video overflow-hidden glass-card", children: /* @__PURE__ */ a("picture", { children: [
    t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
    t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.imageDesktop || t.imageMobile,
        className: "w-full h-full object-cover",
        alt: "Processo"
      }
    )
  ] }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), tn = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("ul", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: t.items?.map(
    (o, n) => o.enabled !== !1 ? /* @__PURE__ */ a("li", { className: "glass-card px-6 md:px-8 py-5 md:py-6 flex items-start gap-4 hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ e("div", { className: "w-6 h-6 rounded-full bg-[hsl(var(--ds-color-icon))] flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ e(ue, { size: 14, className: "text-[hsl(var(--ds-color-btn-text))] stroke-[3]" }) }),
      /* @__PURE__ */ e("span", { className: "text-base md:text-lg text-foreground leading-relaxed", children: o.text })
    ] }, n) : null
  ) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), an = (t) => {
  if (!t) return "";
  const r = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/, s = t.match(r);
  if (s)
    return `https://www.youtube.com/embed/${s[1]}?autoplay=1`;
  const o = /vimeo\.com\/(\d+)/, n = t.match(o);
  return n ? `https://player.vimeo.com/video/${n[1]}?autoplay=1` : t;
}, sn = (t) => {
  const r = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/, s = t.match(r);
  return s ? `https://img.youtube.com/vi/${s[1]}/maxresdefault.jpg` : null;
}, rn = ({ data: t, lpKey: r, couponCode: s }) => {
  const [o, n] = T(!1);
  if (!t || t.enabled === !1) return null;
  const d = an(t.url || ""), h = sn(t.url || "");
  return /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-5xl mx-auto text-center", children: [
    /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
    /* @__PURE__ */ e("p", { className: "mb-12 md:mb-16 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.subtitle }),
    /* @__PURE__ */ e("div", { className: "w-full rounded-[var(--ds-radius)] aspect-video overflow-hidden glass-card flex items-center justify-center relative", children: d ? !o && h ? (
      // Video Facade — thumbnail + play button
      /* @__PURE__ */ a(
        "button",
        {
          onClick: () => n(!0),
          className: "w-full h-full relative group cursor-pointer",
          "aria-label": "Reproduzir video",
          children: [
            /* @__PURE__ */ e(
              "img",
              {
                loading: "lazy",
                src: h,
                alt: t.title || "Video",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300", children: /* @__PURE__ */ e("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-[hsl(var(--ds-color-icon))] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e(da, { className: "w-7 h-7 md:w-8 md:h-8 text-[hsl(var(--ds-color-btn-text))] ml-1" }) }) })
          ]
        }
      )
    ) : (
      // iframe real — carrega apenas quando clica
      /* @__PURE__ */ e(
        "iframe",
        {
          src: d,
          className: "w-full h-full",
          allow: "autoplay; encrypted-media; picture-in-picture",
          allowFullScreen: !0,
          title: "Video"
        }
      )
    ) : /* @__PURE__ */ e("span", { className: "image-placeholder", children: "Video" }) }),
    /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
  ] }) });
};
function on(t) {
  if (!t || typeof t != "string") return "";
  const r = t.trim(), s = r.match(/(?:youtube\.com\/shorts\/|youtu\.be\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (s) return `https://www.youtube.com/embed/${s[1]}`;
  const o = r.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  if (o) return `https://www.youtube.com/embed/${o[1]}`;
  const n = r.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (n) return `https://www.youtube.com/embed/${n[1]}`;
  if (r.includes("youtube.com/embed/")) return r;
  const d = r.match(/(?:vimeo\.com\/)(\d+)/);
  return d ? `https://player.vimeo.com/video/${d[1]}` : r.includes("player.vimeo.com/video/") ? r : "";
}
const nn = Kr.Root, ln = (t) => {
  const r = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/, s = t.match(r);
  return s ? `https://img.youtube.com/vi/${s[1]}/maxresdefault.jpg` : null;
}, cn = ({ item: t, index: r }) => {
  const [s, o] = T(!1), n = on(t.url), d = ln(t.url), h = n ? `${n}${n.includes("?") ? "&" : "?"}autoplay=1` : "", f = j(() => o(!0), []);
  return n ? /* @__PURE__ */ e(It, { className: "pl-4 md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ a("div", { className: "glass-card rounded-2xl overflow-hidden shadow-lg border border-border/20 min-h-[250px]", children: [
    /* @__PURE__ */ e(nn, { ratio: 16 / 9, children: !s && d ? /* @__PURE__ */ a(
      "button",
      {
        onClick: f,
        className: "w-full h-full relative group cursor-pointer",
        "aria-label": `Reproduzir ${t.title || `Video ${r + 1}`}`,
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              loading: "lazy",
              src: d,
              alt: t.title || `Video ${r + 1}`,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300", children: /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full bg-[hsl(var(--ds-color-icon))] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e(da, { className: "w-6 h-6 text-[hsl(var(--ds-color-btn-text))] ml-0.5" }) }) })
        ]
      }
    ) : /* @__PURE__ */ e(
      "iframe",
      {
        src: h || n,
        title: t.title || `Video ${r + 1}`,
        className: "w-full h-full",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0
      }
    ) }),
    t.title && /* @__PURE__ */ e("div", { className: "p-4", children: /* @__PURE__ */ e("p", { className: "text-sm md:text-base font-medium text-foreground text-center", children: t.title }) })
  ] }) }) : null;
}, dn = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 || !t?.items || t.items.length === 0 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ a(
    _t,
    {
      opts: { align: "start" },
      className: "w-full max-w-7xl mx-auto mt-8 md:mt-12",
      children: [
        /* @__PURE__ */ e(At, { className: "py-4", children: t.items.map((o, n) => /* @__PURE__ */ e(cn, { item: o, index: n }, n)) }),
        /* @__PURE__ */ e(Mt, { className: "-left-12 hidden lg:flex w-12 h-12 bg-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/80 text-[hsl(var(--ds-color-btn-text))] border-0 shadow-lg" }),
        /* @__PURE__ */ e(Lt, { className: "-right-12 hidden lg:flex w-12 h-12 bg-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/80 text-[hsl(var(--ds-color-btn-text))] border-0 shadow-lg" })
      ]
    }
  ),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), Gt = [na, oa, gr, ze], mn = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("p", { className: "text-center mb-12 md:mb-20 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: t.subtitle }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: t.items?.map((o, n) => {
    const d = Gt[n % Gt.length];
    return /* @__PURE__ */ a("div", { className: "glass-card p-8 md:p-10 hover:scale-[1.02] transition-all duration-300", children: [
      /* @__PURE__ */ e("div", { className: "flex justify-center mb-5", children: /* @__PURE__ */ e(Et, { icon: d }) }),
      /* @__PURE__ */ e("h3", { className: "text-xl md:text-2xl font-bold mb-4 text-foreground leading-tight", children: o.title }),
      /* @__PURE__ */ e("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: o.description })
    ] }, n);
  }) }),
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ e("div", { className: "w-full max-w-5xl mx-auto mt-12 md:mt-20 rounded-[var(--ds-radius)] aspect-video overflow-hidden glass-card", children: /* @__PURE__ */ a("picture", { children: [
    t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
    t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.imageDesktop || t.imageMobile,
        className: "w-full h-full object-cover",
        alt: "Por que escolher"
      }
    )
  ] }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), un = ({ data: t, lpKey: r, couponCode: s, conversion: o }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ a("section", { className: "w-full py-16 md:py-24 px-4 md:px-6 relative overflow-hidden", children: [
  (t.imageDesktop || t.imageMobile) && /* @__PURE__ */ a("div", { className: "absolute inset-0 z-0", children: [
    /* @__PURE__ */ a("picture", { children: [
      t.imageDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.imageDesktop }),
      t.imageMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.imageMobile }),
      /* @__PURE__ */ e(
        "img",
        {
          loading: "lazy",
          src: t.imageDesktop || t.imageMobile,
          className: "w-full h-full object-cover",
          alt: "CTA Background"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[hsl(var(--ds-color-bg))]/40" })
  ] }),
  /* @__PURE__ */ a("div", { className: "max-w-4xl mx-auto text-center glass-card p-10 md:p-16 lg:p-20 relative z-10", children: [
    /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-[hsl(var(--ds-color-title))] leading-tight", children: xe(t.title) }),
    /* @__PURE__ */ e("p", { className: "mb-6 md:mb-8 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: xe(t.subtitle) }),
    o?.countdown?.enabled && o.countdown.showInCtaFinal && /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(Pt, { settings: o.countdown, lpKey: r }) }),
    /* @__PURE__ */ e(
      "a",
      {
        href: Re(ke(t.buttonLink, r), s),
        className: "inline-block w-full sm:w-auto px-12 md:px-16 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl transition-all duration-300 bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:scale-105 hover:shadow-[0_16px_32px_hsl(var(--ds-color-accent)/0.4)] shadow-[0_8px_16px_hsl(var(--ds-color-accent)/0.2)]",
        children: t.buttonText
      }
    ),
    t.trustText && /* @__PURE__ */ e("p", { className: "mt-4 text-sm text-muted-foreground/70", children: xe(t.trustText) })
  ] })
] }), hn = Ce.Root, Aa = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(Ce.Item, { ref: s, className: C("border-b", t), ...r }));
Aa.displayName = "AccordionItem";
const Ia = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ e(Ce.Header, { className: "flex", children: /* @__PURE__ */ a(
  Ce.Trigger,
  {
    ref: o,
    className: C(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...s,
    children: [
      r,
      /* @__PURE__ */ e(Pe, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Ia.displayName = Ce.Trigger.displayName;
const Ma = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ e(
  Ce.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...s,
    children: /* @__PURE__ */ e("div", { className: C("pb-4 pt-0", t), children: r })
  }
));
Ma.displayName = Ce.Content.displayName;
const gn = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-4xl mx-auto", children: [
  /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
  /* @__PURE__ */ e("div", { className: "glass-card p-6 md:p-10 lg:p-12", children: /* @__PURE__ */ e(hn, { type: "single", collapsible: !0, className: "space-y-4 md:space-y-6", children: t.items?.map((o, n) => /* @__PURE__ */ a(
    Aa,
    {
      value: `item-${n}`,
      className: "border-b border-border pb-2",
      children: [
        /* @__PURE__ */ e(Ia, { className: "text-left text-base md:text-lg lg:text-xl font-bold text-foreground hover:text-[hsl(var(--ds-color-accent))] transition-colors py-4 md:py-5", children: o.question }),
        /* @__PURE__ */ e(Ma, { className: "text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed pt-3 pb-5", children: o.answer })
      ]
    },
    n
  )) }) }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), fn = ({ data: t, lpKey: r, couponCode: s }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("section", { className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ a("div", { className: "grid md:grid-cols-2 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ a("div", { children: [
      t.imageDesktop && /* @__PURE__ */ e(
        "img",
        {
          src: t.imageDesktop,
          alt: t.title,
          loading: "lazy",
          className: "w-full h-auto rounded-[var(--ds-radius)] glass-card object-cover hidden md:block aspect-[4/3]"
        }
      ),
      t.imageMobile && /* @__PURE__ */ e(
        "img",
        {
          src: t.imageMobile,
          alt: t.title,
          loading: "lazy",
          className: "w-full h-auto rounded-[var(--ds-radius)] glass-card object-cover block md:hidden aspect-square"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t.title }),
      /* @__PURE__ */ e("p", { className: "text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed", children: t.subtitle }),
      /* @__PURE__ */ e("div", { className: "space-y-4 md:space-y-6", children: t.items?.map((o, n) => /* @__PURE__ */ a("div", { className: "flex items-start gap-4 md:gap-5", children: [
        /* @__PURE__ */ e("div", { className: "flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center mt-0.5 bg-[hsl(var(--ds-color-icon))] shadow-[0_2px_8px_hsl(var(--ds-color-accent)/0.3)]", children: /* @__PURE__ */ e(
          ue,
          {
            className: "w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--ds-color-btn-text))] stroke-[3]"
          }
        ) }),
        /* @__PURE__ */ e("p", { className: "text-base md:text-lg text-foreground leading-relaxed font-medium", children: o })
      ] }, n)) })
    ] })
  ] }),
  /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
] }) }), pn = {
  instagram: yt,
  facebook: xr,
  linkedin: Nt,
  youtube: pr,
  tiktok: fr
}, xn = ({ data: t, lpKey: r }) => !t || t.enabled === !1 ? null : /* @__PURE__ */ e("footer", { className: "w-full py-16 md:py-24 px-4 md:px-6 border-t border-border backdrop-blur-lg", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
  (t.logoDesktop || t.logoMobile || t.logo) && /* @__PURE__ */ e("div", { className: "w-full flex justify-center mb-10 md:mb-12", children: /* @__PURE__ */ a("picture", { children: [
    t.logoDesktop && /* @__PURE__ */ e("source", { media: "(min-width: 768px)", srcSet: t.logoDesktop }),
    t.logoMobile && /* @__PURE__ */ e("source", { media: "(max-width: 767px)", srcSet: t.logoMobile }),
    /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.logoDesktop || t.logoMobile || t.logo,
        alt: "Logo",
        className: "h-12 md:h-14 object-contain"
      }
    )
  ] }) }),
  t.links && t.links.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-10", children: t.links.filter((s) => s.enabled !== !1).map((s, o) => /* @__PURE__ */ e(
    "a",
    {
      href: s.url,
      className: "text-sm md:text-base text-muted-foreground hover:text-[hsl(var(--ds-color-accent))] transition-colors duration-300 font-medium",
      children: s.text
    },
    o
  )) }),
  /* @__PURE__ */ a("div", { className: "text-center text-sm md:text-base space-y-2 md:space-y-3 text-muted-foreground mb-8 md:mb-10", children: [
    t.privacy?.enabled !== !1 && (t.privacy?.hasLink && t.privacy?.url ? /* @__PURE__ */ e(
      "a",
      {
        href: t.privacy.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block hover:text-[hsl(var(--ds-color-accent))] transition-colors duration-300",
        children: t.privacy.text || "Política de Privacidade"
      }
    ) : t.privacy?.text ? /* @__PURE__ */ e("p", { children: t.privacy.text }) : null),
    t.terms?.enabled !== !1 && (t.terms?.hasLink && t.terms?.url ? /* @__PURE__ */ e(
      "a",
      {
        href: t.terms.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block hover:text-[hsl(var(--ds-color-accent))] transition-colors duration-300",
        children: t.terms.text || "Termos de Uso"
      }
    ) : t.terms?.text ? /* @__PURE__ */ e("p", { children: t.terms.text }) : null),
    t.cnpj?.enabled !== !1 && t.cnpj?.text && /* @__PURE__ */ e("p", { children: t.cnpj.text })
  ] }),
  t.socials && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-10", children: Object.entries(t.socials).map(([s, o]) => {
    if (!o.enabled || !o.url) return null;
    const n = pn[s];
    return n ? /* @__PURE__ */ e(
      "a",
      {
        href: o.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-muted-foreground hover:text-[hsl(var(--ds-color-accent))] transition-colors duration-300",
        "aria-label": s,
        children: /* @__PURE__ */ e(n, { className: "w-6 h-6" })
      },
      s
    ) : null;
  }) })
] }) }), W = A.forwardRef(
  ({ className: t, type: r, ...s }, o) => /* @__PURE__ */ e(
    "input",
    {
      type: r,
      className: C(
        "flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
        t
      ),
      ref: o,
      ...s
    }
  )
);
W.displayName = "Input";
const bn = et("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), g = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(ka.Root, { ref: s, className: C(bn(), t), ...r }));
g.displayName = ka.Root.displayName;
const Vt = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  "textarea",
  {
    className: C(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ref: s,
    ...r
  }
));
Vt.displayName = "Textarea";
const La = A.forwardRef(({ className: t, checked: r, ...s }, o) => /* @__PURE__ */ e(
  ht.Root,
  {
    ref: o,
    checked: r,
    className: C(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...s,
    children: /* @__PURE__ */ e(ht.Indicator, { className: C("flex items-center justify-center text-current"), children: r === "indeterminate" ? /* @__PURE__ */ e(br, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ue, { className: "h-4 w-4" }) })
  }
));
La.displayName = ht.Root.displayName;
const de = X.Root, me = X.Value, ne = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ a(
  X.Trigger,
  {
    ref: o,
    className: C(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...s,
    children: [
      r,
      /* @__PURE__ */ e(X.Icon, { asChild: !0, children: /* @__PURE__ */ e(Pe, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
ne.displayName = X.Trigger.displayName;
const Va = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  X.ScrollUpButton,
  {
    ref: s,
    className: C("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: /* @__PURE__ */ e(Ke, { className: "h-4 w-4" })
  }
));
Va.displayName = X.ScrollUpButton.displayName;
const ja = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  X.ScrollDownButton,
  {
    ref: s,
    className: C("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: /* @__PURE__ */ e(Pe, { className: "h-4 w-4" })
  }
));
ja.displayName = X.ScrollDownButton.displayName;
const le = A.forwardRef(({ className: t, children: r, position: s = "popper", useAdminTheme: o, ...n }, d) => {
  const h = typeof window < "u" && window.location.pathname.startsWith("/admin"), f = o ?? h, l = /* @__PURE__ */ a(
    X.Content,
    {
      ref: d,
      className: C(
        "relative z-[200] max-h-96 min-w-[8rem] overflow-hidden rounded-md shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        // Estilos usando tokens semânticos - funciona em light e dark
        "bg-popover border border-border text-popover-foreground",
        s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t
      ),
      position: s,
      ...n,
      children: [
        /* @__PURE__ */ e(Va, {}),
        /* @__PURE__ */ e(
          X.Viewport,
          {
            className: C(
              "p-1",
              s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ e(ja, {})
      ]
    }
  );
  return /* @__PURE__ */ e(X.Portal, { children: f ? /* @__PURE__ */ e("div", { className: "theme-admin", children: l }) : l });
});
le.displayName = X.Content.displayName;
const vn = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(X.Label, { ref: s, className: C("py-1.5 pl-8 pr-2 text-sm font-semibold", t), ...r }));
vn.displayName = X.Label.displayName;
const R = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ a(
  X.Item,
  {
    ref: o,
    className: C(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      // Hover/focus usando tokens semânticos
      "focus:bg-muted focus:text-foreground hover:bg-muted hover:text-foreground",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(X.ItemIndicator, { children: /* @__PURE__ */ e(ue, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ e(X.ItemText, { children: r })
    ]
  }
));
R.displayName = X.Item.displayName;
const Nn = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(X.Separator, { ref: s, className: C("-mx-1 my-1 h-px bg-muted", t), ...r }));
Nn.displayName = X.Separator.displayName;
const yn = (t) => {
  const s = t.replace(/\D/g, "").slice(0, 11);
  return s.length <= 2 ? s : s.length <= 7 ? `(${s.slice(0, 2)}) ${s.slice(2)}` : `(${s.slice(0, 2)}) ${s.slice(2, 7)}-${s.slice(7)}`;
}, wn = (t) => {
  const s = t.replace(/\D/g, "").slice(0, 11);
  return s.length <= 3 ? s : s.length <= 6 ? `${s.slice(0, 3)}.${s.slice(3)}` : s.length <= 9 ? `${s.slice(0, 3)}.${s.slice(3, 6)}.${s.slice(6)}` : `${s.slice(0, 3)}.${s.slice(3, 6)}.${s.slice(6, 9)}-${s.slice(9)}`;
}, Cn = (t) => {
  const s = t.replace(/\D/g, "").slice(0, 8);
  return s.length <= 2 ? s : s.length <= 4 ? `${s.slice(0, 2)}/${s.slice(2)}` : `${s.slice(0, 2)}/${s.slice(2, 4)}/${s.slice(4)}`;
}, $a = (t) => {
  const s = t.replace(/\D/g, "").slice(0, 8);
  return s.length <= 5 ? s : `${s.slice(0, 5)}-${s.slice(5)}`;
}, kn = (t) => {
  switch (t) {
    case "phone":
    case "whatsapp":
      return yn;
    case "cpf":
      return wn;
    case "date":
      return Cn;
    case "cep":
      return $a;
    default:
      return null;
  }
}, Dn = 1, Sn = 1e6;
let ot = 0;
function En() {
  return ot = (ot + 1) % Number.MAX_SAFE_INTEGER, ot.toString();
}
const nt = /* @__PURE__ */ new Map(), Qt = (t) => {
  if (nt.has(t))
    return;
  const r = setTimeout(() => {
    nt.delete(t), Be({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, Sn);
  nt.set(t, r);
}, Pn = (t, r) => {
  switch (r.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [r.toast, ...t.toasts].slice(0, Dn)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map((s) => s.id === r.toast.id ? { ...s, ...r.toast } : s)
      };
    case "DISMISS_TOAST": {
      const { toastId: s } = r;
      return s ? Qt(s) : t.toasts.forEach((o) => {
        Qt(o.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (o) => o.id === s || s === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return r.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((s) => s.id !== r.toastId)
      };
  }
}, Tn = [];
let lt = { toasts: [] };
function Be(t) {
  lt = Pn(lt, t), Tn.forEach((r) => {
    r(lt);
  });
}
function ye({ ...t }) {
  const r = En(), s = (n) => Be({
    type: "UPDATE_TOAST",
    toast: { ...n, id: r }
  }), o = () => Be({ type: "DISMISS_TOAST", toastId: r });
  return Be({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: r,
      open: !0,
      onOpenChange: (n) => {
        n || o();
      }
    }
  }), {
    id: r,
    dismiss: o,
    update: s
  };
}
const _n = ({
  value: t,
  onChange: r,
  onAddressFound: s,
  onAddressFieldsChange: o,
  error: n,
  placeholder: d = "00000-000"
}) => {
  const [h, f] = T(!1), [l, m] = T(!1), [i, c] = T(""), [u, x] = T(""), [p, b] = T(""), w = (E) => {
    m(!1), r($a(E));
  }, I = (E) => {
    c(E), o?.({ bairro: E, cidade: u, uf: p });
  }, S = (E) => {
    x(E), o?.({ bairro: i, cidade: E, uf: p });
  }, _ = (E) => {
    b(E.toUpperCase().slice(0, 2)), o?.({ bairro: i, cidade: u, uf: E.toUpperCase().slice(0, 2) });
  }, y = async () => {
    const E = t.replace(/\D/g, "");
    if (E.length !== 8) {
      ye({
        title: "CEP inválido",
        description: "Digite um CEP com 8 dígitos.",
        variant: "destructive"
      });
      return;
    }
    f(!0);
    try {
      const V = await (await fetch(`https://viacep.com.br/ws/${E}/json/`)).json();
      if (V.erro) {
        ye({
          title: "CEP não encontrado",
          description: "Verifique o CEP digitado e tente novamente.",
          variant: "destructive"
        }), m(!1);
        return;
      }
      m(!0);
      const z = {
        logradouro: V.logradouro || "",
        bairro: V.bairro || "",
        cidade: V.localidade || "",
        uf: V.uf || ""
      };
      c(z.bairro), x(z.cidade), b(z.uf), ye({
        title: "Endereço encontrado!",
        description: `${V.bairro} - ${V.localidade}/${V.uf}`
      }), s?.(z), o?.({
        bairro: z.bairro,
        cidade: z.cidade,
        uf: z.uf
      });
    } catch (L) {
      console.error("[CEPFieldV2] Error fetching:", L), ye({
        title: "Erro ao buscar CEP",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      }), m(!1);
    } finally {
      f(!1);
    }
  }, v = C(
    "bg-[hsl(var(--ds-color-glass)/var(--ds-glass-opacity))] border-[hsl(var(--ds-border-color)/var(--ds-border-opacity))] text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary",
    n && "border-destructive focus:border-destructive",
    l && "border-emerald-500 focus:border-emerald-500"
  ), k = C(
    "bg-[hsl(var(--ds-color-glass)/var(--ds-glass-opacity))] border-[hsl(var(--ds-border-color)/var(--ds-border-opacity))] text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
  );
  return /* @__PURE__ */ a("div", { className: "space-y-3", children: [
    /* @__PURE__ */ a("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ e(
          W,
          {
            type: "text",
            inputMode: "numeric",
            value: t,
            onChange: (E) => w(E.target.value),
            placeholder: d,
            className: v,
            maxLength: 9
          }
        ),
        l && /* @__PURE__ */ e(wt, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" })
      ] }),
      /* @__PURE__ */ e(
        D,
        {
          type: "button",
          variant: "default",
          onClick: y,
          disabled: h || t.replace(/\D/g, "").length !== 8,
          className: "shrink-0 px-4",
          children: h ? /* @__PURE__ */ e(ge, { className: "w-4 h-4 animate-spin" }) : "Buscar"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ e(g, { className: "text-sm text-muted-foreground", children: "Bairro" }),
        /* @__PURE__ */ e(
          W,
          {
            type: "text",
            value: i,
            onChange: (E) => I(E.target.value),
            placeholder: "Bairro",
            className: k
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ a("div", { className: "flex-1 space-y-1.5", children: [
          /* @__PURE__ */ e(g, { className: "text-sm text-muted-foreground", children: "Cidade" }),
          /* @__PURE__ */ e(
            W,
            {
              type: "text",
              value: u,
              onChange: (E) => S(E.target.value),
              placeholder: "Cidade",
              className: k
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "w-20 space-y-1.5", children: [
          /* @__PURE__ */ e(g, { className: "text-sm text-muted-foreground", children: "UF" }),
          /* @__PURE__ */ e(
            W,
            {
              type: "text",
              value: p,
              onChange: (E) => _(E.target.value),
              placeholder: "UF",
              maxLength: 2,
              className: k
            }
          )
        ] })
      ] })
    ] })
  ] });
}, An = ({ className: t }) => /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: t, children: /* @__PURE__ */ e("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }), In = ({
  field: t,
  value: r,
  onChange: s,
  onAddressFound: o,
  onAddressFieldsChange: n,
  error: d
}) => {
  const h = (m) => {
    const i = kn(t.type);
    s(i ? i(m) : m);
  }, f = C(
    "bg-[hsl(var(--ds-color-glass)/var(--ds-glass-opacity))] border-[hsl(var(--ds-border-color)/var(--ds-border-opacity))] text-foreground placeholder:text-muted-foreground focus:border-[hsl(var(--ds-color-accent))] focus:ring-[hsl(var(--ds-color-accent)/0.3)] transition-colors duration-200",
    d && "border-destructive focus:border-destructive"
  );
  if (t.type === "paragraph")
    return /* @__PURE__ */ e("div", { className: C(
      "w-full",
      t.width === "50%" ? "md:w-[calc(50%-0.5rem)]" : ""
    ), children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground py-3 px-4 bg-muted/20 rounded-lg border border-border/30", children: t.content || t.label }) });
  const l = () => {
    switch (t.type) {
      case "textarea":
        return /* @__PURE__ */ e(
          Vt,
          {
            id: t.id,
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder,
            className: C(f, "min-h-[100px] resize-none")
          }
        );
      case "select":
        return /* @__PURE__ */ a(de, { value: r, onValueChange: s, children: [
          /* @__PURE__ */ e(ne, { className: f, children: /* @__PURE__ */ e(me, { placeholder: t.placeholder || "Selecione..." }) }),
          /* @__PURE__ */ e(le, { children: t.options?.map((m) => /* @__PURE__ */ e(R, { value: m, children: m }, m)) })
        ] });
      case "checkbox": {
        const m = r ? r.split(",").filter(Boolean) : [];
        return /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          t.options?.map((i) => /* @__PURE__ */ a(
            "label",
            {
              className: "flex items-center gap-2 cursor-pointer hover:bg-muted/10 p-2 rounded-md transition-colors",
              children: [
                /* @__PURE__ */ e(
                  La,
                  {
                    checked: m.includes(i),
                    onCheckedChange: (c) => {
                      let u = [...m];
                      c ? (!t.maxSelect || u.length < t.maxSelect) && u.push(i) : u = u.filter((x) => x !== i), s(u.join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-sm text-foreground", children: i })
              ]
            },
            i
          )),
          (t.minSelect || t.maxSelect) && /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: t.minSelect && t.maxSelect ? `Selecione de ${t.minSelect} a ${t.maxSelect} opções` : t.minSelect ? `Selecione pelo menos ${t.minSelect} opção(ões)` : `Selecione no máximo ${t.maxSelect} opção(ões)` })
        ] });
      }
      case "cep":
        return /* @__PURE__ */ e(
          _n,
          {
            value: r,
            onChange: s,
            onAddressFound: o,
            onAddressFieldsChange: n,
            error: d,
            placeholder: t.placeholder || "00000-000"
          }
        );
      case "whatsapp":
        return /* @__PURE__ */ a("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            W,
            {
              id: t.id,
              type: "tel",
              inputMode: "tel",
              value: r,
              onChange: (m) => h(m.target.value),
              placeholder: t.placeholder || "(00) 00000-0000",
              className: C(f, "pl-10"),
              maxLength: 15
            }
          ),
          /* @__PURE__ */ e(An, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#25D366]" })
        ] });
      case "date":
        return /* @__PURE__ */ e(
          W,
          {
            id: t.id,
            type: "text",
            inputMode: "numeric",
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder || "DD/MM/AAAA",
            className: f,
            maxLength: 10
          }
        );
      case "phone":
        return /* @__PURE__ */ e(
          W,
          {
            id: t.id,
            type: "tel",
            inputMode: "tel",
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder || "(00) 00000-0000",
            className: f,
            maxLength: 15
          }
        );
      case "cpf":
        return /* @__PURE__ */ e(
          W,
          {
            id: t.id,
            type: "text",
            inputMode: "numeric",
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder || "000.000.000-00",
            className: f,
            maxLength: 14
          }
        );
      case "email":
        return /* @__PURE__ */ e(
          W,
          {
            id: t.id,
            type: "email",
            inputMode: "email",
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder,
            className: f
          }
        );
      default:
        return /* @__PURE__ */ e(
          W,
          {
            id: t.id,
            type: "text",
            value: r,
            onChange: (m) => h(m.target.value),
            placeholder: t.placeholder,
            className: f
          }
        );
    }
  };
  return /* @__PURE__ */ a("div", { className: C(
    "space-y-2",
    t.width === "50%" ? "w-full md:w-[calc(50%-0.5rem)]" : "w-full"
  ), children: [
    /* @__PURE__ */ a(g, { htmlFor: t.id, className: "text-sm font-medium text-foreground", children: [
      t.label,
      t.required && /* @__PURE__ */ e("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    l(),
    d && /* @__PURE__ */ e("p", { className: "text-xs text-destructive", children: d })
  ] });
}, Mn = ({ data: t, lpKey: r, couponCode: s }) => {
  const [o, n] = T({}), [d, h] = T({}), [f, l] = T(!1), [m, i] = T(!1);
  if (!t || t.enabled === !1) return null;
  const c = t?.fields || [], u = (y, v) => {
    n((k) => ({ ...k, [y]: v })), d[y] && h((k) => {
      const E = { ...k };
      return delete E[y], E;
    });
  }, x = (y) => {
    n((k) => ({
      ...k,
      cep_logradouro: y.logradouro,
      cep_bairro: y.bairro,
      cep_cidade: y.cidade,
      cep_uf: y.uf
    }));
    const v = {
      logradouro: "logradouro",
      rua: "logradouro",
      endereco: "logradouro",
      bairro: "bairro",
      cidade: "cidade",
      uf: "uf",
      estado: "uf"
    };
    c.forEach((k) => {
      const E = k.id.toLowerCase(), L = k.label.toLowerCase();
      for (const [V, z] of Object.entries(v))
        if (E.includes(V) || L.includes(V)) {
          const U = y[z];
          U && n((se) => ({ ...se, [k.id]: U }));
          break;
        }
    });
  }, p = (y) => {
    n((v) => ({
      ...v,
      cep_bairro: y.bairro,
      cep_cidade: y.cidade,
      cep_uf: y.uf
    }));
  }, b = () => {
    const y = {};
    return c.forEach((v) => {
      if (v.type === "paragraph") return;
      const k = o[v.id]?.trim() || "";
      if (v.required && !k) {
        y[v.id] = "Campo obrigatório";
        return;
      }
      if (k)
        switch (v.type) {
          case "email":
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k) || (y[v.id] = "E-mail inválido");
            break;
          case "phone":
          case "whatsapp":
            k.replace(/\D/g, "").length < 10 && (y[v.id] = "Telefone inválido");
            break;
          case "cpf":
            k.replace(/\D/g, "").length !== 11 && (y[v.id] = "CPF inválido");
            break;
          case "cep":
            k.replace(/\D/g, "").length !== 8 && (y[v.id] = "CEP inválido");
            break;
          case "checkbox": {
            const E = k.split(",").filter(Boolean).length;
            v.required && E === 0 ? y[v.id] = "Selecione pelo menos uma opção" : v.minSelect && E < v.minSelect ? y[v.id] = `Selecione pelo menos ${v.minSelect} opção(ões)` : v.maxSelect && E > v.maxSelect && (y[v.id] = `Selecione no máximo ${v.maxSelect} opção(ões)`);
            break;
          }
        }
    }), h(y), Object.keys(y).length === 0;
  }, w = () => {
    const y = t?.successAction;
    switch (y?.type) {
      case "redirect":
        y.redirectUrl && (window.location.href = y.redirectUrl);
        break;
      case "success-card":
        i(!0);
        break;
      default:
        ye({
          title: y?.successTitle || "Enviado com sucesso!",
          description: y?.successMessage || "Entraremos em contato em breve."
        }), n({}), h({});
    }
  }, I = () => {
    const y = navigator.userAgent, k = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(y) ? "mobile" : "desktop";
    let E = "Unknown";
    return y.includes("Windows") ? E = "Windows" : y.includes("Mac OS") ? E = "macOS" : y.includes("Linux") ? E = "Linux" : y.includes("Android") ? E = "Android" : (y.includes("iPhone") || y.includes("iPad")) && (E = "iOS"), { deviceType: k, os: E };
  }, S = async (y) => {
    if (t?.webhookUrl)
      try {
        const v = {};
        new URLSearchParams(window.location.search).forEach((E, L) => {
          L.startsWith("utm_") && (v[L] = E);
        }), await fetch(t.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lp_key: r,
            campos: y,
            utm_params: v,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            origin_url: window.location.href
          })
        });
      } catch (v) {
        console.warn("[FormV2] Webhook failed (non-blocking):", v);
      }
  }, _ = async (y) => {
    if (y.preventDefault(), !b()) {
      ye({
        title: "Formulário incompleto",
        description: "Preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    l(!0);
    try {
      const v = {};
      c.forEach((z) => {
        z.type !== "paragraph" && o[z.id] && (v[z.id] = o[z.id]);
      }), o.cep_logradouro && (v.cep_logradouro = o.cep_logradouro), o.cep_bairro && (v.cep_bairro = o.cep_bairro), o.cep_cidade && (v.cep_cidade = o.cep_cidade), o.cep_uf && (v.cep_uf = o.cep_uf);
      const { deviceType: k, os: E } = I(), L = {
        device_type: k,
        device_os: E,
        submitted_at_local: (/* @__PURE__ */ new Date()).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
      }, { error: V } = await B.functions.invoke("submit-lp-form", {
        body: {
          lp_id: r,
          data: v,
          metadata: L,
          origin_url: window.location.href
        }
      });
      if (V) throw V;
      S(v), w();
    } catch (v) {
      console.error("[FormV2] Submit error:", v), ye({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      l(!1);
    }
  };
  return m ? /* @__PURE__ */ e("section", { id: "formulario", className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ e("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ a("div", { className: "glass-card p-10 md:p-16 text-center", children: [
    t?.successAction?.successImage ? /* @__PURE__ */ e(
      "img",
      {
        loading: "lazy",
        src: t.successAction.successImage,
        alt: "Sucesso",
        className: "w-32 h-32 object-contain mx-auto mb-6"
      }
    ) : /* @__PURE__ */ e(vr, { className: "w-20 h-20 text-emerald-500 mx-auto mb-6" }),
    /* @__PURE__ */ e("h2", { className: "text-2xl md:text-3xl font-bold text-foreground mb-4", children: t?.successAction?.successTitle || "Obrigado!" }),
    /* @__PURE__ */ e("p", { className: "text-lg text-muted-foreground", children: t?.successAction?.successMessage || "Entraremos em contato em breve." })
  ] }) }) }) : /* @__PURE__ */ e("section", { id: "formulario", className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-[hsl(var(--ds-color-title))] leading-tight", children: t?.title || "Assine agora" }),
    /* @__PURE__ */ e("p", { className: "text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto", children: t?.subtitle || "Preencha o formulário e comece hoje" }),
    /* @__PURE__ */ a("form", { onSubmit: _, className: "glass-strong p-6 md:p-10 lg:p-12", children: [
      c.length > 0 ? /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-4 mb-6", children: c.map((y) => /* @__PURE__ */ e(
        In,
        {
          field: y,
          value: o[y.id] || "",
          onChange: (v) => u(y.id, v),
          onAddressFound: x,
          onAddressFieldsChange: p,
          error: d[y.id]
        },
        y.id
      )) }) : /* @__PURE__ */ e("p", { className: "text-muted-foreground text-center mb-6", children: "Configure os campos do formulário no painel administrativo." }),
      /* @__PURE__ */ e("div", { className: "text-center mt-2", children: /* @__PURE__ */ e(
        "button",
        {
          type: "submit",
          disabled: f || c.length === 0,
          className: "inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-base md:text-lg bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:scale-105 hover:shadow-[0_16px_32px_hsl(var(--ds-color-accent)/0.4)] shadow-[0_8px_16px_hsl(var(--ds-color-accent)/0.2)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
          children: f ? /* @__PURE__ */ a(oe, { children: [
            /* @__PURE__ */ e(ge, { className: "w-5 h-5 animate-spin" }),
            "Enviando..."
          ] }) : /* @__PURE__ */ a(oe, { children: [
            /* @__PURE__ */ e(Nr, { className: "w-5 h-5" }),
            t?.ctaButton || "Contratar"
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ e(K, { data: t?.footerCta, lpKey: r, couponCode: s })
  ] }) });
}, za = $(({
  speaker: t,
  isFeatured: r
}) => {
  const s = t.socials?.instagram || t.socials?.linkedin || t.socials?.website;
  return /* @__PURE__ */ a(
    "div",
    {
      className: `glass-card overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--ds-color-accent))]/10 ${r ? "md:col-span-2 md:row-span-2" : ""}`,
      children: [
        t.image && /* @__PURE__ */ a("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: `${r ? "aspect-[4/3]" : "aspect-square"}`, children: /* @__PURE__ */ e(
            "img",
            {
              src: t.image,
              alt: t.name,
              className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" })
        ] }),
        /* @__PURE__ */ a("div", { className: `flex flex-col flex-1 ${r ? "p-8 md:p-10" : "p-6 md:p-8"}`, children: [
          /* @__PURE__ */ e(
            "h3",
            {
              className: `font-bold text-foreground leading-tight ${r ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`,
              children: t.name
            }
          ),
          t.role && /* @__PURE__ */ e("p", { className: "text-[hsl(var(--ds-color-accent))] font-semibold text-sm md:text-base mt-1.5", children: t.role }),
          t.bio && /* @__PURE__ */ e(
            "div",
            {
              className: `text-muted-foreground leading-relaxed mt-4 flex-1 ${r ? "text-base md:text-lg" : "text-sm md:text-base"}`,
              dangerouslySetInnerHTML: { __html: xe(t.bio) }
            }
          ),
          s && /* @__PURE__ */ a("div", { className: "flex items-center gap-3 mt-6 pt-4 border-t border-[hsl(var(--ds-border-color))]/30", children: [
            t.socials?.instagram && /* @__PURE__ */ e(
              "a",
              {
                href: t.socials.instagram,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-2 rounded-lg text-muted-foreground hover:text-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/10 transition-all duration-200",
                "aria-label": `Instagram de ${t.name}`,
                children: /* @__PURE__ */ e(yt, { className: "h-5 w-5" })
              }
            ),
            t.socials?.linkedin && /* @__PURE__ */ e(
              "a",
              {
                href: t.socials.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-2 rounded-lg text-muted-foreground hover:text-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/10 transition-all duration-200",
                "aria-label": `LinkedIn de ${t.name}`,
                children: /* @__PURE__ */ e(Nt, { className: "h-5 w-5" })
              }
            ),
            t.socials?.website && /* @__PURE__ */ e(
              "a",
              {
                href: t.socials.website,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-2 rounded-lg text-muted-foreground hover:text-[hsl(var(--ds-color-accent))] hover:bg-[hsl(var(--ds-color-accent))]/10 transition-all duration-200",
                "aria-label": `Website de ${t.name}`,
                children: /* @__PURE__ */ e(ma, { className: "h-5 w-5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
});
za.displayName = "SpeakerCard";
const Fa = $(({ data: t, lpKey: r, couponCode: s }) => {
  if (!t || t.enabled === !1 || !t.items || t.items.length === 0) return null;
  const o = t.layout === "featured";
  return /* @__PURE__ */ e("section", { id: "speakers", className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
    (t.title || t.subtitle) && /* @__PURE__ */ a("div", { className: "text-center mb-12 md:mb-20", children: [
      t.title && /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ds-color-title))]", children: t.title }),
      t.subtitle && /* @__PURE__ */ e(
        "p",
        {
          className: "text-muted-foreground text-lg md:text-xl mt-4 max-w-3xl mx-auto",
          dangerouslySetInnerHTML: { __html: xe(t.subtitle) }
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `grid gap-6 md:gap-8 ${o ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`,
        children: t.items.map((n, d) => /* @__PURE__ */ e(
          za,
          {
            speaker: n,
            isFeatured: o && d === 0
          },
          `speaker-${d}`
        ))
      }
    ),
    /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
  ] }) });
});
Fa.displayName = "SpeakersV2";
const Yt = {
  sm: "h-12",
  // 48px
  md: "h-20",
  // 80px
  lg: "h-[120px]"
}, Ln = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}, Vn = {
  sm: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  md: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  lg: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
}, Ra = $(({ data: t, lpKey: r, couponCode: s }) => {
  if (!t || t.enabled === !1) return null;
  const o = (t.tiers || []).filter(
    (n) => n.enabled && n.items && n.items.length > 0
  );
  return o.length === 0 ? null : /* @__PURE__ */ e("section", { id: "sponsors", className: "w-full py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto", children: [
    (t.title || t.subtitle) && /* @__PURE__ */ a("div", { className: "text-center mb-12 md:mb-20", children: [
      t.title && /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--ds-color-title))]", children: t.title }),
      t.subtitle && /* @__PURE__ */ e(
        "p",
        {
          className: "text-muted-foreground text-lg md:text-xl mt-4 max-w-3xl mx-auto",
          dangerouslySetInnerHTML: { __html: xe(t.subtitle) }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "space-y-12 md:space-y-16", children: o.map((n, d) => {
      const h = n.logoHeight || "md", f = n.color || "", l = f.length > 0;
      return /* @__PURE__ */ a("div", { children: [
        d > 0 && /* @__PURE__ */ e("div", { className: "border-t border-[hsl(var(--ds-border-color))]/30 mb-10 md:mb-14" }),
        /* @__PURE__ */ e("div", { className: "text-center mb-8 md:mb-12", children: /* @__PURE__ */ a(
          "h3",
          {
            className: "text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase",
            style: l ? { color: f } : void 0,
            children: [
              !l && /* @__PURE__ */ e("span", { className: "text-foreground", children: n.name }),
              l && n.name
            ]
          }
        ) }),
        /* @__PURE__ */ e("div", { className: `grid gap-4 md:gap-6 ${Vn[h]}`, children: n.items.map((m, i) => {
          const c = /* @__PURE__ */ e(
            "div",
            {
              className: `glass-card flex items-center justify-center transition-all duration-300 hover:scale-[1.03] ${Ln[h]} ${l ? "ring-1 ring-opacity-40" : ""}`,
              style: l ? {
                boxShadow: `0 0 20px ${f}20, 0 0 40px ${f}10`,
                borderColor: `${f}40`
              } : void 0,
              children: m.logo ? /* @__PURE__ */ e(
                "img",
                {
                  src: m.logo,
                  alt: m.name || "Patrocinador",
                  className: `${Yt[h]} w-auto max-w-full object-contain`,
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ e("div", { className: `${Yt[h]} flex items-center justify-center text-muted-foreground text-sm`, children: m.name || "Logo" })
            }
          );
          return m.url ? /* @__PURE__ */ e(
            "a",
            {
              href: m.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "block hover:opacity-90 transition-opacity",
              children: c
            },
            `sponsor-${d}-${i}`
          ) : /* @__PURE__ */ e("div", { children: c }, `sponsor-${d}-${i}`);
        }) })
      ] }, `tier-${d}`);
    }) }),
    /* @__PURE__ */ e(K, { data: t.footerCta, lpKey: r, couponCode: s })
  ] }) });
});
Ra.displayName = "SponsorsV2";
const jn = ({ className: t }) => /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: t, children: /* @__PURE__ */ e("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }), $n = ({ data: t, lpKey: r }) => {
  if (!t?.enabled) return null;
  const s = `https://wa.me/${t.phoneNumber}?text=${encodeURIComponent(t.message || "")}`;
  return /* @__PURE__ */ a(
    "div",
    {
      className: C(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 group",
        !t.showOnMobile && "hidden md:flex"
      ),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: C(
              "bg-card/90 backdrop-blur-md text-foreground px-4 py-2 rounded-full font-semibold shadow-lg border border-border/20",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              !t.showLabelOnMobile && "hidden md:inline-block"
            ),
            children: t.label
          }
        ),
        /* @__PURE__ */ a(
          "a",
          {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "relative",
            children: [
              t.pulseEffect && /* @__PURE__ */ e("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" }),
              /* @__PURE__ */ e(
                "span",
                {
                  className: C(
                    "relative flex items-center justify-center",
                    "w-14 h-14 rounded-full",
                    "bg-[#25D366] hover:bg-[#1da851] text-white",
                    "shadow-[0_0_20px_rgba(37,211,102,0.5)]",
                    "hover:shadow-[0_0_30px_rgba(37,211,102,0.7)]",
                    "hover:scale-110 transition-all duration-300"
                  ),
                  children: /* @__PURE__ */ e(jn, { className: "h-7 w-7" })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, zn = ({ tracking: t, seo: r, lpKey: s }) => (Q(() => {
  if (!r) return;
  const o = (n, d, h) => {
    if (!d) return;
    const f = h ? "property" : "name";
    let l = document.querySelector(`meta[${f}="${n}"]`);
    l || (l = document.createElement("meta"), l.setAttribute(f, n), document.head.appendChild(l)), l.content = d;
  };
  return r.metaTitle && (document.title = r.metaTitle), r.metaDescription && o("description", r.metaDescription), r.ogTitle && o("og:title", r.ogTitle, !0), r.ogDescription && o("og:description", r.ogDescription, !0), r.ogImage && o("og:image", r.ogImage, !0), () => {
    ["og:title", "og:description", "og:image"].forEach((n) => {
      const d = document.querySelector(`meta[property="${n}"]`);
      d && d.remove();
    });
  };
}, [r]), Q(() => {
  if (!t || t.enabled === !1) return;
  const o = [], n = (d, h, f) => {
    if (document.getElementById(d)) return;
    const l = document.createElement("script");
    l.id = d, h && (l.src = h, l.async = !0), f && (l.textContent = f), document.head.appendChild(l), o.push(l);
  };
  return t.meta && n(
    `v2-meta-pixel-${s}`,
    void 0,
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${t.meta}');fbq('track','PageView');`
  ), t.ga && (n(`v2-ga4-lib-${s}`, `https://www.googletagmanager.com/gtag/js?id=${t.ga}`), n(
    `v2-ga4-init-${s}`,
    void 0,
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${t.ga}');`
  )), t.gtm && n(
    `v2-gtm-${s}`,
    void 0,
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${t.gtm}');`
  ), t.tiktok && n(
    `v2-tiktok-${s}`,
    void 0,
    `!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript";o.async=!0;o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${t.tiktok}');ttq.page();}(window,document,'ttq');`
  ), t.linkedin && n(
    `v2-linkedin-${s}`,
    void 0,
    `_linkedin_partner_id="${t.linkedin}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`
  ), () => {
    o.forEach((d) => d.remove());
  };
}, [t, s]), null), qa = "lp_exit_", Fn = (t, r) => {
  const s = `${qa}${t}_seen`;
  if (r === "session")
    return !sessionStorage.getItem(s);
  const o = localStorage.getItem(s);
  if (!o) return !0;
  const n = parseInt(o, 10);
  if (isNaN(n)) return !0;
  const d = Date.now();
  switch (r) {
    case "day":
      return d - n > 1440 * 60 * 1e3;
    case "week":
      return d - n > 10080 * 60 * 1e3;
    default:
      return !0;
  }
}, Rn = (t, r) => {
  const s = `${qa}${t}_seen`;
  r === "session" ? sessionStorage.setItem(s, Date.now().toString()) : localStorage.setItem(s, Date.now().toString());
}, Oa = $(({ data: t, coupon: r, lpKey: s }) => {
  const [o, n] = T(!1), [d, h] = T(!1), f = ce(!1), l = ce(null), m = j(() => {
    n(!1), f.current = !0, t && Rn(s, t.frequency), l.current && (document.removeEventListener("visibilitychange", l.current), l.current = null);
  }, [s, t]);
  if (Q(() => {
    if (!t?.enabled || !Fn(s, t.frequency)) return;
    const x = setTimeout(() => {
      h(!0);
    }, (t.delaySeconds || 5) * 1e3);
    return () => clearTimeout(x);
  }, [t, s]), Q(() => {
    if (!d || !t?.enabled) return;
    const x = (b) => {
      b.clientY <= 5 && !f.current && n(!0);
    }, p = () => {
      if (document.visibilityState === "hidden" && !f.current) {
        l.current && document.removeEventListener("visibilitychange", l.current);
        const b = () => {
          document.visibilityState === "visible" && !f.current && (n(!0), document.removeEventListener("visibilitychange", b), l.current = null);
        };
        l.current = b, document.addEventListener("visibilitychange", b);
      }
    };
    return document.addEventListener("mouseleave", x), document.addEventListener("visibilitychange", p), () => {
      document.removeEventListener("mouseleave", x), document.removeEventListener("visibilitychange", p), l.current && (document.removeEventListener("visibilitychange", l.current), l.current = null);
    };
  }, [d, t]), !t?.enabled || !o) return null;
  const i = Re(ke(t.ctaLink, s), r), c = !!t.imageUrl?.trim(), u = c && t.imagePosition === "left";
  return /* @__PURE__ */ a(
    "div",
    {
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
      onClick: m,
      children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" }),
        /* @__PURE__ */ a(
          "div",
          {
            className: `relative z-10 w-full bg-background border border-border/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300 ${u ? "max-w-2xl" : "max-w-lg"}`,
            onClick: (x) => x.stopPropagation(),
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: m,
                  className: "absolute top-4 right-4 z-20 p-2 rounded-full text-muted-foreground/70 hover:text-foreground hover:bg-muted/30 transition-colors",
                  children: /* @__PURE__ */ e(De, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ a("div", { className: u ? "grid grid-cols-1 md:grid-cols-[2fr_3fr]" : "", children: [
                c && /* @__PURE__ */ e("div", { className: `overflow-hidden ${u ? "hidden md:block h-full min-h-[280px]" : "w-full h-48 md:h-56"}`, children: /* @__PURE__ */ e(
                  "img",
                  {
                    src: t.imageUrl,
                    alt: "",
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "p-8 md:p-10", children: /* @__PURE__ */ a("div", { className: `space-y-5 ${u ? "" : "text-center"}`, children: [
                  /* @__PURE__ */ e("h3", { className: `text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight ${t.titleUppercase !== !1 ? "uppercase" : ""}`, children: xe(t.title) }),
                  /* @__PURE__ */ e("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed", children: xe(t.text) }),
                  /* @__PURE__ */ e(
                    "a",
                    {
                      href: i,
                      onClick: m,
                      className: "inline-block w-full py-5 rounded-full font-bold text-xl uppercase tracking-wide transition-all duration-300 bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:scale-[1.02] hover:shadow-[0_16px_40px_hsl(var(--ds-color-accent)/0.45)] text-center",
                      children: t.ctaText
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      onClick: m,
                      className: "text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-2 w-full",
                      children: t.dismissText || "Nao, obrigado"
                    }
                  )
                ] }) })
              ] })
            ]
          }
        )
      ]
    }
  );
});
Oa.displayName = "ExitIntentPopupV2";
const Jt = "lp_social_count_", Wa = $(({ data: t, lpKey: r }) => {
  const [s, o] = T(-1), [n, d] = T(!1), [h, f] = T(0), l = ce([]), m = t?.maxPerVisit || 5, i = (t?.intervalSeconds || 20) * 1e3, c = t?.position || "bottom-left", u = (t?.toastDuration || 4) * 1e3, x = j(() => {
    const w = `${Jt}${r}`, I = sessionStorage.getItem(w);
    return I ? parseInt(I, 10) : 0;
  }, [r]), p = j(() => {
    const w = `${Jt}${r}`, I = x() + 1;
    return sessionStorage.setItem(w, I.toString()), I;
  }, [r, x]);
  if (Q(() => {
    if (!t?.enabled || !t.items || t.items.length === 0) return;
    const w = x();
    if (f(w), w >= m) return;
    let I = 0;
    const S = () => {
      o(I % t.items.length), d(!0);
      const v = window.setTimeout(() => {
        d(!1);
      }, u);
      l.current.push(v), I++;
      const k = p();
      f(k), k >= m && clearInterval(y);
    }, _ = window.setTimeout(() => {
      S();
    }, i / 2), y = window.setInterval(() => {
      S();
    }, i);
    return () => {
      clearTimeout(_), clearInterval(y), l.current.forEach((v) => clearTimeout(v)), l.current = [];
    };
  }, [t, m, i, u, x, p]), !t?.enabled || !t.items || t.items.length === 0 || h >= m && !n || s < 0) return null;
  const b = t.items[s % t.items.length];
  return b ? /* @__PURE__ */ e(
    "div",
    {
      className: `fixed z-40 pointer-events-none ${c === "bottom-left" ? "bottom-6 left-4" : "bottom-6 right-4"}`,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: `pointer-events-auto transition-all duration-500 ease-out ${n ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
          children: /* @__PURE__ */ a("div", { className: "flex items-center gap-3 bg-background border border-border/50 rounded-xl shadow-lg px-4 py-3 max-w-xs backdrop-blur-md", children: [
            /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center", children: /* @__PURE__ */ e(wt, { className: "h-4 w-4 text-emerald-500" }) }),
            /* @__PURE__ */ e("div", { className: "min-w-0", children: b.message ? /* @__PURE__ */ e("p", { className: "text-sm text-foreground", children: b.message }) : /* @__PURE__ */ a(oe, { children: [
              /* @__PURE__ */ a("p", { className: "text-sm font-semibold text-foreground truncate", children: [
                b.name,
                " de ",
                b.city
              ] }),
              /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
                "Contratou o plano ",
                b.plan,
                " ",
                /* @__PURE__ */ a("span", { className: "opacity-70", children: [
                  "ha ",
                  b.timeAgo
                ] })
              ] })
            ] }) })
          ] })
        }
      )
    }
  ) : null;
});
Wa.displayName = "SocialProofToastV2";
const Ha = $(({ data: t, coupon: r, lpKey: s }) => {
  const [o, n] = T(!1), d = t?.scrollThreshold || 30;
  if (Q(() => {
    if (!t?.enabled) return;
    const l = () => {
      const m = document.documentElement.scrollHeight - window.innerHeight;
      if (m <= 0) {
        n(!1);
        return;
      }
      const i = window.scrollY / m * 100;
      n(i >= d);
    };
    return window.addEventListener("scroll", l, { passive: !0 }), l(), () => window.removeEventListener("scroll", l);
  }, [t?.enabled, d]), !t?.enabled) return null;
  const h = ke(t.link, s), f = Re(h, r);
  return /* @__PURE__ */ e(
    "div",
    {
      className: `fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${o ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`,
      children: /* @__PURE__ */ e("div", { className: "bg-background/95 backdrop-blur-md border-t border-border/30 px-4 py-3 safe-bottom", children: /* @__PURE__ */ e(
        "a",
        {
          href: f,
          className: "block w-full text-center py-3.5 rounded-full font-bold text-base transition-all duration-300 bg-[hsl(var(--ds-color-btn))] text-[hsl(var(--ds-color-btn-text))] hover:shadow-[0_8px_24px_hsl(var(--ds-color-accent)/0.4)] active:scale-[0.98]",
          children: t.text || "Contratar agora"
        }
      ) })
    }
  );
});
Ha.displayName = "StickyMobileCtaV2";
const Ua = $(({ data: t, footer: r }) => {
  if (!t?.enabled) return null;
  const s = t.logoUrl?.trim() || r?.logo?.trim() || r?.logoDesktop?.trim() || "", o = t.links || [];
  return /* @__PURE__ */ e("header", { className: "fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--ds-color-bg))]/6 backdrop-blur-[18px] border-b border-[hsl(var(--ds-border-color))]/30", children: /* @__PURE__ */ a("div", { className: "container mx-auto px-6 h-16 flex items-center justify-between", children: [
    s && /* @__PURE__ */ e("a", { href: "#", className: "flex items-center shrink-0", children: /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: "Logo",
        className: "h-10 w-auto object-contain transition-transform hover:scale-105"
      }
    ) }),
    o.length > 0 && /* @__PURE__ */ e("nav", { className: "hidden md:flex items-center gap-6", children: o.map((n, d) => /* @__PURE__ */ e(
      "a",
      {
        href: n.url,
        className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
        children: n.text
      },
      d
    )) })
  ] }) });
});
Ua.displayName = "GlobalMenuV2";
const qn = (t, r, s, o) => {
  const n = `section-${t}-${o}`, d = r.conversion?.couponCode;
  switch (t) {
    case "hero":
      return /* @__PURE__ */ e(jo, { data: r.hero, lpKey: s, couponCode: d }, n);
    case "benefits":
      return /* @__PURE__ */ e(zo, { data: r.benefits, lpKey: s, couponCode: d }, n);
    case "howItWorks":
      return /* @__PURE__ */ e(Fo, { data: r.howItWorks, lpKey: s, couponCode: d }, n);
    case "plans":
      return /* @__PURE__ */ e(Bo, { data: r.plans, lpKey: s, couponCode: d, conversion: r.conversion }, n);
    case "testimonials":
      return /* @__PURE__ */ e(Go, { data: r.testimonials, lpKey: s, couponCode: d }, n);
    case "kpis":
      return /* @__PURE__ */ e(Qo, { data: r.kpis, lpKey: s, couponCode: d }, n);
    case "about":
      return /* @__PURE__ */ e(Yo, { data: r.about, lpKey: s, couponCode: d }, n);
    case "contact":
      return /* @__PURE__ */ e(Zo, { data: r.contact, lpKey: s }, n);
    case "beforeAfter":
      return /* @__PURE__ */ e(Ko, { data: r.beforeAfter, lpKey: s, couponCode: d }, n);
    case "process":
      return /* @__PURE__ */ e(en, { data: r.process, lpKey: s, couponCode: d }, n);
    case "services":
      return /* @__PURE__ */ e(tn, { data: r.services, lpKey: s, couponCode: d }, n);
    case "video":
      return /* @__PURE__ */ e(rn, { data: r.video, lpKey: s, couponCode: d }, n);
    case "videoCarousel":
      return /* @__PURE__ */ e(dn, { data: r.videoCarousel, lpKey: s, couponCode: d }, n);
    case "whyChoose":
      return /* @__PURE__ */ e(mn, { data: r.whyChoose, lpKey: s, couponCode: d }, n);
    case "ctaFinal":
      return /* @__PURE__ */ e(un, { data: r.ctaFinal, lpKey: s, couponCode: d, conversion: r.conversion }, n);
    case "faq":
      return /* @__PURE__ */ e(gn, { data: r.faq, lpKey: s, couponCode: d }, n);
    case "forWhom":
      return /* @__PURE__ */ e(fn, { data: r.forWhom, lpKey: s, couponCode: d }, n);
    case "form":
      return /* @__PURE__ */ e(Mn, { data: r.form, lpKey: s, couponCode: d }, n);
    case "speakers":
      return /* @__PURE__ */ e(Fa, { data: r.speakers, lpKey: s, couponCode: d }, n);
    case "sponsors":
      return /* @__PURE__ */ e(Ra, { data: r.sponsors, lpKey: s, couponCode: d }, n);
    default:
      return console.warn(`[CMS-V2] Seção desconhecida: ${t}`), null;
  }
}, On = () => {
  const { content: t, lpKey: r, isLoading: s, error: o } = Mo(), [n, d] = T(null);
  if (Q(() => {
    St().then(d);
  }, []), s && !t)
    return /* @__PURE__ */ e("div", { className: "flex items-center justify-center min-h-screen bg-background", children: /* @__PURE__ */ a("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ e("div", { className: "h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
      /* @__PURE__ */ e("p", { className: "text-muted-foreground text-sm", children: "Carregando..." })
    ] }) });
  if (o || !t)
    return console.error("[CMS-V2] Erro ao carregar:", o), /* @__PURE__ */ e(bt, { to: "/404", replace: !0 });
  const h = t.sectionOrder || [], f = t.design?.gradient, l = f?.from && f?.to ? { background: `linear-gradient(to bottom, ${f.from}, ${f.to})` } : void 0, m = t.globalMenu?.enabled;
  return /* @__PURE__ */ a("main", { className: "min-h-screen", style: l, children: [
    /* @__PURE__ */ e(
      zn,
      {
        tracking: Vo(t.tracking, n),
        seo: t.seo,
        lpKey: r
      }
    ),
    m && /* @__PURE__ */ e(Ua, { data: t.globalMenu, footer: t.footer }),
    /* @__PURE__ */ e("div", { className: m ? "pt-16" : "", children: h.map((i, c) => qn(i, t, r, c)) }),
    /* @__PURE__ */ e(xn, { data: t.footer, lpKey: r }),
    /* @__PURE__ */ e($n, { data: t.floatingWhatsapp, lpKey: r }),
    /* @__PURE__ */ e(Oa, { data: t.conversion?.exitIntent, coupon: t.conversion?.couponCode, lpKey: r }),
    /* @__PURE__ */ e(Wa, { data: t.conversion?.socialProof, lpKey: r }),
    /* @__PURE__ */ e(Ha, { data: t.floatingWhatsapp?.stickyCta, coupon: t.conversion?.couponCode, lpKey: r })
  ] });
};
function Li() {
  const { slug: t } = ra();
  return t ? /* @__PURE__ */ e(Io, { lpKey: t, children: /* @__PURE__ */ e(On, {}) }) : /* @__PURE__ */ e(bt, { to: "/404", replace: !0 });
}
const Se = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e("div", { ref: s, className: C("rounded-xl bg-card text-card-foreground shadow-sm", t), ...r }));
Se.displayName = "Card";
const Xe = A.forwardRef(
  ({ className: t, ...r }, s) => /* @__PURE__ */ e("div", { ref: s, className: C("flex flex-col space-y-1.5 p-6", t), ...r })
);
Xe.displayName = "CardHeader";
const Ge = A.forwardRef(
  ({ className: t, ...r }, s) => /* @__PURE__ */ e("h3", { ref: s, className: C("text-2xl font-semibold leading-none tracking-tight", t), ...r })
);
Ge.displayName = "CardTitle";
const Ba = A.forwardRef(
  ({ className: t, ...r }, s) => /* @__PURE__ */ e("p", { ref: s, className: C("text-sm text-muted-foreground", t), ...r })
);
Ba.displayName = "CardDescription";
const Ee = A.forwardRef(
  ({ className: t, ...r }, s) => /* @__PURE__ */ e("div", { ref: s, className: C("p-6 pt-0", t), ...r })
);
Ee.displayName = "CardContent";
const Wn = A.forwardRef(
  ({ className: t, ...r }, s) => /* @__PURE__ */ e("div", { ref: s, className: C("flex items-center p-6 pt-0", t), ...r })
);
Wn.displayName = "CardFooter";
const Hn = et(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Variante para badges de status - sem hover effect, cores via className
        status: "border-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), re = A.forwardRef(
  ({ className: t, variant: r, ...s }, o) => /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: C(Hn({ variant: r }), t),
      ...s
    }
  )
);
re.displayName = "Badge";
const We = H.Root, Un = H.Trigger, Bn = H.Portal, Xn = H.Close, Xa = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  H.Overlay,
  {
    ref: s,
    className: C(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...r
  }
));
Xa.displayName = H.Overlay.displayName;
const Zt = (t) => t instanceof HTMLElement ? !!(t.closest("[data-radix-popper-content-wrapper]") || t.closest("[data-radix-select-content]") || t.closest("[data-radix-dropdown-menu-content]") || t.closest("[data-radix-menubar-content]") || t.closest("[data-radix-popover-content]") || t.closest("[data-radix-context-menu-content]")) : !1, Le = A.forwardRef(({ className: t, children: r, ...s }, o) => {
  const n = (h) => {
    Zt(h.target) && h.preventDefault();
  }, d = (h) => {
    Zt(h.target) && h.preventDefault();
  };
  return /* @__PURE__ */ e(Bn, { children: /* @__PURE__ */ a("div", { className: "theme-admin", children: [
    /* @__PURE__ */ e(Xa, {}),
    /* @__PURE__ */ a(
      H.Content,
      {
        ref: o,
        onInteractOutside: n,
        onPointerDownOutside: d,
        className: C(
          "fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-card border border-border p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg text-foreground",
          t
        ),
        ...s,
        children: [
          r,
          /* @__PURE__ */ a(H.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-foreground/70 hover:text-foreground", children: [
            /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
            /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] }) });
});
Le.displayName = H.Content.displayName;
const Ve = ({ className: t, ...r }) => /* @__PURE__ */ e("div", { className: C("flex flex-col space-y-1.5 text-center sm:text-left", t), ...r });
Ve.displayName = "DialogHeader";
const je = ({ className: t, ...r }) => /* @__PURE__ */ e("div", { className: C("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...r });
je.displayName = "DialogFooter";
const $e = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  H.Title,
  {
    ref: s,
    className: C("text-lg font-semibold leading-none tracking-tight text-foreground", t),
    ...r
  }
));
$e.displayName = H.Title.displayName;
const Qe = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(H.Description, { ref: s, className: C("text-sm text-muted-foreground", t), ...r }));
Qe.displayName = H.Description.displayName;
const Gn = G.Root, Qn = G.Trigger, Yn = A.forwardRef(({ className: t, inset: r, children: s, ...o }, n) => /* @__PURE__ */ a(
  G.SubTrigger,
  {
    ref: n,
    className: C(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      r && "pl-8",
      t
    ),
    ...o,
    children: [
      s,
      /* @__PURE__ */ e(Ct, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Yn.displayName = G.SubTrigger.displayName;
const Jn = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  G.SubContent,
  {
    ref: s,
    className: C(
      "z-[200] min-w-[8rem] overflow-hidden rounded-md bg-card border border-border text-foreground p-1 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
));
Jn.displayName = G.SubContent.displayName;
const Ga = A.forwardRef(({ className: t, sideOffset: r = 4, ...s }, o) => /* @__PURE__ */ e(G.Portal, { children: /* @__PURE__ */ e("div", { className: "theme-admin", children: /* @__PURE__ */ e(
  G.Content,
  {
    ref: o,
    sideOffset: r,
    className: C(
      "z-[200] min-w-[8rem] overflow-hidden rounded-md bg-card border border-border text-foreground p-1 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...s
  }
) }) }));
Ga.displayName = G.Content.displayName;
const Ne = A.forwardRef(({ className: t, inset: r, ...s }, o) => /* @__PURE__ */ e(
  G.Item,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-white/10 focus:text-foreground hover:bg-white/10",
      r && "pl-8",
      t
    ),
    ...s
  }
));
Ne.displayName = G.Item.displayName;
const Zn = A.forwardRef(({ className: t, children: r, checked: s, ...o }, n) => /* @__PURE__ */ a(
  G.CheckboxItem,
  {
    ref: n,
    className: C(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: s,
    ...o,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(G.ItemIndicator, { children: /* @__PURE__ */ e(ue, { className: "h-4 w-4" }) }) }),
      r
    ]
  }
));
Zn.displayName = G.CheckboxItem.displayName;
const Kn = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ a(
  G.RadioItem,
  {
    ref: o,
    className: C(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(G.ItemIndicator, { children: /* @__PURE__ */ e(ua, { className: "h-2 w-2 fill-current" }) }) }),
      r
    ]
  }
));
Kn.displayName = G.RadioItem.displayName;
const el = A.forwardRef(({ className: t, inset: r, ...s }, o) => /* @__PURE__ */ e(
  G.Label,
  {
    ref: o,
    className: C("px-2 py-1.5 text-sm font-semibold", r && "pl-8", t),
    ...s
  }
));
el.displayName = G.Label.displayName;
const ft = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(G.Separator, { ref: s, className: C("-mx-1 my-1 h-px bg-muted", t), ...r }));
ft.displayName = G.Separator.displayName;
const tl = {
  table: "7xl",
  dashboard: "7xl",
  form: "4xl",
  detail: "6xl",
  editor: "full"
}, al = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full"
};
function sl({
  children: t,
  type: r,
  maxWidth: s,
  className: o
}) {
  const n = s || (r ? tl[r] : "7xl");
  return /* @__PURE__ */ e(
    "div",
    {
      className: C(
        "p-4 md:p-8 w-full",
        al[n],
        "mx-auto",
        o
      ),
      children: t
    }
  );
}
const rl = {
  accent: "text-accent bg-accent/10",
  primary: "text-primary bg-primary/10",
  muted: "text-muted-foreground bg-muted"
};
function ol({
  title: t,
  description: r,
  icon: s,
  iconColor: o = "accent",
  badge: n,
  actions: d,
  className: h,
  backButton: f
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: C(
        "flex flex-col md:flex-row md:items-center justify-between gap-4",
        h
      ),
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
          f,
          s && /* @__PURE__ */ e("div", { className: C("p-3 rounded-xl", rl[o]), children: /* @__PURE__ */ e(s, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("h1", { className: "text-2xl md:text-3xl font-bold text-foreground", children: t }),
              n
            ] }),
            r && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-0.5", children: r })
          ] })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "flex items-center gap-2 flex-shrink-0", children: d })
      ]
    }
  );
}
const nl = H.Root, ll = H.Close, il = H.Portal, Qa = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  H.Overlay,
  {
    className: C(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...r,
    ref: s
  }
));
Qa.displayName = H.Overlay.displayName;
const cl = et(
  "fixed z-[100] gap-4 bg-card border-border text-foreground p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Ya = A.forwardRef(
  ({ side: t = "right", className: r, children: s, hideCloseButton: o = !1, ...n }, d) => /* @__PURE__ */ e(il, { children: /* @__PURE__ */ a("div", { className: "theme-admin", children: [
    /* @__PURE__ */ e(Qa, {}),
    /* @__PURE__ */ a(H.Content, { ref: d, className: C(cl({ side: t }), r), ...n, children: [
      s,
      !o && /* @__PURE__ */ a(H.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-foreground", children: [
        /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] }) })
);
Ya.displayName = H.Content.displayName;
const Ja = ({ className: t, ...r }) => /* @__PURE__ */ e("div", { className: C("flex flex-col space-y-2 text-center sm:text-left", t), ...r });
Ja.displayName = "SheetHeader";
const Za = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(H.Title, { ref: s, className: C("text-lg font-semibold text-foreground", t), ...r }));
Za.displayName = H.Title.displayName;
const dl = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(H.Description, { ref: s, className: C("text-sm text-muted-foreground", t), ...r }));
dl.displayName = H.Description.displayName;
const Ka = ({ open: t, onOpenChange: r, slug: s, lpName: o }) => {
  const [n, d] = T("desktop"), [h, f] = T(0), l = `/l/${s}`;
  return /* @__PURE__ */ e(nl, { open: t, onOpenChange: r, children: /* @__PURE__ */ a(
    Ya,
    {
      side: "right",
      hideCloseButton: !0,
      className: "w-full sm:max-w-[90vw] lg:max-w-[80vw] p-0 bg-background border-l border-border overflow-hidden",
      children: [
        /* @__PURE__ */ e(Ja, { className: "p-4 border-b border-border bg-white/5 backdrop-blur-xl", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a(Za, { className: "text-foreground text-lg font-semibold", children: [
            "Preview: ",
            o || s
          ] }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 p-1 bg-muted/30 rounded-lg", children: [
            /* @__PURE__ */ a(
              D,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => d("desktop"),
                className: `rounded-md px-4 h-9 font-medium transition-all duration-200 ${n === "desktop" ? "bg-white text-black shadow-md" : "text-white/70 hover:text-white hover:bg-white/10"}`,
                children: [
                  /* @__PURE__ */ e(yr, { className: "w-4 h-4 mr-2" }),
                  "Desktop"
                ]
              }
            ),
            /* @__PURE__ */ a(
              D,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => d("mobile"),
                className: `rounded-md px-4 h-9 font-medium transition-all duration-200 ${n === "mobile" ? "bg-white text-black shadow-md" : "text-white/70 hover:text-white hover:bg-white/10"}`,
                children: [
                  /* @__PURE__ */ e(ha, { className: "w-4 h-4 mr-2" }),
                  "Mobile"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              D,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  f((i) => i + 1);
                },
                className: "h-9 w-9 rounded-full text-white/70 hover:text-white hover:bg-white/10",
                title: "Atualizar preview",
                children: /* @__PURE__ */ e(ga, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ e(ll, { asChild: !0, children: /* @__PURE__ */ e(
              D,
              {
                variant: "ghost",
                size: "icon",
                className: "h-9 w-9 rounded-full text-white/70 hover:text-white hover:bg-white/10",
                title: "Fechar preview",
                children: /* @__PURE__ */ e(De, { className: "w-4 h-4" })
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "h-[calc(100vh-80px)] overflow-auto bg-background/80 backdrop-blur-xl flex justify-center p-6", children: /* @__PURE__ */ e(
          "div",
          {
            className: `transition-all duration-300 h-full ${n === "mobile" ? "w-[375px]" : "w-full"}`,
            children: n === "mobile" ? /* @__PURE__ */ a(
              "div",
              {
                className: "h-full flex flex-col border-[8px] border-black rounded-[3rem] shadow-2xl overflow-hidden bg-black",
                style: {
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(255,255,255,0.05)"
                },
                children: [
                  /* @__PURE__ */ e("div", { className: "w-full h-7 bg-black flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e("div", { className: "w-24 h-6 bg-black rounded-full border border-white/10" }) }),
                  /* @__PURE__ */ e("div", { className: "flex-1 overflow-hidden bg-white", children: /* @__PURE__ */ e(
                    "iframe",
                    {
                      src: l,
                      className: "w-full h-full border-0",
                      title: `Preview Mobile: ${o || s}`
                    },
                    `mobile-${h}`
                  ) })
                ]
              }
            ) : (
              /* Desktop View */
              /* @__PURE__ */ e("div", { className: "h-full rounded-lg overflow-hidden shadow-xl", children: /* @__PURE__ */ e(
                "iframe",
                {
                  src: l,
                  className: "w-full h-full border-0",
                  title: `Preview Desktop: ${o || s}`
                },
                `desktop-${h}`
              ) })
            )
          }
        ) })
      ]
    }
  ) });
};
function es(t, r, s = 300) {
  const [o, n] = T(t), d = ce(!1), h = ce(t);
  Q(() => {
    t !== h.current && !d.current && n(t), h.current = t, d.current = !1;
  }, [t]), Q(() => {
    if (o === t) return;
    const l = setTimeout(() => {
      d.current = !0, r(o);
    }, s);
    return () => clearTimeout(l);
  }, [o, s, r, t]);
  const f = j((l) => {
    n(l);
  }, []);
  return [o, f];
}
const N = $(({
  value: t,
  onDebouncedChange: r,
  debounceMs: s = 300,
  ...o
}) => {
  const [n, d] = es(
    t ?? "",
    r,
    s
  );
  return /* @__PURE__ */ e(
    W,
    {
      ...o,
      value: n,
      onChange: (h) => d(h.target.value)
    }
  );
});
N.displayName = "DebouncedInputV2";
const ml = {
  meta: { regex: /^\d{15,16}$/, label: "Meta Pixel", example: "966889988243951" },
  ga: { regex: /^G-[A-Z0-9]{8,12}$/i, label: "Google Analytics", example: "G-XXXXXXXXXX" },
  gtm: { regex: /^GTM-[A-Z0-9]{6,8}$/i, label: "Google Tag Manager", example: "GTM-XXXXXXX" },
  tiktok: { regex: /^[A-Z0-9]{10,25}$/i, label: "TikTok Pixel", example: "CXXXXXXXXXXXXXXXXX" },
  linkedin: { regex: /^\d{5,10}$/, label: "LinkedIn Insight", example: "1234567" }
};
function pt(t, r) {
  if (!r || !r.trim())
    return { status: "empty", message: "Não configurado" };
  if (r !== r.trim())
    return { status: "warning", message: "Contém espaços — remova manualmente" };
  const s = ml[t];
  return s.regex.test(r) ? { status: "valid", message: "✓ Formato válido" } : { status: "error", message: `Formato inválido. Ex: ${s.example}` };
}
function ul(t) {
  switch (t) {
    case "valid":
      return "text-green-400 bg-green-500/20 border-green-500/30";
    case "warning":
      return "text-amber-400 bg-amber-500/20 border-amber-500/30";
    case "error":
      return "text-red-400 bg-red-500/20 border-red-500/30";
    case "empty":
      return "text-muted-foreground bg-muted/30 border-border/20";
  }
}
function ts(t) {
  switch (t) {
    case "valid":
      return "bg-green-500";
    case "warning":
      return "bg-amber-500";
    case "error":
      return "bg-red-500";
    case "empty":
      return "bg-white/30";
  }
}
const Je = [
  { key: "meta", label: "Meta Pixel (Facebook/Instagram)", placeholder: "Ex: 966889988243951" },
  { key: "ga", label: "Google Analytics (GA4)", placeholder: "Ex: G-XXXXXXXXXX" },
  { key: "gtm", label: "Google Tag Manager", placeholder: "Ex: GTM-XXXXXXX" },
  { key: "tiktok", label: "TikTok Pixel", placeholder: "Ex: CXXXXXXXXXXXXXXXXX" },
  { key: "linkedin", label: "LinkedIn Insight", placeholder: "Ex: 1234567" }
], hl = {
  enabled: !0,
  meta: "",
  ga: "",
  gtm: "",
  tiktok: "",
  linkedin: ""
}, as = $(() => {
  const [t, r] = T(hl), [s, o] = T(!1), [n, d] = T(!0), [h, f] = T([]), [l, m] = T(!1);
  Q(() => {
    (async () => {
      d(!0);
      const [p, b] = await Promise.all([
        St(),
        Sa()
      ]);
      p && r(p);
      const w = b.filter((I) => I.lp_key !== "global-v2").filter((I) => {
        const S = I.content?.tracking;
        return !S || !S.enabled ? !1 : !!(S.meta?.trim() || S.ga?.trim() || S.gtm?.trim() || S.tiktok?.trim() || S.linkedin?.trim());
      }).map((I) => I.name || I.lp_key);
      f(w), d(!1);
    })();
  }, []);
  const i = j((x, p) => {
    r((b) => ({ ...b, [x]: p })), m(!0);
  }, []), c = async () => {
    o(!0), await Eo(t) ? (F.success("Pixels globais salvos!"), m(!1)) : F.error("Erro ao salvar pixels globais"), o(!1);
  }, u = Je.some((x) => t[x.key]?.trim());
  return n ? /* @__PURE__ */ e("div", { className: "bg-card rounded-2xl p-6", children: /* @__PURE__ */ a("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
    /* @__PURE__ */ e(ge, { className: "h-5 w-5 animate-spin" }),
    /* @__PURE__ */ e("span", { className: "text-sm", children: "Carregando pixels globais..." })
  ] }) }) : /* @__PURE__ */ a("div", { className: "bg-card rounded-2xl p-6 space-y-5", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ e(wr, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-foreground", children: "Pixels Globais" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Aplicados a todas as LPs (individual sobrescreve)" })
        ] })
      ] }),
      /* @__PURE__ */ a(
        D,
        {
          size: "sm",
          onClick: c,
          disabled: s || !l,
          className: "gap-1.5",
          children: [
            s ? /* @__PURE__ */ e(ge, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ e(fa, { className: "h-3.5 w-3.5" }),
            s ? "Salvando..." : "Salvar"
          ]
        }
      )
    ] }),
    h.length > 0 ? /* @__PURE__ */ a("div", { className: "flex items-start gap-2 px-3 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20", children: [
      /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" }),
      /* @__PURE__ */ a("p", { className: "text-xs text-blue-400", children: [
        /* @__PURE__ */ e("span", { className: "font-medium", children: "LPs com tracking individual:" }),
        " ",
        h.join(", ")
      ] })
    ] }) : u ? /* @__PURE__ */ a("div", { className: "flex items-center gap-2 px-3 py-2.5 rounded-lg bg-green-500/10 border border-green-500/20", children: [
      /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-green-500 shrink-0" }),
      /* @__PURE__ */ e("p", { className: "text-xs text-green-400", children: "Pixels globais ativos em todas as LPs" })
    ] }) : /* @__PURE__ */ a("div", { className: "flex items-center gap-2 px-3 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20", children: [
      /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-amber-500 shrink-0" }),
      /* @__PURE__ */ e("p", { className: "text-xs text-amber-400", children: "Nenhum pixel global configurado" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Je.map(({ key: x, label: p, placeholder: b }) => {
      const w = t[x] || "", I = pt(x, w);
      return /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ e(g, { className: "text-xs text-foreground", children: p }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            N,
            {
              value: w,
              onDebouncedChange: (S) => i(x, S),
              placeholder: b,
              className: "input-admin font-mono flex-1 text-sm"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `w-3 h-3 rounded-full shrink-0 ${ts(I.status)}`,
              title: I.message
            }
          )
        ] }),
        /* @__PURE__ */ e("p", { className: `text-[11px] ${I.status === "valid" ? "text-green-400" : I.status === "warning" ? "text-amber-400" : I.status === "error" ? "text-red-400" : "text-muted-foreground/50"}`, children: I.message })
      ] }, x);
    }) })
  ] });
});
as.displayName = "GlobalTrackingPanelV2";
const He = { version: "v1", lp_ref: "lp01" };
async function Kt() {
  try {
    const { data: t, error: r } = await B.from("bd_site_homepage").select("version, lp_ref").limit(1).maybeSingle();
    if (r || !t)
      return console.warn("[Homepage] Fallback para config padrão:", r?.message), He;
    const s = t.version, o = t.lp_ref;
    return s !== "v1" && s !== "v2" || !o?.trim() ? He : { version: s, lp_ref: o };
  } catch (t) {
    return console.error("[Homepage] Erro crítico no fetch:", t), He;
  }
}
async function gl(t, r) {
  try {
    if (t === "v2") {
      const { data: o, error: n } = await B.from("bd_cms_lp_v2").select("lp_key, status").eq("lp_key", r).maybeSingle();
      if (n || !o)
        return console.error("[Homepage] LP V2 não encontrada:", r), !1;
      if (o.status !== "active")
        return console.error("[Homepage] LP V2 não está ativa:", r, o.status), !1;
    }
    const { data: s } = await B.from("bd_site_homepage").select("id").limit(1).maybeSingle();
    if (s?.id) {
      const { error: o } = await B.from("bd_site_homepage").update({
        version: t,
        lp_ref: r,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", s.id);
      if (o)
        return console.error("[Homepage] Erro ao atualizar:", o), !1;
    } else {
      const { error: o } = await B.from("bd_site_homepage").insert({
        version: t,
        lp_ref: r,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (o)
        return console.error("[Homepage] Erro ao inserir:", o), !1;
    }
    return !0;
  } catch (s) {
    return console.error("[Homepage] Erro crítico no setHomepage:", s), !1;
  }
}
const fl = {
  active: "bg-green-500/10 text-green-500 border-green-500/20",
  draft: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  archived: "bg-gray-500/10 text-gray-400 border-gray-500/20"
}, ea = {
  active: "Ativo",
  draft: "Rascunho",
  archived: "Arquivado"
};
function pl({ lp: t, onSave: r }) {
  const [s, o] = T(!1), [n, d] = T(t.slug), [h, f] = T(!1), l = `${window.location.origin}/l/${t.slug}`, m = async () => {
    const c = n.toLowerCase().replace(/[^a-z0-9-]/g, "");
    if (!c || c === t.slug) {
      d(t.slug), o(!1);
      return;
    }
    f(!0), await r(c), f(!1), o(!1);
  }, i = async () => {
    try {
      await navigator.clipboard.writeText(l), F.success("Link copiado!");
    } catch {
      F.error("Erro ao copiar");
    }
  };
  return /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground font-mono", children: "/l/" }),
      s ? /* @__PURE__ */ e("div", { className: "flex items-center gap-1 flex-1", children: /* @__PURE__ */ e(
        W,
        {
          value: n,
          onChange: (c) => d(c.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")),
          onKeyDown: (c) => c.key === "Enter" && m(),
          onBlur: m,
          disabled: h,
          className: "h-6 text-xs font-mono px-1.5 py-0",
          autoFocus: !0
        }
      ) }) : /* @__PURE__ */ a(oe, { children: [
        /* @__PURE__ */ e("span", { className: "text-xs text-foreground font-mono font-medium", children: t.slug }),
        /* @__PURE__ */ e(
          D,
          {
            variant: "ghost",
            size: "icon",
            className: "h-5 w-5 text-muted-foreground hover:text-foreground",
            onClick: () => {
              d(t.slug), o(!0);
            },
            children: /* @__PURE__ */ e(xa, { className: "h-3 w-3" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "text-[11px] text-muted-foreground/70 font-mono truncate max-w-[200px]", children: l }),
      /* @__PURE__ */ e(
        D,
        {
          variant: "ghost",
          size: "icon",
          className: "h-5 w-5 text-muted-foreground hover:text-accent shrink-0",
          onClick: i,
          title: "Copiar link",
          children: /* @__PURE__ */ e(mt, { className: "h-3 w-3" })
        }
      )
    ] })
  ] });
}
function xl(t) {
  if (!t) return "";
  const r = new Date(t), o = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), n = Math.floor(o / 6e4), d = Math.floor(o / 36e5), h = Math.floor(o / 864e5);
  return n < 1 ? "agora mesmo" : n < 60 ? `há ${n}min` : d < 24 ? `há ${d}h` : h < 7 ? `há ${h}d` : r.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" });
}
function Vi() {
  const [t, r] = T([]), [s, o] = T(!0), [n, d] = T(!1), [h, f] = T({ name: "", slug: "", lp_key: "" }), [l, m] = T(!1), [i, c] = T(null), [u, x] = T({ name: "", slug: "", lp_key: "" }), [p, b] = T(!1), [w, I] = T(null), [S, _] = T(""), [y, v] = T(!1), [k, E] = T(null), [L, V] = T(!1), [z, U] = T(null), [se, he] = T(null), [be, qe] = T(!1), ve = async () => {
    o(!0);
    const [P, q] = await Promise.all([
      Sa(),
      Kt()
    ]);
    r(P), he(q), o(!1);
  };
  Q(() => {
    ve();
  }, []);
  const Rt = t.filter((P) => P.lp_key !== "global-v2"), Rs = async () => {
    if (!h.name || !h.slug || !h.lp_key) {
      F.error("Preencha todos os campos");
      return;
    }
    d(!0);
    const P = vo();
    await Do({
      lp_key: h.lp_key,
      name: h.name,
      slug: h.slug,
      status: "draft",
      content: P
    }) ? (F.success("LP criada com sucesso!"), f({ name: "", slug: "", lp_key: "" }), m(!1), ve()) : F.error("Erro ao criar LP"), d(!1);
  }, at = async (P, q) => {
    await So(P, q) ? (F.success(`Status alterado para ${ea[q]}`), ve()) : F.error("Erro ao alterar status");
  }, qs = async (P, q) => {
    const Te = t.find((Xs) => Xs.lp_key === P);
    if (!Te) return;
    await Wt(P, { name: Te.name, slug: q }) ? (F.success("Slug atualizado!"), ve()) : F.error("Erro ao atualizar slug");
  }, Os = async () => {
    if (!k || !k.name || !k.slug) return;
    V(!0), await Wt(k.lp_key, {
      name: k.name,
      slug: k.slug
    }) ? (F.success("Configurações atualizadas!"), E(null), ve()) : F.error("Erro ao atualizar configurações"), V(!1);
  }, Ws = async () => {
    if (!i || !u.name || !u.slug || !u.lp_key) {
      F.error("Preencha todos os campos");
      return;
    }
    b(!0), await ko(
      i.lp_key,
      u.lp_key,
      u.name,
      u.slug
    ) ? (F.success(`LP duplicada com sucesso! Nova: ${u.lp_key}`), c(null), x({ name: "", slug: "", lp_key: "" }), ve()) : F.error("Erro ao duplicar LP. Verifique se o lp_key/slug já existe."), b(!1);
  }, Hs = async (P) => {
    if (qe(!0), await gl("v2", P)) {
      F.success("Página principal atualizada!");
      const Te = await Kt();
      he(Te);
    } else
      F.error("Erro ao definir página principal. Verifique se a LP está ativa.");
    qe(!1);
  }, st = (P) => se?.version === "v2" && se?.lp_ref === P.lp_key, Us = (P) => {
    c(P), x({
      name: `${P.name} (Cópia)`,
      slug: `${P.slug}-copy`,
      lp_key: `${P.lp_key}-copy`
    });
  }, Bs = async () => {
    if (!w) return;
    if (st(w)) {
      F.error("Esta LP é a página principal. Defina outra LP como principal antes de excluir."), v(!1);
      return;
    }
    v(!0), await Co(w.lp_key) ? (F.success(`LP "${w.name}" excluída com sucesso`), I(null), _(""), ve()) : F.error("Erro ao excluir LP"), v(!1);
  };
  return /* @__PURE__ */ a(sl, { type: "dashboard", children: [
    /* @__PURE__ */ a("div", { className: "space-y-6", children: [
      /* @__PURE__ */ e(
        ol,
        {
          icon: Cr,
          title: "Landing Pages V2",
          description: "Gerencie suas landing pages com arquitetura linear",
          actions: /* @__PURE__ */ a(We, { open: l, onOpenChange: m, children: [
            /* @__PURE__ */ e(Un, { asChild: !0, children: /* @__PURE__ */ a(D, { className: "gap-2", children: [
              /* @__PURE__ */ e(J, { className: "h-4 w-4" }),
              "Nova LP"
            ] }) }),
            /* @__PURE__ */ a(Le, { children: [
              /* @__PURE__ */ a(Ve, { children: [
                /* @__PURE__ */ a($e, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(kr, { className: "h-5 w-5 text-primary" }),
                  "Criar Nova Landing Page"
                ] }),
                /* @__PURE__ */ e(Qe, { children: "A LP será criada como rascunho com todas as seções ativadas e prontas para editar." })
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-4 py-4", children: [
                /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ e(g, { htmlFor: "name", children: "Nome da LP" }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      id: "name",
                      placeholder: "Ex: LP 04 - Campanha Verão",
                      value: h.name,
                      onChange: (P) => f((q) => ({ ...q, name: P.target.value }))
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ e(g, { htmlFor: "lp_key", children: "Chave Interna (lp_key)" }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      id: "lp_key",
                      placeholder: "Ex: lp04",
                      value: h.lp_key,
                      onChange: (P) => f((q) => ({ ...q, lp_key: P.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") }))
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ e(g, { htmlFor: "slug", children: "Slug (URL)" }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      id: "slug",
                      placeholder: "Ex: campanha-verao",
                      value: h.slug,
                      onChange: (P) => f((q) => ({ ...q, slug: P.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") }))
                    }
                  ),
                  /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
                    "URL: /l/",
                    h.slug || "slug"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ a(je, { children: [
                /* @__PURE__ */ e(Xn, { asChild: !0, children: /* @__PURE__ */ e(D, { variant: "outline", children: "Cancelar" }) }),
                /* @__PURE__ */ e(D, { onClick: Rs, disabled: n, children: n ? "Criando..." : "Criar LP" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e(as, {}),
      s ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ e(ge, { className: "h-8 w-8 animate-spin text-primary" }) }) : Rt.length === 0 ? /* @__PURE__ */ e(Se, { children: /* @__PURE__ */ a(Ee, { className: "flex flex-col items-center justify-center py-12", children: [
        /* @__PURE__ */ e(Dr, { className: "h-12 w-12 text-muted-foreground mb-4" }),
        /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: "Nenhuma LP encontrada" })
      ] }) }) : /* @__PURE__ */ e("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: Rt.map((P) => /* @__PURE__ */ e(Se, { className: "group hover:shadow-md transition-all duration-200 hover:border-accent/20", children: /* @__PURE__ */ a(Ee, { className: "p-5 space-y-4", children: [
        /* @__PURE__ */ a("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ a("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-foreground truncate", children: P.name }),
            /* @__PURE__ */ e("span", { className: "text-[11px] text-muted-foreground/60 font-mono", children: P.lp_key })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children: [
            st(P) && /* @__PURE__ */ a(re, { variant: "outline", className: "text-[11px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 gap-1", children: [
              /* @__PURE__ */ e(dt, { className: "h-3 w-3" }),
              "Principal"
            ] }),
            /* @__PURE__ */ e(re, { variant: "outline", className: `text-[11px] px-2 py-0.5 ${fl[P.status]}`, children: ea[P.status] }),
            P.updated_at && /* @__PURE__ */ e("span", { className: "text-[10px] text-muted-foreground/50", title: new Date(P.updated_at).toLocaleString("pt-BR"), children: xl(P.updated_at) })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "bg-muted/20 rounded-lg px-3 py-2.5", children: /* @__PURE__ */ e(
          pl,
          {
            lp: P,
            onSave: (q) => qs(P.lp_key, q)
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 pt-1", children: [
          /* @__PURE__ */ a(
            D,
            {
              variant: "ghost",
              size: "sm",
              className: "flex-1 h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground",
              onClick: () => U(P),
              children: [
                /* @__PURE__ */ e(pa, { className: "h-3.5 w-3.5" }),
                "Preview"
              ]
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              asChild: !0,
              variant: "ghost",
              size: "sm",
              className: "flex-1 h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground",
              children: /* @__PURE__ */ a(Zs, { to: `/admin/landpage-v2/${P.lp_key}/editor`, children: [
                /* @__PURE__ */ e(Sr, { className: "h-3.5 w-3.5" }),
                "Editar"
              ] })
            }
          ),
          /* @__PURE__ */ a(
            D,
            {
              variant: "ghost",
              size: "sm",
              className: "flex-1 h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground",
              onClick: () => Us(P),
              children: [
                /* @__PURE__ */ e(mt, { className: "h-3.5 w-3.5" }),
                "Duplicar"
              ]
            }
          ),
          /* @__PURE__ */ a(Gn, { children: [
            /* @__PURE__ */ e(Qn, { asChild: !0, children: /* @__PURE__ */ e(D, { variant: "ghost", size: "icon", className: "h-8 w-8 text-muted-foreground hover:text-foreground shrink-0", children: /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5" }) }) }),
            /* @__PURE__ */ a(Ga, { align: "end", children: [
              /* @__PURE__ */ a(Ne, { onClick: () => E({ lp_key: P.lp_key, name: P.name, slug: P.slug }), children: [
                /* @__PURE__ */ e(xa, { className: "w-4 h-4 mr-2" }),
                "Configurações"
              ] }),
              !st(P) && /* @__PURE__ */ a(
                Ne,
                {
                  onClick: () => Hs(P.lp_key),
                  disabled: be || P.status !== "active",
                  children: [
                    /* @__PURE__ */ e(dt, { className: "w-4 h-4 mr-2" }),
                    "Definir como Principal"
                  ]
                }
              ),
              /* @__PURE__ */ e(ft, {}),
              /* @__PURE__ */ a(Ne, { onClick: () => at(P.lp_key, "active"), children: [
                /* @__PURE__ */ e(ue, { className: "w-4 h-4 mr-2" }),
                "Marcar Ativo"
              ] }),
              /* @__PURE__ */ e(Ne, { onClick: () => at(P.lp_key, "draft"), children: "Marcar Rascunho" }),
              /* @__PURE__ */ e(Ne, { onClick: () => at(P.lp_key, "archived"), children: "Arquivar" }),
              /* @__PURE__ */ e(ft, {}),
              /* @__PURE__ */ a(
                Ne,
                {
                  className: "text-destructive focus:text-destructive",
                  onClick: () => I(P),
                  children: [
                    /* @__PURE__ */ e(Y, { className: "w-4 h-4 mr-2" }),
                    "Excluir"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) }, P.id)) })
    ] }),
    /* @__PURE__ */ e(We, { open: !!k, onOpenChange: (P) => !P && E(null), children: /* @__PURE__ */ a(Le, { children: [
      /* @__PURE__ */ e(Ve, { children: /* @__PURE__ */ e($e, { children: "Configurações da LP" }) }),
      k && /* @__PURE__ */ a("div", { className: "space-y-4 py-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { htmlFor: "edit-name", children: "Nome da LP" }),
          /* @__PURE__ */ e(
            W,
            {
              id: "edit-name",
              value: k.name,
              onChange: (P) => E((q) => q ? { ...q, name: P.target.value } : null)
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { htmlFor: "edit-slug", children: "Slug (URL publicável)" }),
          /* @__PURE__ */ e(
            W,
            {
              id: "edit-slug",
              value: k.slug,
              onChange: (P) => E((q) => q ? { ...q, slug: P.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") } : null)
            }
          ),
          /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
            "URL: /l/",
            k.slug
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(je, { children: [
        /* @__PURE__ */ e(D, { variant: "outline", onClick: () => E(null), children: "Cancelar" }),
        /* @__PURE__ */ e(D, { onClick: Os, disabled: L, children: L ? "Salvando..." : "Salvar Alterações" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(We, { open: !!i, onOpenChange: (P) => {
      P || c(null);
    }, children: /* @__PURE__ */ a(Le, { children: [
      /* @__PURE__ */ a(Ve, { children: [
        /* @__PURE__ */ e($e, { children: "Duplicar Landing Page" }),
        /* @__PURE__ */ a(Qe, { children: [
          'Todo o conteúdo de "',
          i?.name,
          '" será copiado para a nova LP.'
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-4 py-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { children: "Nome da Nova LP" }),
          /* @__PURE__ */ e(
            W,
            {
              value: u.name,
              onChange: (P) => x((q) => ({ ...q, name: P.target.value })),
              placeholder: "Ex: LP 04 - Cópia"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { children: "Chave Interna (lp_key)" }),
          /* @__PURE__ */ e(
            W,
            {
              value: u.lp_key,
              onChange: (P) => x((q) => ({ ...q, lp_key: P.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })),
              placeholder: "Ex: lp04"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { children: "Slug (URL)" }),
          /* @__PURE__ */ e(
            W,
            {
              value: u.slug,
              onChange: (P) => x((q) => ({ ...q, slug: P.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })),
              placeholder: "Ex: campanha-verao"
            }
          ),
          /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
            "URL: /l/",
            u.slug || "slug"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(je, { children: [
        /* @__PURE__ */ e(D, { variant: "outline", onClick: () => c(null), children: "Cancelar" }),
        /* @__PURE__ */ e(D, { onClick: Ws, disabled: p, children: p ? /* @__PURE__ */ a(oe, { children: [
          /* @__PURE__ */ e(ge, { className: "h-4 w-4 mr-2 animate-spin" }),
          "Duplicando..."
        ] }) : /* @__PURE__ */ a(oe, { children: [
          /* @__PURE__ */ e(mt, { className: "h-4 w-4 mr-2" }),
          "Duplicar"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ e(We, { open: !!w, onOpenChange: (P) => {
      P || (I(null), _(""));
    }, children: /* @__PURE__ */ a(Le, { children: [
      /* @__PURE__ */ a(Ve, { children: [
        /* @__PURE__ */ e($e, { className: "text-destructive", children: "Excluir Landing Page" }),
        /* @__PURE__ */ a(Qe, { children: [
          'Esta ação é irreversível. Todos os dados da LP "',
          w?.name,
          '" (',
          w?.lp_key,
          ") serão permanentemente excluídos."
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ a(g, { children: [
          "Digite ",
          /* @__PURE__ */ e("span", { className: "font-mono font-bold text-destructive", children: w?.lp_key }),
          " para confirmar:"
        ] }),
        /* @__PURE__ */ e(
          W,
          {
            value: S,
            onChange: (P) => _(P.target.value),
            placeholder: w?.lp_key,
            className: "font-mono"
          }
        )
      ] }) }),
      /* @__PURE__ */ a(je, { children: [
        /* @__PURE__ */ e(D, { variant: "outline", onClick: () => {
          I(null), _("");
        }, children: "Cancelar" }),
        /* @__PURE__ */ e(
          D,
          {
            variant: "destructive",
            onClick: Bs,
            disabled: y || S !== w?.lp_key,
            children: y ? /* @__PURE__ */ a(oe, { children: [
              /* @__PURE__ */ e(ge, { className: "h-4 w-4 mr-2 animate-spin" }),
              "Excluindo..."
            ] }) : /* @__PURE__ */ a(oe, { children: [
              /* @__PURE__ */ e(Y, { className: "h-4 w-4 mr-2" }),
              "Excluir Permanentemente"
            ] })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e(
      Ka,
      {
        open: !!z,
        onOpenChange: (P) => !P && U(null),
        slug: z?.slug ?? "",
        lpName: z?.name
      }
    )
  ] });
}
const bl = (t) => {
  const [r, s] = T(!1), [o, n] = T(null), d = ce(!0), h = j(async () => {
    s(!0);
    try {
      const l = await Fe(t);
      return d.current = !1, l;
    } finally {
      s(!1);
    }
  }, [t]), f = j(async (l) => {
    s(!0);
    try {
      const m = await Ea(t, l);
      return m && n(/* @__PURE__ */ new Date()), m;
    } finally {
      s(!1);
    }
  }, [t]);
  return {
    loadFromDatabase: h,
    persistToDatabase: f,
    isSyncing: r,
    lastSavedAt: o,
    isFirstLoad: d.current
  };
}, vl = (t) => {
  const [r, s] = T(null), o = ce(!1), n = ce(null), d = ce(null), h = ce(/* @__PURE__ */ new Set()), { loadFromDatabase: f, persistToDatabase: l, isSyncing: m, lastSavedAt: i } = bl(t), c = j((y, v) => {
    if (!v) return y;
    const k = JSON.parse(JSON.stringify(y)), E = [
      { section: "hero", field: "imageDesktop" },
      { section: "hero", field: "imageMobile" },
      { section: "howItWorks", field: "imageDesktop" },
      { section: "howItWorks", field: "imageMobile" },
      { section: "process", field: "imageDesktop" },
      { section: "process", field: "imageMobile" },
      { section: "forWhom", field: "imageDesktop" },
      { section: "forWhom", field: "imageMobile" },
      { section: "about", field: "imageDesktop" },
      { section: "about", field: "imageMobile" },
      { section: "whyChoose", field: "imageDesktop" },
      { section: "whyChoose", field: "imageMobile" },
      { section: "ctaFinal", field: "imageDesktop" },
      { section: "ctaFinal", field: "imageMobile" },
      { section: "beforeAfter", field: "imageDesktop" },
      { section: "beforeAfter", field: "imageMobile" },
      { section: "footer", field: "logo" },
      { section: "footer", field: "logoDesktop" },
      { section: "footer", field: "logoMobile" }
    ];
    for (const { section: L, field: V } of E) {
      const z = `${String(L)}.${V}`;
      if (h.current.has(z)) continue;
      const U = k[L], se = v[L];
      if (typeof U != "object" || !U || typeof se != "object" || !se) continue;
      const he = se[V], be = U[V];
      he && (!be || be === "") && (U[V] = he);
    }
    if (!h.current.has("benefits.items") && k.benefits?.items && v.benefits?.items)
      for (let L = 0; L < Math.min(v.benefits.items.length, k.benefits.items.length); L++)
        v.benefits.items[L]?.image && (!k.benefits.items[L]?.image || k.benefits.items[L]?.image === "") && (k.benefits.items[L].image = v.benefits.items[L].image);
    if (!h.current.has("beforeAfter.images") && k.beforeAfter?.images && v.beforeAfter?.images)
      for (let L = 0; L < Math.min(v.beforeAfter.images.length, k.beforeAfter.images.length); L++) {
        const V = v.beforeAfter.images[L], z = k.beforeAfter.images[L];
        V?.before && (!z?.before || z.before === "") && (z.before = V.before), V?.after && (!z?.after || z.after === "") && (z.after = V.after);
      }
    return k;
  }, []), [u, x] = T(!1), [p, b] = T("idle");
  Q(() => {
    (async () => {
      const v = await f();
      v?.content && (s(v.content), n.current = v.content, d.current = v.content, o.current = !0);
    })();
  }, [f]), Q(() => {
    n.current = r;
  }, [r]);
  const w = j((y, v, k) => {
    h.current.add(`${String(y)}.${v}`), s((E) => {
      if (!E) return E;
      const L = E[y];
      if (typeof L == "object" && L !== null && !Array.isArray(L)) {
        const V = {
          ...E,
          [y]: { ...L, [v]: k }
        };
        return x(!0), b("unsaved"), V;
      }
      return E;
    });
  }, []), I = j((y, v) => {
    const k = y.split(".");
    h.current.add(
      k.length >= 2 ? `${k[0]}.${k[1]}` : y
    ), s((E) => {
      if (!E) return E;
      const L = y.split("."), V = (U, se, he) => {
        if (he === se.length - 1)
          return { ...U, [se[he]]: v };
        const be = se[he], qe = U[be] ?? {};
        return {
          ...U,
          [be]: V(qe, se, he + 1)
        };
      }, z = V(E, L, 0);
      return x(!0), b("unsaved"), z;
    });
  }, []), S = j((y, v) => {
    h.current.add(String(y)), s((k) => {
      if (!k) return k;
      const E = { ...k, [y]: v };
      return x(!0), b("unsaved"), E;
    });
  }, []), _ = j(async () => {
    if (!n.current) return !1;
    b("saving");
    const y = c(n.current, d.current), v = await l(y);
    return v ? (d.current = y, h.current.clear(), x(!1), b("success"), setTimeout(() => b("idle"), 3e3)) : b("error"), v;
  }, [l, c]);
  return Q(() => {
    const y = () => {
      n.current && u && _();
    };
    return window.addEventListener("hotkey:save", y), () => window.removeEventListener("hotkey:save", y);
  }, [_, u]), {
    draft: r,
    isDirty: u,
    isLoading: !o.current || m,
    saveStatus: p,
    lastSavedAt: i,
    updateField: w,
    updateNestedField: I,
    updateSection: S,
    saveNow: _
  };
}, jt = Dt.Root, $t = Dt.CollapsibleTrigger, zt = Dt.CollapsibleContent, Nl = "America/Sao_Paulo";
function yl(t = /* @__PURE__ */ new Date()) {
  return t.toLocaleTimeString("pt-BR", {
    timeZone: Nl,
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
const wl = ({ status: t, lastSaved: r }) => t === "idle" && !r ? null : /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ a(
  "div",
  {
    className: `
          flex items-center gap-2 px-2 py-1.5 rounded-lg
          transition-all duration-300 ease-out text-xs
          ${t === "saving" ? "text-accent" : t === "unsaved" ? "text-amber-500" : t === "success" ? "text-[hsl(var(--ui-success-text))]" : t === "error" ? "text-destructive" : "text-muted-foreground"}
        `,
    children: [
      t === "saving" && /* @__PURE__ */ e(ge, { className: "w-3 h-3 animate-spin" }),
      t === "unsaved" && /* @__PURE__ */ e(ua, { className: "w-2.5 h-2.5 fill-amber-500 text-amber-500" }),
      t === "success" && /* @__PURE__ */ e(ue, { className: "w-3 h-3" }),
      t === "error" && /* @__PURE__ */ e(ba, { className: "w-3 h-3" }),
      t === "idle" && r && /* @__PURE__ */ e(ue, { className: "w-3 h-3" }),
      /* @__PURE__ */ a("span", { className: "font-medium", children: [
        t === "unsaved" && "Alteracoes nao salvas",
        t === "saving" && "Salvando...",
        t === "success" && "Salvo",
        t === "error" && "Erro ao salvar!",
        t === "idle" && r && "Salvo"
      ] }),
      r && t !== "saving" && t !== "unsaved" && /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: yl(r) })
    ]
  }
) });
function it(t) {
  return (r = {}) => {
    const s = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[s] || t.formats[t.defaultWidth];
  };
}
function _e(t) {
  return (r, s) => {
    const o = s?.context ? String(s.context) : "standalone";
    let n;
    if (o === "formatting" && t.formattingValues) {
      const h = t.defaultFormattingWidth || t.defaultWidth, f = s?.width ? String(s.width) : h;
      n = t.formattingValues[f] || t.formattingValues[h];
    } else {
      const h = t.defaultWidth, f = s?.width ? String(s.width) : t.defaultWidth;
      n = t.values[f] || t.values[h];
    }
    const d = t.argumentCallback ? t.argumentCallback(r) : r;
    return n[d];
  };
}
function Ae(t) {
  return (r, s = {}) => {
    const o = s.width, n = o && t.matchPatterns[o] || t.matchPatterns[t.defaultMatchWidth], d = r.match(n);
    if (!d)
      return null;
    const h = d[0], f = o && t.parsePatterns[o] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(f) ? kl(f, (c) => c.test(h)) : (
      // [TODO] -- I challenge you to fix the type
      Cl(f, (c) => c.test(h))
    );
    let m;
    m = t.valueCallback ? t.valueCallback(l) : l, m = s.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      s.valueCallback(m)
    ) : m;
    const i = r.slice(h.length);
    return { value: m, rest: i };
  };
}
function Cl(t, r) {
  for (const s in t)
    if (Object.prototype.hasOwnProperty.call(t, s) && r(t[s]))
      return s;
}
function kl(t, r) {
  for (let s = 0; s < t.length; s++)
    if (r(t[s]))
      return s;
}
function Dl(t) {
  return (r, s = {}) => {
    const o = r.match(t.matchPattern);
    if (!o) return null;
    const n = o[0], d = r.match(t.parsePattern);
    if (!d) return null;
    let h = t.valueCallback ? t.valueCallback(d[0]) : d[0];
    h = s.valueCallback ? s.valueCallback(h) : h;
    const f = r.slice(n.length);
    return { value: h, rest: f };
  };
}
const Sl = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 mês",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 mês",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
}, El = (t, r, s) => {
  let o;
  const n = Sl[t];
  return typeof n == "string" ? o = n : r === 1 ? o = n.one : o = n.other.replace("{{count}}", String(r)), s?.addSuffix ? s.comparison && s.comparison > 0 ? "em " + o : "há " + o : o;
}, Pl = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, Tl = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, _l = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Al = {
  date: it({
    formats: Pl,
    defaultWidth: "full"
  }),
  time: it({
    formats: Tl,
    defaultWidth: "full"
  }),
  dateTime: it({
    formats: _l,
    defaultWidth: "full"
  })
}, Il = {
  lastWeek: (t) => {
    const r = t.getDay();
    return "'" + (r === 0 || r === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Ml = (t, r, s, o) => {
  const n = Il[t];
  return typeof n == "function" ? n(r) : n;
}, Ll = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, Vl = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, jl = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez"
  ],
  wide: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]
}, $l = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado"
  ],
  wide: [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ]
}, zl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  }
}, Fl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  }
}, Rl = (t, r) => {
  const s = Number(t);
  return r?.unit === "week" ? s + "ª" : s + "º";
}, ql = {
  ordinalNumber: Rl,
  era: _e({
    values: Ll,
    defaultWidth: "wide"
  }),
  quarter: _e({
    values: Vl,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: _e({
    values: jl,
    defaultWidth: "wide"
  }),
  day: _e({
    values: $l,
    defaultWidth: "wide"
  }),
  dayPeriod: _e({
    values: zl,
    defaultWidth: "wide",
    formattingValues: Fl,
    defaultFormattingWidth: "wide"
  })
}, Ol = /^(\d+)[ºªo]?/i, Wl = /\d+/i, Hl = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Ul = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Bl = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Xl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gl = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Ql = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^fev/i,
    /^mar/i,
    /^abr/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^set/i,
    /^out/i,
    /^nov/i,
    /^dez/i
  ]
}, Yl = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Jl = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Zl = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Kl = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
}, ei = {
  ordinalNumber: Dl({
    matchPattern: Ol,
    parsePattern: Wl,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ae({
    matchPatterns: Hl,
    defaultMatchWidth: "wide",
    parsePatterns: Ul,
    defaultParseWidth: "any"
  }),
  quarter: Ae({
    matchPatterns: Bl,
    defaultMatchWidth: "wide",
    parsePatterns: Xl,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ae({
    matchPatterns: Gl,
    defaultMatchWidth: "wide",
    parsePatterns: Ql,
    defaultParseWidth: "any"
  }),
  day: Ae({
    matchPatterns: Yl,
    defaultMatchWidth: "wide",
    parsePatterns: Jl,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ae({
    matchPatterns: Zl,
    defaultMatchWidth: "any",
    parsePatterns: Kl,
    defaultParseWidth: "any"
  })
}, ti = {
  code: "pt-BR",
  formatDistance: El,
  formatLong: Al,
  formatRelative: Ml,
  localize: ql,
  match: ei,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ss = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ a(we.Root, { ref: o, className: C("relative overflow-hidden", t), ...s, children: [
  /* @__PURE__ */ e(we.Viewport, { className: "h-full w-full rounded-[inherit]", children: r }),
  /* @__PURE__ */ e(rs, {}),
  /* @__PURE__ */ e(we.Corner, {})
] }));
ss.displayName = we.Root.displayName;
const rs = A.forwardRef(({ className: t, orientation: r = "vertical", ...s }, o) => /* @__PURE__ */ e(
  we.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: r,
    className: C(
      "flex touch-none select-none transition-colors",
      r === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...s,
    children: /* @__PURE__ */ e(we.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
rs.displayName = we.ScrollAreaScrollbar.displayName;
const ai = ae.Root, si = ae.Portal, os = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  ae.Overlay,
  {
    className: C(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...r,
    ref: s
  }
));
os.displayName = ae.Overlay.displayName;
const ns = A.forwardRef(({ className: t, children: r, ...s }, o) => /* @__PURE__ */ e(si, { children: /* @__PURE__ */ a("div", { className: "theme-admin", children: [
  /* @__PURE__ */ e(os, {}),
  /* @__PURE__ */ e(
    ae.Content,
    {
      ref: o,
      className: C(
        "fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...s,
      children: r
    }
  )
] }) }));
ns.displayName = ae.Content.displayName;
const ls = ({ className: t, ...r }) => /* @__PURE__ */ e("div", { className: C("flex flex-col space-y-2 text-center sm:text-left", t), ...r });
ls.displayName = "AlertDialogHeader";
const is = ({ className: t, ...r }) => /* @__PURE__ */ e("div", { className: C("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...r });
is.displayName = "AlertDialogFooter";
const cs = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(ae.Title, { ref: s, className: C("text-lg font-semibold text-foreground", t), ...r }));
cs.displayName = ae.Title.displayName;
const ds = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(ae.Description, { ref: s, className: C("text-sm text-muted-foreground", t), ...r }));
ds.displayName = ae.Description.displayName;
const ms = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(ae.Action, { ref: s, className: C(Tt(), t), ...r }));
ms.displayName = ae.Action.displayName;
const us = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  ae.Cancel,
  {
    ref: s,
    className: C(Tt({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...r
  }
));
us.displayName = ae.Cancel.displayName;
function ri(t) {
  const { tableName: r, recordId: s, recordKey: o, limit: n = 50 } = t;
  return to({
    queryKey: ["cms-history", r, s, o, n],
    queryFn: async () => {
      let d = B.from("bd_cms_history").select("*").eq("table_name", r).order("changed_at", { ascending: !1 }).limit(n);
      s && (d = d.eq("record_id", s)), o && (d = d.eq("record_key", o));
      const { data: h, error: f } = await d;
      if (f) throw f;
      return h;
    },
    staleTime: 1e3 * 30
    // 30 segundos
  });
}
function oi() {
  const t = ao();
  return so({
    mutationFn: async ({
      tableName: r,
      recordKey: s,
      dataToRestore: o
    }) => {
      const { id: n, created_at: d, updated_at: h, ...f } = o;
      if (r === "bd_cms_lp") {
        const { data: l, error: m } = await B.from("bd_cms_lp").update(f).eq("lp_key", s).select().single();
        if (m) throw m;
        return l;
      }
      if (r === "bd_cms_conteudo") {
        const { data: l, error: m } = await B.from("bd_cms_conteudo").update({ content: f.content }).eq("id", s).select().single();
        if (m) throw m;
        return l;
      }
      if (r === "bd_cms_lp_v2") {
        const { data: l, error: m } = await B.from("bd_cms_lp_v2").update({ content: f.content }).eq("lp_key", s).select().single();
        if (m) throw m;
        return l;
      }
      throw new Error(`Restore not supported for table: ${r}`);
    },
    onSuccess: (r, s) => {
      t.invalidateQueries({ queryKey: ["cms-history"] }), t.invalidateQueries({ queryKey: ["cms-lp"] }), t.invalidateQueries({ queryKey: ["cms-content"] }), t.invalidateQueries({ queryKey: ["cms-v2"] });
    }
  });
}
function ni(t, r) {
  const s = [], o = [], n = [], d = new Set(Object.keys(t || {})), h = new Set(Object.keys(r || {}));
  return h.forEach((f) => {
    d.has(f) || s.push(f);
  }), d.forEach((f) => {
    h.has(f) || o.push(f);
  }), d.forEach((f) => {
    if (h.has(f)) {
      const l = JSON.stringify(t?.[f]), m = JSON.stringify(r?.[f]);
      l !== m && n.push(f);
    }
  }), { added: s, removed: o, changed: n };
}
function li({
  tableName: t,
  recordKey: r,
  title: s = "Histórico de Alterações",
  description: o = "Visualize e restaure versões anteriores"
}) {
  const [n, d] = T(null), [h, f] = T(null), { data: l, isLoading: m, error: i } = ri({
    tableName: t,
    recordKey: r,
    limit: 50
  }), { mutate: c, isPending: u } = oi(), x = () => {
    if (!h?.old_data || !h.record_key) {
      F.error("Dados insuficientes para restauração");
      return;
    }
    c({
      tableName: h.table_name,
      recordKey: h.record_key,
      dataToRestore: h.old_data
    }, {
      onSuccess: () => {
        F.success("Versão restaurada com sucesso!"), f(null);
      },
      onError: (w) => {
        F.error(`Erro ao restaurar: ${w.message}`);
      }
    });
  }, p = (w) => {
    switch (w) {
      case "INSERT":
        return /* @__PURE__ */ e(re, { className: "bg-green-500/20 text-green-400 border-green-500/30", children: "Criação" });
      case "UPDATE":
        return /* @__PURE__ */ e(re, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30", children: "Alteração" });
      case "DELETE":
        return /* @__PURE__ */ e(re, { className: "bg-red-500/20 text-red-400 border-red-500/30", children: "Remoção" });
      case "BACKUP":
        return /* @__PURE__ */ e(re, { className: "bg-purple-500/20 text-purple-400 border-purple-500/30", children: "Backup" });
      default:
        return /* @__PURE__ */ e(re, { variant: "outline", children: w });
    }
  }, b = (w) => {
    try {
      return eo(new Date(w), "dd/MM/yyyy 'às' HH:mm", { locale: ti });
    } catch {
      return w;
    }
  };
  return m ? /* @__PURE__ */ a(Se, { className: "bg-card/50 border-border/50", children: [
    /* @__PURE__ */ e(Xe, { children: /* @__PURE__ */ a(Ge, { className: "flex items-center gap-2 text-lg", children: [
      /* @__PURE__ */ e(Ie, { className: "h-5 w-5 text-primary" }),
      s
    ] }) }),
    /* @__PURE__ */ e(Ee, { children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8 text-muted-foreground", children: "Carregando histórico..." }) })
  ] }) : i ? /* @__PURE__ */ a(Se, { className: "bg-card/50 border-border/50", children: [
    /* @__PURE__ */ e(Xe, { children: /* @__PURE__ */ a(Ge, { className: "flex items-center gap-2 text-lg", children: [
      /* @__PURE__ */ e(Ie, { className: "h-5 w-5 text-destructive" }),
      s
    ] }) }),
    /* @__PURE__ */ e(Ee, { children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8 text-destructive", children: "Erro ao carregar histórico" }) })
  ] }) : /* @__PURE__ */ a(oe, { children: [
    /* @__PURE__ */ a(Se, { className: "bg-card/50 border-border/50", children: [
      /* @__PURE__ */ a(Xe, { children: [
        /* @__PURE__ */ a(Ge, { className: "flex items-center gap-2 text-lg", children: [
          /* @__PURE__ */ e(Ie, { className: "h-5 w-5 text-primary" }),
          s
        ] }),
        /* @__PURE__ */ e(Ba, { children: o })
      ] }),
      /* @__PURE__ */ e(Ee, { children: !l || l.length === 0 ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-8 text-muted-foreground", children: [
        /* @__PURE__ */ e(Ie, { className: "h-12 w-12 mb-3 opacity-30" }),
        /* @__PURE__ */ e("p", { children: "Nenhuma alteração registrada" })
      ] }) : /* @__PURE__ */ e(ss, { className: "h-[400px] pr-4", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: l.map((w) => {
        const I = n === w.id, S = w.action === "UPDATE" ? ni(w.old_data, w.new_data) : null, _ = w.action === "UPDATE" && w.old_data;
        return /* @__PURE__ */ e(
          jt,
          {
            open: I,
            onOpenChange: () => d(I ? null : w.id),
            children: /* @__PURE__ */ a("div", { className: "rounded-lg bg-background/50 overflow-hidden", children: [
              /* @__PURE__ */ e($t, { className: "w-full", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between p-3 hover:bg-muted/30 transition-colors", children: [
                /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
                  p(w.action),
                  /* @__PURE__ */ a("div", { className: "text-left", children: [
                    /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: w.record_key || w.table_name }),
                    /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: b(w.changed_at) })
                  ] })
                ] }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  _ && /* @__PURE__ */ a(
                    D,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-7 px-2 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10",
                      onClick: (y) => {
                        y.stopPropagation(), f(w);
                      },
                      children: [
                        /* @__PURE__ */ e(ga, { className: "h-3.5 w-3.5 mr-1" }),
                        "Restaurar"
                      ]
                    }
                  ),
                  I ? /* @__PURE__ */ e(Ke, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ e(Pe, { className: "h-4 w-4 text-muted-foreground" })
                ] })
              ] }) }),
              /* @__PURE__ */ e(zt, { children: /* @__PURE__ */ a("div", { className: "px-3 pb-3 border-t border-border/30", children: [
                S && /* @__PURE__ */ a("div", { className: "mt-3 space-y-2", children: [
                  S.added.length > 0 && /* @__PURE__ */ a("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ e(re, { className: "bg-green-500/20 text-green-400 text-xs", children: "+" }),
                    /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: [
                      "Adicionados: ",
                      S.added.join(", ")
                    ] })
                  ] }),
                  S.changed.length > 0 && /* @__PURE__ */ a("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ e(re, { className: "bg-blue-500/20 text-blue-400 text-xs", children: "~" }),
                    /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: [
                      "Alterados: ",
                      S.changed.join(", ")
                    ] })
                  ] }),
                  S.removed.length > 0 && /* @__PURE__ */ a("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ e(re, { className: "bg-red-500/20 text-red-400 text-xs", children: "-" }),
                    /* @__PURE__ */ a("span", { className: "text-xs text-muted-foreground", children: [
                      "Removidos: ",
                      S.removed.join(", ")
                    ] })
                  ] })
                ] }),
                w.action === "INSERT" && w.new_data && /* @__PURE__ */ a("div", { className: "mt-3", children: [
                  /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mb-1", children: "Dados criados:" }),
                  /* @__PURE__ */ a("pre", { className: "text-xs bg-muted/30 p-2 rounded overflow-x-auto max-h-32", children: [
                    JSON.stringify(w.new_data, null, 2).slice(0, 500),
                    JSON.stringify(w.new_data).length > 500 && "..."
                  ] })
                ] })
              ] }) })
            ] })
          },
          w.id
        );
      }) }) }) })
    ] }),
    /* @__PURE__ */ e(ai, { open: !!h, onOpenChange: () => f(null), children: /* @__PURE__ */ a(ns, { className: "bg-card border-border", children: [
      /* @__PURE__ */ a(ls, { children: [
        /* @__PURE__ */ a(cs, { className: "flex items-center gap-2 text-amber-400", children: [
          /* @__PURE__ */ e(Pr, { className: "h-5 w-5" }),
          "Confirmar Restauração"
        ] }),
        /* @__PURE__ */ a(ds, { className: "text-muted-foreground", children: [
          "Você está prestes a restaurar ",
          /* @__PURE__ */ e("strong", { children: h?.record_key }),
          " para a versão de",
          " ",
          /* @__PURE__ */ e("strong", { children: h && b(h.changed_at) }),
          ".",
          /* @__PURE__ */ e("br", {}),
          /* @__PURE__ */ e("br", {}),
          "Esta ação irá sobrescrever os dados atuais. Deseja continuar?"
        ] })
      ] }),
      /* @__PURE__ */ a(is, { children: [
        /* @__PURE__ */ a(us, { className: "gap-2", children: [
          /* @__PURE__ */ e(De, { className: "h-4 w-4" }),
          "Cancelar"
        ] }),
        /* @__PURE__ */ e(
          ms,
          {
            onClick: x,
            disabled: u,
            className: "bg-amber-500 hover:bg-amber-600 text-black gap-2",
            children: u ? "Restaurando..." : /* @__PURE__ */ a(oe, { children: [
              /* @__PURE__ */ e(ue, { className: "h-4 w-4" }),
              "Confirmar Restauração"
            ] })
          }
        )
      ] })
    ] }) })
  ] });
}
const M = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e(
  gt.Root,
  {
    className: C(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-all duration-200",
      // Checked (ON) - Green accent
      "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
      // Unchecked (OFF) - Red semaphore style  
      "data-[state=unchecked]:bg-red-500/20 data-[state=unchecked]:border-red-500/50",
      "data-[state=unchecked]:hover:bg-red-500/30 data-[state=unchecked]:hover:border-red-500/70",
      // Focus states
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...r,
    ref: s,
    children: /* @__PURE__ */ e(
      gt.Thumb,
      {
        className: C(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          // Add subtle shadow for depth
          "shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
        )
      }
    )
  }
));
M.displayName = gt.Root.displayName;
const te = $(({
  value: t,
  onDebouncedChange: r,
  debounceMs: s = 300,
  ...o
}) => {
  const [n, d] = es(
    t ?? "",
    r,
    s
  );
  return /* @__PURE__ */ e(
    Vt,
    {
      ...o,
      value: n,
      onChange: (h) => d(h.target.value)
    }
  );
});
te.displayName = "DebouncedTextareaV2";
async function ii(t) {
  const r = t.name.split(".").pop(), o = `cms-images/${`${Math.random().toString(36).substring(2)}-${Date.now()}.${r}`}`, { data: n, error: d } = await B.storage.from("cms-assets").upload(o, t, {
    cacheControl: "3600",
    upsert: !1
  });
  if (d)
    throw console.error("Upload error:", d), d;
  const { data: { publicUrl: h } } = B.storage.from("cms-assets").getPublicUrl(o);
  return h;
}
async function ci(t) {
  try {
    const s = await ro(t, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: !0
    });
    return new File([s], t.name, {
      type: s.type,
      lastModified: Date.now()
    });
  } catch (r) {
    return console.warn("Compressão de imagem falhou, usando arquivo original:", r), t;
  }
}
const O = ({ value: t, onChange: r, label: s }) => {
  const [o, n] = T(!1), [d, h] = T(!1), f = ce(null), l = async (u) => {
    if (!u.type.startsWith("image/")) {
      F.error("Por favor, selecione uma imagem válida");
      return;
    }
    n(!0);
    const x = F.loading("Otimizando imagem...");
    try {
      const p = await ci(u);
      p.size < u.size ? F.success("Otimização concluída.", { id: x }) : F.info("Iniciando upload.", { id: x });
      const b = await ii(p);
      r(b), F.success("Imagem enviada!");
    } catch (p) {
      console.error("[ImageUploadV2] Erro ao fazer upload:", p);
      let b = "Erro ao fazer upload da imagem";
      if (p && typeof p == "object" && "message" in p) {
        const w = p;
        w.statusCode === 403 || w.message?.includes("security policy") ? b = "Sem permissão para upload. Verifique se você está logado como admin." : b = `Upload falhou: ${w.message}`;
      }
      F.error(b);
    } finally {
      n(!1);
    }
  }, m = (u) => {
    u.preventDefault(), u.stopPropagation(), u.type === "dragenter" || u.type === "dragover" ? h(!0) : u.type === "dragleave" && h(!1);
  };
  return /* @__PURE__ */ a("div", { className: "flex flex-col items-center gap-3", children: [
    /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-white", children: s }),
    /* @__PURE__ */ a(
      "div",
      {
        className: `
          relative w-[120px] h-[120px] rounded-full
          flex items-center justify-center
          border-2 border-dashed transition-all duration-300 cursor-pointer
          bg-white/5 backdrop-blur-sm
          ${d ? "border-accent bg-accent/10" : "border-white/20 hover:border-white/40 hover:bg-white/10"}
          ${o ? "opacity-60 cursor-wait" : ""}
        `,
        onDragEnter: m,
        onDragLeave: m,
        onDragOver: m,
        onDrop: (u) => {
          u.preventDefault(), u.stopPropagation(), h(!1), u.dataTransfer.files && u.dataTransfer.files[0] && l(u.dataTransfer.files[0]);
        },
        onClick: () => f.current?.click(),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: f,
              type: "file",
              accept: "image/*",
              onChange: (u) => {
                u.target.files && u.target.files[0] && l(u.target.files[0]);
              },
              className: "hidden",
              disabled: o
            }
          ),
          t && !o ? /* @__PURE__ */ a(oe, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: t,
                alt: "Preview",
                className: "w-full h-full rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ e(
              D,
              {
                variant: "destructive",
                size: "icon",
                className: "absolute -top-1 -right-1 w-7 h-7 rounded-full shadow-lg",
                onClick: (u) => {
                  u.stopPropagation(), confirm("Remover imagem?") && r("");
                },
                children: /* @__PURE__ */ e(De, { className: "w-3 h-3" })
              }
            )
          ] }) : /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center text-center p-2", children: [
            /* @__PURE__ */ e(Tr, { className: "w-5 h-5 text-white/60 mb-1" }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-white/60 leading-tight", children: o ? "Enviando..." : "Clique ou arraste" })
          ] })
        ]
      }
    )
  ] });
}, ee = ({
  sectionTitle: t,
  ctaData: r,
  onUpdate: s
}) => r ? /* @__PURE__ */ a("div", { className: "rounded-3xl bg-muted/30 backdrop-blur-2xl p-6 space-y-6 mt-8", children: [
  /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ a("h3", { className: "text-lg font-medium text-foreground flex items-center gap-2", children: [
        "Botão Final de Seção",
        /* @__PURE__ */ e("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20 uppercase tracking-wide", children: "Novo" })
      ] }),
      /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: [
        "Ative para exibir um botão de ação logo após o conteúdo de ",
        t,
        "."
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e(
        M,
        {
          checked: r.enabled,
          onCheckedChange: (o) => s({ enabled: o })
        }
      ),
      /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar" })
    ] })
  ] }),
  r.enabled && /* @__PURE__ */ a("div", { className: "space-y-5 pt-2 animate-in fade-in slide-in-from-top-2", children: [
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Texto do Botão" }),
        /* @__PURE__ */ e(
          W,
          {
            value: r.text,
            onChange: (o) => s({ text: o.target.value }),
            placeholder: "Ex: Quero Contratar",
            className: "input-admin rounded-lg"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Link de Destino" }),
        /* @__PURE__ */ e(
          W,
          {
            value: r.link,
            onChange: (o) => s({ link: o.target.value }),
            placeholder: "Ex: /checkout",
            className: "input-admin rounded-lg"
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground", children: "* Rastreamento UTM automático aplicado no site." })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between rounded-xl bg-muted/20 p-4", children: [
      /* @__PURE__ */ a("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Ocultar no Mobile" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "O botão não aparecerá em celulares para economizar espaço." })
      ] }),
      /* @__PURE__ */ e(
        M,
        {
          checked: r.mobileHidden,
          onCheckedChange: (o) => s({ mobileHidden: o })
        }
      )
    ] })
  ] })
] }) : null, xt = $(({
  draft: t,
  updateField: r,
  updateNestedField: s,
  updateSection: o
}) => {
  const n = t.hero;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Hero" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: n?.enabled !== !1,
            onCheckedChange: (d) => r("hero", "enabled", d)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Textos Principais" }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
        /* @__PURE__ */ e(
          N,
          {
            value: n?.title || "",
            onDebouncedChange: (d) => r("hero", "title", d),
            className: "input-admin",
            placeholder: "Título principal do Hero"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Subtítulo" }),
        /* @__PURE__ */ e(
          te,
          {
            value: n?.subtitle || "",
            onDebouncedChange: (d) => r("hero", "subtitle", d),
            className: "input-admin",
            placeholder: "Subtítulo do Hero"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Imagens de Background" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Desktop",
            recommendedSize: "1920 × 1080",
            value: n?.imageDesktop,
            onChange: (d) => r("hero", "imageDesktop", d)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Mobile",
            recommendedSize: "1080 × 1350",
            value: n?.imageMobile,
            onChange: (d) => r("hero", "imageMobile", d)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "CTAs de Ação" }),
      /* @__PURE__ */ a("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "CTA Primário - Texto" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n?.ctaPrimary?.text || "",
              onDebouncedChange: (d) => s("hero.ctaPrimary.text", d),
              className: "input-admin",
              placeholder: "Ex: Quero Assinar"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "CTA Primário - Link" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n?.ctaPrimary?.link || "",
              onDebouncedChange: (d) => s("hero.ctaPrimary.link", d),
              className: "input-admin",
              placeholder: "Ex: /checkout"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "CTA Secundário - Texto" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n?.ctaSecondary?.text || "",
              onDebouncedChange: (d) => s("hero.ctaSecondary.text", d),
              className: "input-admin",
              placeholder: "Ex: Saiba Mais"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "CTA Secundário - Link" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n?.ctaSecondary?.link || "",
              onDebouncedChange: (d) => s("hero.ctaSecondary.link", d),
              className: "input-admin",
              placeholder: "Ex: #beneficios"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Hero",
        ctaData: n?.footerCta,
        onUpdate: (d) => {
          o("hero", {
            ...n,
            footerCta: {
              ...n?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...d
            }
          });
        }
      }
    )
  ] });
});
xt.displayName = "HeroEditorV2";
const hs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.benefits, n = o?.items || [], d = j(() => {
    const l = [...n, { title: "", description: "", image: "" }];
    s("benefits", { ...o, items: l });
  }, [n, o, s]), h = j((l) => {
    const m = n.filter((i, c) => c !== l);
    s("benefits", { ...o, items: m });
  }, [n, o, s]), f = j((l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("benefits", { ...o, items: c });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Benefícios" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("benefits", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Título da Seção" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (l) => r("benefits", "title", l),
          className: "input-admin",
          placeholder: "Ex: Por que escolher a LimpMe?"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Itens de Benefício (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum benefício cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, m) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
                /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { children: [
                  "Benefício ",
                  m + 1
                ] })
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => h(m),
                  className: "text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: l.title || "",
                    onDebouncedChange: (i) => f(m, "title", i),
                    className: "input-admin",
                    placeholder: "Ex: Praticidade"
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-end", children: /* @__PURE__ */ e(
                O,
                {
                  label: "Imagem",
                  value: l.image,
                  onChange: (i) => f(m, "image", i)
                }
              ) })
            ] }),
            /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Descrição" }),
              /* @__PURE__ */ e(
                te,
                {
                  value: l.description || "",
                  onDebouncedChange: (i) => f(m, "description", i),
                  className: "input-admin",
                  placeholder: "Descrição do benefício...",
                  rows: 2
                }
              )
            ] })
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Benefícios",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("benefits", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...l
            }
          });
        }
      }
    )
  ] });
});
hs.displayName = "BenefitsEditorV2";
const gs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.howItWorks, n = o?.steps || [], d = j(() => {
    const l = [...n, ""];
    s("howItWorks", { ...o, steps: l });
  }, [n, o, s]), h = j((l) => {
    const m = n.filter((i, c) => c !== l);
    s("howItWorks", { ...o, steps: m });
  }, [n, o, s]), f = j((l, m) => {
    const i = [...n];
    i[l] = m, s("howItWorks", { ...o, steps: i });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Como Funciona" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("howItWorks", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Título da Seção" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (l) => r("howItWorks", "title", l),
          className: "input-admin",
          placeholder: "Ex: Como funciona?"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Imagens" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Desktop",
            recommendedSize: "1920 × 1080",
            value: o?.imageDesktop,
            onChange: (l) => r("howItWorks", "imageDesktop", l)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Mobile",
            recommendedSize: "1080 × 1350",
            value: o?.imageMobile,
            onChange: (l) => r("howItWorks", "imageMobile", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Passos (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum passo cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-3", children: n.map((l, m) => /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground shrink-0", children: [
          /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
          /* @__PURE__ */ a("span", { className: "w-6 text-center", children: [
            m + 1,
            "."
          ] })
        ] }),
        /* @__PURE__ */ e(
          N,
          {
            value: l || "",
            onDebouncedChange: (i) => f(m, i),
            className: "input-admin flex-1",
            placeholder: `Passo ${m + 1}`
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => h(m),
            className: "text-destructive hover:text-destructive shrink-0",
            children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
          }
        )
      ] }, m)) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Como Funciona",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("howItWorks", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...l
            }
          });
        }
      }
    )
  ] });
});
gs.displayName = "HowItWorksEditorV2";
const fs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.beforeAfter, n = o?.images || [], d = j(() => {
    const l = [...n, { before: "", after: "", caption: "" }];
    s("beforeAfter", { ...o, images: l });
  }, [n, o, s]), h = j((l) => {
    const m = n.filter((i, c) => c !== l);
    s("beforeAfter", { ...o, images: m });
  }, [n, o, s]), f = j((l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("beforeAfter", { ...o, images: c });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Antes e Depois" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("beforeAfter", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Textos" }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.title || "",
            onDebouncedChange: (l) => r("beforeAfter", "title", l),
            className: "input-admin",
            placeholder: "Ex: Veja a diferença"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Subtítulo" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.subtitle || "",
            onDebouncedChange: (l) => r("beforeAfter", "subtitle", l),
            className: "input-admin",
            placeholder: "Subtítulo da seção"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Imagens de Background" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Desktop",
            recommendedSize: "1920 × 1080",
            value: o?.imageDesktop,
            onChange: (l) => r("beforeAfter", "imageDesktop", l)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Mobile",
            recommendedSize: "1080 × 1350",
            value: o?.imageMobile,
            onChange: (l) => r("beforeAfter", "imageMobile", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Comparações (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhuma comparação cadastrada. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, m) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
                /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { children: [
                  "Comparação ",
                  m + 1
                ] })
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => h(m),
                  className: "text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
              /* @__PURE__ */ e(
                O,
                {
                  label: "Imagem Antes",
                  recommendedSize: "800 × 600",
                  value: l.before || "",
                  onChange: (i) => f(m, "before", i)
                }
              ),
              /* @__PURE__ */ e(
                O,
                {
                  label: "Imagem Depois",
                  recommendedSize: "800 × 600",
                  value: l.after || "",
                  onChange: (i) => f(m, "after", i)
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Legenda" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: l.caption || "",
                  onDebouncedChange: (i) => f(m, "caption", i),
                  className: "input-admin",
                  placeholder: "Legenda da comparação"
                }
              )
            ] })
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Antes e Depois",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("beforeAfter", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...l
            }
          });
        }
      }
    )
  ] });
});
fs.displayName = "BeforeAfterEditorV2";
const ps = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.process, n = o?.steps || [], d = j(() => {
    const l = [...n, { title: "", description: "" }];
    s("process", { ...o, steps: l });
  }, [n, o, s]), h = j((l) => {
    const m = n.filter((i, c) => c !== l);
    s("process", { ...o, steps: m });
  }, [n, o, s]), f = j((l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("process", { ...o, steps: c });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Processo" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("process", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Textos" }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.title || "",
            onDebouncedChange: (l) => r("process", "title", l),
            className: "input-admin",
            placeholder: "Ex: Nosso Processo"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Subtítulo" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.subtitle || "",
            onDebouncedChange: (l) => r("process", "subtitle", l),
            className: "input-admin",
            placeholder: "Subtítulo da seção"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Imagens" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Desktop",
            recommendedSize: "1920 × 1080",
            value: o?.imageDesktop,
            onChange: (l) => r("process", "imageDesktop", l)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Mobile",
            recommendedSize: "1080 × 1350",
            value: o?.imageMobile,
            onChange: (l) => r("process", "imageMobile", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Etapas (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhuma etapa cadastrada. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, m) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
                /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { children: [
                  "Etapa ",
                  m + 1
                ] })
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => h(m),
                  className: "text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: l.title || "",
                  onDebouncedChange: (i) => f(m, "title", i),
                  className: "input-admin",
                  placeholder: "Título da etapa"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Descrição" }),
              /* @__PURE__ */ e(
                te,
                {
                  value: l.description || "",
                  onDebouncedChange: (i) => f(m, "description", i),
                  className: "input-admin",
                  placeholder: "Descrição da etapa...",
                  rows: 2
                }
              )
            ] })
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Processo",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("process", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...l
            }
          });
        }
      }
    )
  ] });
});
ps.displayName = "ProcessEditorV2";
const xs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.forWhom, n = o?.items || [], d = j(() => {
    const l = [...n, ""];
    s("forWhom", { ...o, items: l });
  }, [n, o, s]), h = j((l) => {
    const m = n.filter((i, c) => c !== l);
    s("forWhom", { ...o, items: m });
  }, [n, o, s]), f = j((l, m) => {
    const i = [...n];
    i[l] = m, s("forWhom", { ...o, items: i });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Para Quem" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("forWhom", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Textos" }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Título" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.title || "",
            onDebouncedChange: (l) => r("forWhom", "title", l),
            className: "input-admin",
            placeholder: "Ex: Para quem é a LimpMe?"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Subtítulo" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.subtitle || "",
            onDebouncedChange: (l) => r("forWhom", "subtitle", l),
            className: "input-admin",
            placeholder: "Subtítulo da seção"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Imagens" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Desktop",
            recommendedSize: "1920 × 1080",
            value: o?.imageDesktop,
            onChange: (l) => r("forWhom", "imageDesktop", l)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Imagem Mobile",
            recommendedSize: "1080 × 1350",
            value: o?.imageMobile,
            onChange: (l) => r("forWhom", "imageMobile", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Itens (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum item cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-3", children: n.map((l, m) => /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground shrink-0", children: [
          /* @__PURE__ */ e(pe, { className: "h-4 w-4" }),
          /* @__PURE__ */ a("span", { className: "w-6 text-center", children: [
            m + 1,
            "."
          ] })
        ] }),
        /* @__PURE__ */ e(
          N,
          {
            value: l || "",
            onDebouncedChange: (i) => f(m, i),
            className: "input-admin flex-1",
            placeholder: `Item ${m + 1}`
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => h(m),
            className: "text-destructive hover:text-destructive shrink-0",
            children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
          }
        )
      ] }, m)) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Para Quem",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("forWhom", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...l
            }
          });
        }
      }
    )
  ] });
});
xs.displayName = "ForWhomEditorV2";
const bs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.services, n = o?.items || [], d = j(() => {
    const m = [...n, { text: "", enabled: !0 }];
    s("services", { ...o, items: m });
  }, [n, o, s]), h = j((m) => {
    const i = n.filter((c, u) => u !== m);
    s("services", { ...o, items: i });
  }, [n, o, s]), f = j((m, i) => {
    const c = [...n];
    c[m] = { ...c[m], text: i }, s("services", { ...o, items: c });
  }, [n, o, s]), l = j((m, i) => {
    const c = [...n];
    c[m] = { ...c[m], enabled: i }, s("services", { ...o, items: c });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Serviços" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (m) => r("services", "enabled", m)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Título da Seção" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (m) => r("services", "title", m),
          className: "input-admin",
          placeholder: "Ex: Nossos Serviços"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Serviços (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum serviço cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-3", children: n.map((m, i) => /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground shrink-0", children: /* @__PURE__ */ e(pe, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ e(
          M,
          {
            checked: m.enabled !== !1,
            onCheckedChange: (c) => l(i, c)
          }
        ),
        /* @__PURE__ */ e(
          N,
          {
            value: m.text || "",
            onDebouncedChange: (c) => f(i, c),
            className: "input-admin flex-1",
            placeholder: `Serviço ${i + 1}`
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => h(i),
            className: "text-destructive hover:text-destructive shrink-0",
            children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
          }
        )
      ] }, i)) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Serviços",
        ctaData: o?.footerCta,
        onUpdate: (m) => {
          s("services", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...m
            }
          });
        }
      }
    )
  ] });
});
bs.displayName = "ServicesEditorV2";
const vs = $(({
  draft: t,
  updateField: r,
  updateSection: s
}) => {
  const o = t.plans, n = o?.items || [], d = j(() => {
    const c = `plan-${Date.now()}`, u = [
      ...n,
      {
        id: c,
        name: "",
        frequency: "mensal",
        price: "",
        originalPrice: "",
        showStrikethrough: !1,
        discount: "",
        supportText: "",
        features: [],
        link: "",
        recommended: !1
      }
    ];
    s("plans", { ...o, items: u });
  }, [n, o, s]), h = j((c) => {
    const u = n.filter((x, p) => p !== c);
    s("plans", { ...o, items: u });
  }, [n, o, s]), f = j((c, u, x) => {
    const p = [...n];
    p[c] = { ...p[c], [u]: x }, s("plans", { ...o, items: p });
  }, [n, o, s]), l = j((c) => {
    const u = [...n], x = [...u[c].features || [], ""];
    u[c] = { ...u[c], features: x }, s("plans", { ...o, items: u });
  }, [n, o, s]), m = j((c, u) => {
    const x = [...n], p = (x[c].features || []).filter((b, w) => w !== u);
    x[c] = { ...x[c], features: p }, s("plans", { ...o, items: x });
  }, [n, o, s]), i = j((c, u, x) => {
    const p = [...n], b = [...p[c].features || []];
    b[u] = x, p[c] = { ...p[c], features: b }, s("plans", { ...o, items: p });
  }, [n, o, s]);
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Planos" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (c) => r("plans", "enabled", c)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Título da Seção" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (c) => r("plans", "title", c),
          className: "input-admin",
          placeholder: "Ex: Escolha seu plano"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
          "Planos (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar Plano"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum plano cadastrado. Clique em "Adicionar Plano" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-6", children: n.map((c, u) => /* @__PURE__ */ a(
        "div",
        {
          className: `bg-muted/20 rounded-2xl border p-6 space-y-4 ${c.recommended ? "border-primary bg-primary/5" : "border-border/30"}`,
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(pe, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ e("span", { className: "font-medium text-foreground", children: c.name || `Plano ${u + 1}` }),
                c.recommended && /* @__PURE__ */ a(re, { variant: "default", className: "gap-1", children: [
                  /* @__PURE__ */ e(ze, { className: "h-3 w-3" }),
                  "Recomendado"
                ] })
              ] }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: c.recommended ? "default" : "outline",
                    size: "sm",
                    onClick: () => f(u, "recommended", !c.recommended),
                    children: /* @__PURE__ */ e(ze, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => h(u),
                    className: "text-destructive hover:text-destructive",
                    children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "grid md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Nome do Plano" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.name || "",
                    onDebouncedChange: (x) => f(u, "name", x),
                    className: "input-admin",
                    placeholder: "Ex: Mensal"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Frequência" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.frequency || "",
                    onDebouncedChange: (x) => f(u, "frequency", x),
                    className: "input-admin",
                    placeholder: "Ex: /mês"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Preço" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.price || "",
                    onDebouncedChange: (x) => f(u, "price", x),
                    className: "input-admin",
                    placeholder: "Ex: R$ 79,90"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "grid md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Preço Original" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.originalPrice || "",
                    onDebouncedChange: (x) => f(u, "originalPrice", x),
                    className: "input-admin",
                    placeholder: "Ex: R$ 99,90"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Desconto" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.discount || "",
                    onDebouncedChange: (x) => f(u, "discount", x),
                    className: "input-admin",
                    placeholder: "Ex: 20% OFF"
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-end", children: /* @__PURE__ */ a("div", { className: "flex items-center gap-2 h-10", children: [
                /* @__PURE__ */ e(
                  M,
                  {
                    checked: c.showStrikethrough || !1,
                    onCheckedChange: (x) => f(u, "showStrikethrough", x)
                  }
                ),
                /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Mostrar riscado" })
              ] }) })
            ] }),
            /* @__PURE__ */ a("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Texto de Suporte" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.supportText || "",
                    onDebouncedChange: (x) => f(u, "supportText", x),
                    className: "input-admin",
                    placeholder: "Ex: Sem fidelidade"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { children: [
                /* @__PURE__ */ e(g, { className: "text-foreground font-semibold mb-2 block", children: "Link do Botão" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: c.link || "",
                    onDebouncedChange: (x) => f(u, "link", x),
                    className: "input-admin",
                    placeholder: "Ex: /checkout?plan=mensal"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-3", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
                  "Características (",
                  c.features?.length || 0,
                  ")"
                ] }),
                /* @__PURE__ */ a(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => l(u),
                    children: [
                      /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
                      "Adicionar"
                    ]
                  }
                )
              ] }),
              (c.features || []).map((x, p) => /* @__PURE__ */ a("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ e(
                  N,
                  {
                    value: x,
                    onDebouncedChange: (b) => i(u, p, b),
                    className: "input-admin flex-1",
                    placeholder: "Ex: Lavagem completa"
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    onClick: () => m(u, p),
                    className: "shrink-0 text-muted-foreground hover:text-destructive",
                    children: /* @__PURE__ */ e(De, { className: "h-4 w-4" })
                  }
                )
              ] }, p))
            ] })
          ]
        },
        c.id || u
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Planos",
        ctaData: o?.footerCta,
        onUpdate: (c) => {
          s("plans", {
            ...o,
            footerCta: {
              ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 },
              ...c
            }
          });
        }
      }
    )
  ] });
});
vs.displayName = "PlansEditorV2";
const Ns = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.video;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Video" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "video-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "video-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (n) => r("video", "enabled", n)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (n) => r("video", "title", n),
          placeholder: "Ex: Assista ao nosso video"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Subtitulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.subtitle || "",
          onDebouncedChange: (n) => r("video", "subtitle", n),
          placeholder: "Ex: Conheca nosso trabalho"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "URL do Video (YouTube / Vimeo)" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.url || "",
          onDebouncedChange: (n) => r("video", "url", n),
          placeholder: "https://www.youtube.com/watch?v=..."
        }
      )
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Video",
        ctaData: o?.footerCta,
        onUpdate: (n) => {
          s("video", {
            ...t.video,
            footerCta: { ...t.video?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...n }
          });
        }
      }
    )
  ] });
});
Ns.displayName = "VideoEditorV2";
const ys = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.videoCarousel, n = o?.items || [], d = () => {
    const m = [...n, { title: "", url: "" }];
    s("videoCarousel", { ...t.videoCarousel, items: m });
  }, h = (m) => {
    const i = n.filter((c, u) => u !== m);
    s("videoCarousel", { ...t.videoCarousel, items: i });
  }, f = (m, i) => {
    const c = i === "up" ? m - 1 : m + 1;
    if (c < 0 || c >= n.length) return;
    const u = [...n];
    [u[m], u[c]] = [u[c], u[m]], s("videoCarousel", { ...t.videoCarousel, items: u });
  }, l = (m, i, c) => {
    const u = [...n];
    u[m] = { ...u[m], [i]: c }, s("videoCarousel", { ...t.videoCarousel, items: u });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Carrossel de Videos" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "videoCarousel-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "videoCarousel-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (m) => r("videoCarousel", "enabled", m)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (m) => r("videoCarousel", "title", m),
          placeholder: "Ex: Nossos Videos"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "Videos (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum video cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((m, i) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("span", { className: "text-sm font-medium text-muted-foreground", children: [
                "Video ",
                i + 1
              ] }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    disabled: i === 0,
                    onClick: () => f(i, "up"),
                    children: /* @__PURE__ */ e(va, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    disabled: i === n.length - 1,
                    onClick: () => f(i, "down"),
                    children: /* @__PURE__ */ e(Na, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 text-destructive hover:text-destructive",
                    onClick: () => h(i),
                    children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Titulo" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: m.title || "",
                  onDebouncedChange: (c) => l(i, "title", c),
                  placeholder: "Ex: Depoimento do cliente"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "URL do Video" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: m.url || "",
                  onDebouncedChange: (c) => l(i, "url", c),
                  placeholder: "https://www.youtube.com/watch?v=..."
                }
              )
            ] })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Carrossel de Videos",
        ctaData: o?.footerCta,
        onUpdate: (m) => {
          s("videoCarousel", {
            ...t.videoCarousel,
            footerCta: { ...t.videoCarousel?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...m }
          });
        }
      }
    )
  ] });
});
ys.displayName = "VideoCarouselEditorV2";
const ws = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.whyChoose, n = o?.items || [], d = () => {
    const l = [...n, { title: "", description: "" }];
    s("whyChoose", { ...t.whyChoose, items: l });
  }, h = (l) => {
    const m = n.filter((i, c) => c !== l);
    s("whyChoose", { ...t.whyChoose, items: m });
  }, f = (l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("whyChoose", { ...t.whyChoose, items: c });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Por que Escolher" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "whyChoose-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "whyChoose-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("whyChoose", "enabled", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (l) => r("whyChoose", "title", l),
          placeholder: "Ex: Por que escolher a LimpMe?"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Subtitulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.subtitle || "",
          onDebouncedChange: (l) => r("whyChoose", "subtitle", l),
          placeholder: "Ex: Descubra nossas vantagens"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ e(
        O,
        {
          value: o?.imageDesktop || "",
          onChange: (l) => r("whyChoose", "imageDesktop", l),
          label: "Imagem Desktop"
        }
      ),
      /* @__PURE__ */ e(
        O,
        {
          value: o?.imageMobile || "",
          onChange: (l) => r("whyChoose", "imageMobile", l),
          label: "Imagem Mobile"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "Itens (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum item cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, m) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("span", { className: "text-sm font-medium text-muted-foreground", children: [
                "Item ",
                m + 1
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "h-8 w-8 text-destructive hover:text-destructive",
                  onClick: () => h(m),
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Titulo" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: l.title || "",
                  onDebouncedChange: (i) => f(m, "title", i),
                  placeholder: "Ex: Profissionais qualificados"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Descricao" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: l.description || "",
                  onDebouncedChange: (i) => f(m, "description", i),
                  placeholder: "Ex: Nossa equipe e treinada..."
                }
              )
            ] })
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Por que Escolher",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("whyChoose", {
            ...t.whyChoose,
            footerCta: { ...t.whyChoose?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...l }
          });
        }
      }
    )
  ] });
});
ws.displayName = "WhyChooseEditorV2";
const Cs = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.testimonials, n = o?.items || [], d = () => {
    const i = [...n, { image: "", text: "", name: "", city: "", rating: 5 }];
    s("testimonials", { ...t.testimonials, items: i });
  }, h = (i) => {
    const c = n.filter((u, x) => x !== i);
    s("testimonials", { ...t.testimonials, items: c });
  }, f = (i, c) => {
    const u = c === "up" ? i - 1 : i + 1;
    if (u < 0 || u >= n.length) return;
    const x = [...n];
    [x[i], x[u]] = [x[u], x[i]], s("testimonials", { ...t.testimonials, items: x });
  }, l = (i, c, u) => {
    const x = [...n];
    x[i] = { ...x[i], [c]: u }, s("testimonials", { ...t.testimonials, items: x });
  }, m = (i, c) => /* @__PURE__ */ e("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((u) => /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: () => l(i, "rating", u),
      className: "focus:outline-none",
      children: /* @__PURE__ */ e(
        ze,
        {
          className: `h-5 w-5 transition-colors ${u <= c ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`
        }
      )
    },
    u
  )) });
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Depoimentos" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "testimonials-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "testimonials-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (i) => r("testimonials", "enabled", i)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (i) => r("testimonials", "title", i),
          placeholder: "Ex: O que nossos clientes dizem"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "Depoimentos (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed rounded-lg", children: 'Nenhum depoimento cadastrado. Clique em "Adicionar" para criar.' }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((i, c) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-sm font-medium text-muted-foreground", children: i.name || `Depoimento ${c + 1}` }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    disabled: c === 0,
                    onClick: () => f(c, "up"),
                    children: /* @__PURE__ */ e(va, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8",
                    disabled: c === n.length - 1,
                    onClick: () => f(c, "down"),
                    children: /* @__PURE__ */ e(Na, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 text-destructive hover:text-destructive",
                    onClick: () => h(c),
                    children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(
              O,
              {
                value: i.image || "",
                onChange: (u) => l(c, "image", u),
                label: "Foto"
              }
            ),
            /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e(g, { children: "Nome" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: i.name || "",
                    onDebouncedChange: (u) => l(c, "name", u),
                    placeholder: "Ex: Maria Silva"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e(g, { children: "Cidade" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: i.city || "",
                    onDebouncedChange: (u) => l(c, "city", u),
                    placeholder: "Ex: Sao Paulo, SP"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Depoimento" }),
              /* @__PURE__ */ e(
                te,
                {
                  value: i.text || "",
                  onDebouncedChange: (u) => l(c, "text", u),
                  placeholder: "O que o cliente disse...",
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Avaliacao" }),
              m(c, i.rating || 5)
            ] })
          ]
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Depoimentos",
        ctaData: o?.footerCta,
        onUpdate: (i) => {
          s("testimonials", {
            ...t.testimonials,
            footerCta: { ...t.testimonials?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...i }
          });
        }
      }
    )
  ] });
});
Cs.displayName = "TestimonialsEditorV2";
const ks = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.about;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Sobre" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "about-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "about-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (n) => r("about", "enabled", n)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (n) => r("about", "title", n),
          placeholder: "Ex: Sobre a LimpMe"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Texto" }),
      /* @__PURE__ */ e(
        te,
        {
          value: o?.text || "",
          onDebouncedChange: (n) => r("about", "text", n),
          placeholder: "Conte a historia da sua empresa...",
          rows: 5
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ e(
        O,
        {
          value: o?.imageDesktop || "",
          onChange: (n) => r("about", "imageDesktop", n),
          label: "Imagem Desktop"
        }
      ),
      /* @__PURE__ */ e(
        O,
        {
          value: o?.imageMobile || "",
          onChange: (n) => r("about", "imageMobile", n),
          label: "Imagem Mobile"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Sobre",
        ctaData: o?.footerCta,
        onUpdate: (n) => {
          s("about", {
            ...t.about,
            footerCta: { ...t.about?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...n }
          });
        }
      }
    )
  ] });
});
ks.displayName = "AboutEditorV2";
const Ds = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.faq, n = o?.items || [], d = () => {
    const l = [...n, { question: "", answer: "" }];
    s("faq", { ...t.faq, items: l });
  }, h = (l) => {
    const m = n.filter((i, c) => c !== l);
    s("faq", { ...t.faq, items: m });
  }, f = (l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("faq", { ...t.faq, items: c });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "FAQ" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "faq-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "faq-enabled",
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("faq", "enabled", l)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.title || "",
          onDebouncedChange: (l) => r("faq", "title", l),
          placeholder: "Ex: Perguntas Frequentes"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "Perguntas (",
          n.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { type: "button", variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      n.length === 0 && /* @__PURE__ */ a("div", { className: "text-center py-8 border border-dashed rounded-lg", children: [
        /* @__PURE__ */ e(ya, { className: "h-8 w-8 mx-auto text-muted-foreground mb-2" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: 'Nenhuma pergunta cadastrada. Clique em "Adicionar" para criar.' })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, m) => /* @__PURE__ */ a(
        "div",
        {
          className: "bg-muted/20 rounded-2xl p-6 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("span", { className: "text-sm font-medium text-muted-foreground", children: [
                "Pergunta ",
                m + 1
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "h-8 w-8 text-destructive hover:text-destructive",
                  onClick: () => h(m),
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Pergunta" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: l.question || "",
                  onDebouncedChange: (i) => f(m, "question", i),
                  placeholder: "Ex: Como funciona o servico?"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { children: "Resposta" }),
              /* @__PURE__ */ e(
                te,
                {
                  value: l.answer || "",
                  onDebouncedChange: (i) => f(m, "answer", i),
                  placeholder: "Escreva a resposta completa...",
                  rows: 4
                }
              )
            ] })
          ]
        },
        m
      )) })
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "FAQ",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("faq", {
            ...t.faq,
            footerCta: { ...t.faq?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...l }
          });
        }
      }
    )
  ] });
});
Ds.displayName = "FAQEditorV2";
const Ss = $(({ draft: t, updateField: r }) => {
  const s = t.ctaFinal;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "CTA Final" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "ctaFinal-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "ctaFinal-enabled",
            checked: s?.enabled !== !1,
            onCheckedChange: (o) => r("ctaFinal", "enabled", o)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s?.title || "",
          onDebouncedChange: (o) => r("ctaFinal", "title", o),
          placeholder: "Ex: Pronto para comecar?"
        }
      ),
      /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
        "Use **texto** para negrito e ",
        "{{texto}}",
        " para destaque colorido."
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Subtitulo" }),
      /* @__PURE__ */ e(
        te,
        {
          value: s?.subtitle || "",
          onDebouncedChange: (o) => r("ctaFinal", "subtitle", o),
          placeholder: "Ex: Agende agora mesmo",
          rows: 3
        }
      ),
      /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
        "Use **texto** para negrito e ",
        "{{texto}}",
        " para destaque colorido."
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Texto do Botao" }),
        /* @__PURE__ */ e(
          N,
          {
            value: s?.buttonText || "",
            onDebouncedChange: (o) => r("ctaFinal", "buttonText", o),
            placeholder: "Ex: Quero Contratar"
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Link do Botao" }),
        /* @__PURE__ */ e(
          N,
          {
            value: s?.buttonLink || "",
            onDebouncedChange: (o) => r("ctaFinal", "buttonLink", o),
            placeholder: "Ex: /checkout"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Texto de confianca (opcional)" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s?.trustText || "",
          onDebouncedChange: (o) => r("ctaFinal", "trustText", o),
          placeholder: "Ex: Sem contrato. Cancele quando quiser."
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Micro-copy exibido abaixo do botao para reduzir fricao." })
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ e(
        O,
        {
          value: s?.imageDesktop || "",
          onChange: (o) => r("ctaFinal", "imageDesktop", o),
          label: "Imagem Desktop"
        }
      ),
      /* @__PURE__ */ e(
        O,
        {
          value: s?.imageMobile || "",
          onChange: (o) => r("ctaFinal", "imageMobile", o),
          label: "Imagem Mobile"
        }
      )
    ] })
  ] });
});
Ss.displayName = "CTAFinalEditorV2";
const Es = $(({ draft: t, updateField: r }) => {
  const s = t.contact;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("h2", { className: "text-xl font-semibold text-foreground", children: "Contato" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "contact-enabled", className: "text-sm font-normal", children: "Ativada" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "contact-enabled",
            checked: s?.enabled !== !1,
            onCheckedChange: (o) => r("contact", "enabled", o)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s?.title || "",
          onDebouncedChange: (o) => r("contact", "title", o),
          placeholder: "Ex: Entre em Contato"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Subtitulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s?.subtitle || "",
          onDebouncedChange: (o) => r("contact", "subtitle", o),
          placeholder: "Ex: Estamos prontos para te ajudar"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Link do WhatsApp" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s?.whatsappLink || "",
          onDebouncedChange: (o) => r("contact", "whatsappLink", o),
          placeholder: "Ex: https://wa.me/5511999999999"
        }
      )
    ] })
  ] });
});
Es.displayName = "ContactEditorV2";
const Ps = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.kpis, n = o?.items || [], d = (l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("kpis", { ...o, items: c });
  }, h = () => {
    s("kpis", {
      ...o,
      items: [...n, { enabled: !0, value: "", label: "", description: "" }]
    });
  }, f = (l) => {
    s("kpis", { ...o, items: n.filter((m, i) => i !== l) });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "KPIs / Números" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("kpis", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    n.map((l, m) => /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "KPI ",
          m + 1
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: l.enabled !== !1,
              onCheckedChange: (i) => d(m, "enabled", i)
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => f(m),
              className: "text-destructive hover:text-destructive h-8 w-8",
              children: /* @__PURE__ */ e(Y, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Valor" }),
          /* @__PURE__ */ e(
            N,
            {
              value: l.value || "",
              onDebouncedChange: (i) => d(m, "value", i),
              placeholder: "Ex: +1.800",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Rótulo" }),
          /* @__PURE__ */ e(
            N,
            {
              value: l.label || "",
              onDebouncedChange: (i) => d(m, "label", i),
              placeholder: "Ex: Clientes atendidos",
              className: "input-admin"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground", children: "Descrição (opcional)" }),
        /* @__PURE__ */ e(
          N,
          {
            value: l.description || "",
            onDebouncedChange: (i) => d(m, "description", i),
            placeholder: "Ex: em todo o Brasil",
            className: "input-admin"
          }
        )
      ] })
    ] }, m)),
    /* @__PURE__ */ e(
      D,
      {
        variant: "outline",
        onClick: h,
        className: "text-foreground border-border hover:bg-accent/10 rounded-full",
        children: "+ Adicionar KPI"
      }
    ),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "KPIs",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("kpis", {
            ...o,
            footerCta: { ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...l }
          });
        }
      }
    )
  ] });
});
Ps.displayName = "KPIsEditorV2";
const Ts = $(({ draft: t, updateField: r, updateNestedField: s, updateSection: o }) => {
  const n = t.footer, d = n?.privacy || { text: "Política de Privacidade", url: "", hasLink: !1, enabled: !0 }, h = n?.terms || { text: "Termos de Uso", url: "", hasLink: !1, enabled: !0 }, f = n?.cnpj || { text: "", enabled: !0 }, l = n?.socials || {
    instagram: { url: "", enabled: !1 },
    facebook: { url: "", enabled: !1 },
    linkedin: { url: "", enabled: !1 },
    youtube: { url: "", enabled: !1 },
    tiktok: { url: "", enabled: !1 }
  }, m = {
    instagram: "Instagram",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    tiktok: "TikTok"
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Footer" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: n?.enabled !== !1,
            onCheckedChange: (i) => r("footer", "enabled", i)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Logo" }),
      /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-6", children: [
        /* @__PURE__ */ e(
          O,
          {
            label: "Logo (original)",
            value: n?.logo,
            onChange: (i) => r("footer", "logo", i)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Logo Desktop",
            value: n?.logoDesktop,
            onChange: (i) => r("footer", "logoDesktop", i)
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            label: "Logo Mobile",
            value: n?.logoMobile,
            onChange: (i) => r("footer", "logoMobile", i)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Links de Navegação" }),
      n?.links?.map((i, c) => /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: i.enabled !== !1,
            onCheckedChange: (u) => {
              const x = [...n.links || []];
              x[c] = { ...x[c], enabled: u }, r("footer", "links", x);
            }
          }
        ),
        /* @__PURE__ */ e(
          N,
          {
            placeholder: "Texto",
            value: i.text || "",
            onDebouncedChange: (u) => {
              const x = [...n.links || []];
              x[c] = { ...x[c], text: u }, r("footer", "links", x);
            },
            className: "input-admin flex-1"
          }
        ),
        /* @__PURE__ */ e(
          N,
          {
            placeholder: "URL (ex: #planos)",
            value: i.url || "",
            onDebouncedChange: (u) => {
              const x = [...n.links || []];
              x[c] = { ...x[c], url: u }, r("footer", "links", x);
            },
            className: "input-admin flex-1"
          }
        )
      ] }, c)),
      /* @__PURE__ */ e(
        D,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            const i = [...n?.links || [], { text: "", url: "", enabled: !0 }];
            r("footer", "links", i);
          },
          className: "text-foreground border-border hover:bg-accent/10 rounded-full",
          children: "+ Adicionar Link"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "CNPJ" }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: f.enabled !== !1,
              onCheckedChange: (i) => s("footer.cnpj", { ...f, enabled: i })
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Exibir" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        N,
        {
          placeholder: "Ex: CNPJ: 00.000.000/0000-00",
          value: f.text,
          onDebouncedChange: (i) => s("footer.cnpj", { ...f, text: i }),
          className: "input-admin"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Política de Privacidade" }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: d.enabled !== !1,
              onCheckedChange: (i) => s("footer.privacy", { ...d, enabled: i })
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Exibir" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        N,
        {
          placeholder: "Texto (ex: Política de Privacidade)",
          value: d.text,
          onDebouncedChange: (i) => s("footer.privacy", { ...d, text: i }),
          className: "input-admin"
        }
      ),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: d.hasLink,
            onCheckedChange: (i) => s("footer.privacy", { ...d, hasLink: i })
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "É um link clicável?" })
      ] }),
      d.hasLink && /* @__PURE__ */ e(
        N,
        {
          placeholder: "URL do link (ex: https://exemplo.com/privacidade)",
          value: d.url,
          onDebouncedChange: (i) => s("footer.privacy", { ...d, url: i }),
          className: "input-admin"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Termos de Uso" }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: h.enabled !== !1,
              onCheckedChange: (i) => s("footer.terms", { ...h, enabled: i })
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Exibir" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        N,
        {
          placeholder: "Texto (ex: Termos de Uso)",
          value: h.text,
          onDebouncedChange: (i) => s("footer.terms", { ...h, text: i }),
          className: "input-admin"
        }
      ),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: h.hasLink,
            onCheckedChange: (i) => s("footer.terms", { ...h, hasLink: i })
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "É um link clicável?" })
      ] }),
      h.hasLink && /* @__PURE__ */ e(
        N,
        {
          placeholder: "URL do link (ex: https://exemplo.com/termos)",
          value: h.url,
          onDebouncedChange: (i) => s("footer.terms", { ...h, url: i }),
          className: "input-admin"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Redes Sociais" }),
      Object.keys(m).map((i) => /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: l[i]?.enabled || !1,
            onCheckedChange: (c) => {
              s(`footer.socials.${i}`, { ...l[i], enabled: c });
            }
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm w-24", children: m[i] }),
        /* @__PURE__ */ e(
          N,
          {
            placeholder: `URL do ${m[i]}`,
            value: l[i]?.url || "",
            onDebouncedChange: (c) => {
              s(`footer.socials.${i}`, { ...l[i], url: c });
            },
            className: "input-admin flex-1",
            disabled: !l[i]?.enabled
          }
        )
      ] }, i))
    ] })
  ] });
});
Ts.displayName = "FooterEditorV2";
const di = [
  { value: "text", label: "Texto" },
  { value: "email", label: "E-mail" },
  { value: "phone", label: "Telefone" },
  { value: "cpf", label: "CPF" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "cep", label: "CEP" },
  { value: "select", label: "Seleção" },
  { value: "date", label: "Data" },
  { value: "textarea", label: "Texto Longo" },
  { value: "checkbox", label: "Checkbox" },
  { value: "paragraph", label: "Parágrafo (info)" }
], _s = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.form, n = o?.fields || [], d = (l, m, i) => {
    const c = [...n];
    c[l] = { ...c[l], [m]: i }, s("form", { ...o, fields: c });
  }, h = () => {
    const l = {
      id: `field_${Date.now()}`,
      type: "text",
      label: "",
      placeholder: "",
      required: !1,
      width: "100%"
    };
    s("form", { ...o, fields: [...n, l] });
  }, f = (l) => {
    s("form", { ...o, fields: n.filter((m, i) => i !== l) });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Formulário" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (l) => r("form", "enabled", l)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar seção" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Configuração Geral" }),
      /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Título" }),
          /* @__PURE__ */ e(
            N,
            {
              value: o?.title || "",
              onDebouncedChange: (l) => r("form", "title", l),
              placeholder: "Ex: Agende sua limpeza",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Subtítulo" }),
          /* @__PURE__ */ e(
            N,
            {
              value: o?.subtitle || "",
              onDebouncedChange: (l) => r("form", "subtitle", l),
              placeholder: "Ex: Preencha os dados abaixo",
              className: "input-admin"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground", children: "Texto do Botão de Envio" }),
        /* @__PURE__ */ e(
          N,
          {
            value: o?.ctaButton || "",
            onDebouncedChange: (l) => r("form", "ctaButton", l),
            placeholder: "Ex: Enviar",
            className: "input-admin"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Webhook (n8n / Integração)" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "URL para onde os dados do formulário serão enviados automaticamente após o submit. O envio é não-bloqueante: se falhar, o submit principal continua funcionando." }),
      /* @__PURE__ */ e(
        N,
        {
          value: o?.webhookUrl || "",
          onDebouncedChange: (l) => r("form", "webhookUrl", l),
          placeholder: "Ex: https://n8n.seudominio.com/webhook/abc123",
          className: "input-admin"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Ação Após Envio" }),
      /* @__PURE__ */ a(
        de,
        {
          value: o?.successAction?.type || "toast",
          onValueChange: (l) => {
            s("form", {
              ...o,
              successAction: { ...o?.successAction || {}, type: l }
            });
          },
          children: [
            /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, { placeholder: "Tipo de ação" }) }),
            /* @__PURE__ */ a(le, { children: [
              /* @__PURE__ */ e(R, { value: "toast", children: "Toast (notificação)" }),
              /* @__PURE__ */ e(R, { value: "redirect", children: "Redirecionar" }),
              /* @__PURE__ */ e(R, { value: "success-card", children: "Card de Sucesso" })
            ] })
          ]
        }
      ),
      o?.successAction?.type === "redirect" && /* @__PURE__ */ e(
        N,
        {
          value: o.successAction.redirectUrl || "",
          onDebouncedChange: (l) => {
            s("form", {
              ...o,
              successAction: { ...o.successAction, redirectUrl: l }
            });
          },
          placeholder: "URL de redirecionamento",
          className: "input-admin"
        }
      ),
      o?.successAction?.type === "success-card" && /* @__PURE__ */ a("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          N,
          {
            value: o.successAction.successTitle || "",
            onDebouncedChange: (l) => {
              s("form", {
                ...o,
                successAction: { ...o.successAction, successTitle: l }
              });
            },
            placeholder: "Título de sucesso",
            className: "input-admin"
          }
        ),
        /* @__PURE__ */ e(
          te,
          {
            value: o.successAction.successMessage || "",
            onDebouncedChange: (l) => {
              s("form", {
                ...o,
                successAction: { ...o.successAction, successMessage: l }
              });
            },
            placeholder: "Mensagem de sucesso",
            className: "input-admin"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
        "Campos (",
        n.length,
        ")"
      ] }),
      n.map((l, m) => /* @__PURE__ */ a("div", { className: "bg-background/50 rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(pe, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
              "Campo ",
              m + 1
            ] })
          ] }),
          /* @__PURE__ */ e(
            D,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => f(m),
              className: "text-destructive hover:text-destructive h-8 w-8",
              children: /* @__PURE__ */ e(Y, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Tipo" }),
            /* @__PURE__ */ a(
              de,
              {
                value: l.type,
                onValueChange: (i) => d(m, "type", i),
                children: [
                  /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                  /* @__PURE__ */ e(le, { children: di.map((i) => /* @__PURE__ */ e(R, { value: i.value, children: i.label }, i.value)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Label" }),
            /* @__PURE__ */ e(
              N,
              {
                value: l.label || "",
                onDebouncedChange: (i) => d(m, "label", i),
                placeholder: "Ex: Nome completo",
                className: "input-admin"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Placeholder" }),
            /* @__PURE__ */ e(
              N,
              {
                value: l.placeholder || "",
                onDebouncedChange: (i) => d(m, "placeholder", i),
                placeholder: "Ex: Digite seu nome",
                className: "input-admin"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              M,
              {
                checked: l.required,
                onCheckedChange: (i) => d(m, "required", i)
              }
            ),
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Obrigatório" })
          ] }),
          /* @__PURE__ */ a(
            de,
            {
              value: l.width || "100%",
              onValueChange: (i) => d(m, "width", i),
              children: [
                /* @__PURE__ */ e(ne, { className: "input-admin w-32", children: /* @__PURE__ */ e(me, {}) }),
                /* @__PURE__ */ a(le, { children: [
                  /* @__PURE__ */ e(R, { value: "100%", children: "Largura total" }),
                  /* @__PURE__ */ e(R, { value: "50%", children: "Meia largura" })
                ] })
              ]
            }
          )
        ] }),
        l.type === "select" && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Opções (uma por linha)" }),
          /* @__PURE__ */ e(
            te,
            {
              value: (l.options || []).join(`
`),
              onDebouncedChange: (i) => d(m, "options", i.split(`
`).filter(Boolean)),
              placeholder: "Opção 1\\nOpção 2\\nOpção 3",
              className: "input-admin",
              rows: 3
            }
          )
        ] }),
        l.type === "paragraph" && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Conteúdo do Parágrafo" }),
          /* @__PURE__ */ e(
            te,
            {
              value: l.content || "",
              onDebouncedChange: (i) => d(m, "content", i),
              placeholder: "Texto informativo exibido no formulário",
              className: "input-admin",
              rows: 3
            }
          )
        ] })
      ] }, l.id || m)),
      /* @__PURE__ */ e(
        D,
        {
          variant: "outline",
          onClick: h,
          className: "text-foreground border-border hover:bg-accent/10 rounded-full",
          children: "+ Adicionar Campo"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Formulário",
        ctaData: o?.footerCta,
        onUpdate: (l) => {
          s("form", {
            ...o,
            footerCta: { ...o?.footerCta || { enabled: !1, text: "", link: "", mobileHidden: !1 }, ...l }
          });
        }
      }
    )
  ] });
});
_s.displayName = "FormEditorV2";
const As = $(({ draft: t, updateField: r }) => {
  const s = t.tracking, [o, n] = T(null);
  Q(() => {
    St().then(n);
  }, []);
  const d = s?.useGlobal !== !1;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground", children: "Rastreamento (Pixels)" }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: s?.enabled !== !1,
            onCheckedChange: (h) => r("tracking", "enabled", h)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativar rastreamento" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-muted/20 rounded-2xl p-5", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Herdar pixels globais" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: d ? "Campos vazios herdam automaticamente do painel global" : "Esta LP usa apenas seus próprios pixels (sem fallback global)" })
      ] }),
      /* @__PURE__ */ e(
        M,
        {
          checked: d,
          onCheckedChange: (h) => r("tracking", "useGlobal", h)
        }
      )
    ] }) }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Pixels de Rastreamento" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Cole os IDs dos pixels de cada plataforma. Eles serão injetados automaticamente no <head> da página." }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: Je.map(({ key: h, label: f, placeholder: l }) => {
        const m = s?.[h] || "", i = o?.[h] || "", c = pt(h, m), u = d && !m.trim() && !!i.trim(), x = !!m.trim();
        return /* @__PURE__ */ a("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: f }),
            /* @__PURE__ */ e(
              "div",
              {
                className: `w-2.5 h-2.5 rounded-full shrink-0 ${u ? "bg-blue-500" : ts(c.status)}`
              }
            )
          ] }),
          /* @__PURE__ */ e(
            N,
            {
              value: m,
              onDebouncedChange: (p) => r("tracking", h, p),
              placeholder: u ? `Global: ${i}` : l,
              className: "input-admin font-mono text-sm"
            }
          ),
          u ? /* @__PURE__ */ a("p", { className: "text-[11px] text-blue-400", children: [
            "↳ Herdando global: ",
            i
          ] }) : x && d && i.trim() ? /* @__PURE__ */ e("p", { className: "text-[11px] text-green-400", children: "Pixel específico ativo (sobrescreve global)" }) : c.status !== "empty" ? /* @__PURE__ */ e("p", { className: `text-[11px] ${c.status === "valid" ? "text-green-400" : c.status === "warning" ? "text-amber-400" : "text-red-400"}`, children: c.message }) : /* @__PURE__ */ e("p", { className: "text-[11px] text-muted-foreground/50", children: "Não configurado" })
        ] }, h);
      }) })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-3", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Status" }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: Je.map(({ key: h, label: f }) => {
        const l = s?.[h] || "", m = o?.[h] || "", i = d && !l.trim() && !!m.trim(), c = !!l.trim(), u = pt(h, l);
        let x, p;
        return c ? (x = ul(u.status), p = u.status === "valid" ? "Ativo" : u.status === "warning" ? "Espaços" : "Inválido") : i ? (x = "text-blue-400 bg-blue-500/20 border border-blue-500/30", p = "Global") : (x = "text-muted-foreground bg-muted/30", p = "Vazio"), /* @__PURE__ */ a(
          "span",
          {
            className: `px-3 py-1 rounded-full text-xs font-medium border ${x}`,
            children: [
              f.split("(")[0].trim(),
              ": ",
              p
            ]
          },
          h
        );
      }) })
    ] })
  ] });
});
As.displayName = "TrackingEditorV2";
const Is = $(({ draft: t, updateField: r }) => {
  const s = t.seo, o = s?.metaTitle?.length || 0, n = s?.metaDescription?.length || 0;
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "SEO" }),
    /* @__PURE__ */ a("div", { className: "bg-white rounded-2xl p-6 space-y-1", children: [
      /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 mb-2", children: "Prévia do Google:" }),
      /* @__PURE__ */ e("p", { className: "text-[#1a0dab] text-lg font-medium line-clamp-1", children: s?.metaTitle || "Título da página aparecerá aqui" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-[#006621] line-clamp-1", children: "https://seusite.com/pagina" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-[#545454] line-clamp-2", children: s?.metaDescription || "A descrição da página aparecerá aqui. Escreva algo atraente para aumentar a taxa de cliques." })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Meta Tags" }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Meta Title" }),
          /* @__PURE__ */ a("span", { className: `text-xs ${o > 60 ? "text-destructive" : o > 54 ? "text-yellow-500" : "text-muted-foreground"}`, children: [
            o,
            "/60"
          ] })
        ] }),
        /* @__PURE__ */ e(
          N,
          {
            value: s?.metaTitle || "",
            onDebouncedChange: (d) => r("seo", "metaTitle", d),
            placeholder: "Ex: LimpMe - Lavagem de Carros a Domicílio",
            className: "input-admin"
          }
        ),
        o > 60 && /* @__PURE__ */ e("p", { className: "text-xs text-destructive", children: "Limite excedido! O texto será cortado nos buscadores." })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Meta Description" }),
          /* @__PURE__ */ a("span", { className: `text-xs ${n > 160 ? "text-destructive" : n > 144 ? "text-yellow-500" : "text-muted-foreground"}`, children: [
            n,
            "/160"
          ] })
        ] }),
        /* @__PURE__ */ e(
          te,
          {
            value: s?.metaDescription || "",
            onDebouncedChange: (d) => r("seo", "metaDescription", d),
            placeholder: "Ex: Serviço de lavagem ecológica para seu veículo...",
            className: "input-admin",
            rows: 3
          }
        ),
        n > 160 && /* @__PURE__ */ e("p", { className: "text-xs text-destructive", children: "Limite excedido! O texto será cortado nos buscadores." })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Open Graph (Redes Sociais)" }),
      /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "OG Title" }),
          /* @__PURE__ */ e(
            N,
            {
              value: s?.ogTitle || "",
              onDebouncedChange: (d) => r("seo", "ogTitle", d),
              placeholder: "Título para compartilhamento",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "OG Description" }),
          /* @__PURE__ */ e(
            N,
            {
              value: s?.ogDescription || "",
              onDebouncedChange: (d) => r("seo", "ogDescription", d),
              placeholder: "Descrição para compartilhamento",
              className: "input-admin"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground", children: "OG Image (Imagem de compartilhamento)" }),
        /* @__PURE__ */ e(
          O,
          {
            value: s?.ogImage || "",
            onChange: (d) => r("seo", "ogImage", d),
            label: "OG Image"
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Tamanho recomendado: 1200x630 pixels" })
      ] })
    ] })
  ] });
});
Is.displayName = "SEOEditorV2";
const fe = A.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ a(
  Me.Root,
  {
    ref: s,
    className: C("relative flex w-full touch-none select-none items-center", t),
    ...r,
    children: [
      /* @__PURE__ */ e(Me.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ e(Me.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e(Me.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
fe.displayName = Me.Root.displayName;
function ie({ label: t, value: r, onChange: s, placeholder: o }) {
  return /* @__PURE__ */ a("div", { className: "space-y-1", children: [
    /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: t }),
    /* @__PURE__ */ a("div", { className: "flex gap-2 items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "color",
          value: r || "#000000",
          onChange: (n) => s(n.target.value),
          className: "w-10 h-10 rounded-lg cursor-pointer p-0.5 bg-transparent"
        }
      ),
      /* @__PURE__ */ e(
        N,
        {
          value: r || "",
          onDebouncedChange: s,
          placeholder: o || "#000000",
          className: "input-admin font-mono flex-1"
        }
      )
    ] })
  ] });
}
const mi = [
  {
    id: "premium",
    name: "LimpMe Premium",
    description: "Navy profundo + Verde LimpMe — Glass Apple",
    preview: "bg-gradient-to-br from-[#0e1724] to-[#162231]",
    values: {
      preset: "premium",
      primaryColor: "#14b781",
      secondaryColor: "#3b82f6",
      backgroundColor: "#0e1724",
      buttonColor: "#14b781",
      titleColor: "#ffffff",
      borderColor: "#476084",
      iconColor: "#14b781",
      starColor: "#facc15",
      textPrimaryColor: "#ffffff",
      textSecondaryColor: "#bfbfbf",
      gradient: { from: "#0e1724", to: "#162231" },
      glassIntensity: 0.14,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "dark",
    name: "Grafite Premium",
    description: "Cinza vitrificado + Emerald vibrante",
    preview: "bg-gradient-to-br from-[#18181B] to-[#27272A]",
    values: {
      preset: "dark",
      primaryColor: "#10B981",
      secondaryColor: "#6366F1",
      backgroundColor: "#18181B",
      buttonColor: "#10B981",
      titleColor: "#FAFAFA",
      borderColor: "#3F3F46",
      iconColor: "#10B981",
      starColor: "#FBBF24",
      textPrimaryColor: "#FAFAFA",
      textSecondaryColor: "#A1A1AA",
      gradient: { from: "#18181B", to: "#27272A" },
      glassIntensity: 0.1,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "offwhite",
    name: "Off White Clean",
    description: "Branco puro + Azul corporate — Glass Apple",
    preview: "bg-gradient-to-br from-[#FAFBFC] to-[#F1F5F9]",
    values: {
      preset: "offwhite",
      primaryColor: "#2563EB",
      secondaryColor: "#0EA5E9",
      backgroundColor: "#FAFBFC",
      buttonColor: "#2563EB",
      titleColor: "#0F172A",
      borderColor: "#E2E8F0",
      iconColor: "#2563EB",
      starColor: "#F59E0B",
      textPrimaryColor: "#0F172A",
      textSecondaryColor: "#64748B",
      gradient: { from: "#FAFBFC", to: "#F1F5F9" },
      glassIntensity: 0.45,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "emerald",
    name: "Emerald Forest",
    description: "Verde musgo profundo + Emerald brilhante",
    preview: "bg-gradient-to-br from-[#0F2419] to-[#14332A]",
    values: {
      preset: "emerald",
      primaryColor: "#34D399",
      secondaryColor: "#6EE7B7",
      backgroundColor: "#0F2419",
      buttonColor: "#34D399",
      titleColor: "#ECFDF5",
      borderColor: "#1E4D3A",
      iconColor: "#34D399",
      starColor: "#FCD34D",
      textPrimaryColor: "#ECFDF5",
      textSecondaryColor: "#86EFAC",
      gradient: { from: "#0F2419", to: "#14332A" },
      glassIntensity: 0.1,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "sand",
    name: "Sand Hamptons",
    description: "Areia premium + Bronze dourado — WCAG AA",
    preview: "bg-gradient-to-br from-[#F5F0E8] to-[#E8DFD0]",
    values: {
      preset: "sand",
      primaryColor: "#8B6914",
      secondaryColor: "#996515",
      backgroundColor: "#F5F0E8",
      buttonColor: "#8B6914",
      titleColor: "#1C1917",
      borderColor: "#B8A990",
      iconColor: "#8B6914",
      starColor: "#8B6914",
      textPrimaryColor: "#1C1917",
      textSecondaryColor: "#57534E",
      gradient: { from: "#F5F0E8", to: "#E8DFD0" },
      glassIntensity: 0.55,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "purple",
    name: "Purple Night",
    description: "Indigo profundo + Violeta eletrico",
    preview: "bg-gradient-to-br from-[#1A1025] to-[#251540]",
    values: {
      preset: "purple",
      primaryColor: "#A855F7",
      secondaryColor: "#EC4899",
      backgroundColor: "#1A1025",
      buttonColor: "#A855F7",
      titleColor: "#F3E8FF",
      borderColor: "#3B2560",
      iconColor: "#A855F7",
      starColor: "#FBBF24",
      textPrimaryColor: "#F3E8FF",
      textSecondaryColor: "#C4B5FD",
      gradient: { from: "#1A1025", to: "#251540" },
      glassIntensity: 0.1,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  },
  {
    id: "midnight",
    name: "Midnight Cyan",
    description: "Indigo profundo + Cyan eletrico",
    preview: "bg-gradient-to-br from-[#0C1222] to-[#162032]",
    values: {
      preset: "midnight",
      primaryColor: "#22D3EE",
      secondaryColor: "#0EA5E9",
      backgroundColor: "#0C1222",
      buttonColor: "#22D3EE",
      titleColor: "#ECFEFF",
      borderColor: "#164E63",
      iconColor: "#22D3EE",
      starColor: "#FBBF24",
      textPrimaryColor: "#ECFEFF",
      textSecondaryColor: "#67E8F9",
      gradient: { from: "#0C1222", to: "#162032" },
      glassIntensity: 0.12,
      cardRoundness: "medio",
      verticalSpacing: "medium",
      fontFamily: "Inter, sans-serif"
    }
  }
], Ms = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.design, [n, d] = T(!1), h = o?.preset || "", f = h === "custom" || !h && o?.primaryColor, l = (c) => {
    s("design", { ...o, ...c.values });
  }, m = (c, u) => {
    const x = o?.gradient || { from: "", to: "" };
    s("design", {
      ...o,
      preset: "custom",
      gradient: { ...x, [c]: u }
    });
  }, i = (c, u) => {
    r("design", c, u), c !== "preset" && r("design", "preset", "custom");
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Design" }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ e(qt, { className: "h-5 w-5 text-accent" }),
        "Temas Prontos"
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Escolha um tema como ponto de partida. Todas as cores serao aplicadas automaticamente." }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: mi.map((c) => {
        const u = h === c.id;
        return /* @__PURE__ */ a(
          "div",
          {
            className: C(
              "relative rounded-2xl border-2 overflow-hidden transition-all duration-200 cursor-pointer group",
              u ? "border-accent shadow-lg shadow-accent/10" : "border-border/30 hover:border-border/60 hover:shadow-md"
            ),
            onClick: () => l(c),
            children: [
              /* @__PURE__ */ e("div", { className: C("h-24 w-full", c.preview) }),
              /* @__PURE__ */ a("div", { className: "p-4 bg-background/80 space-y-2", children: [
                /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e("h3", { className: "font-semibold text-foreground text-sm", children: c.name }),
                  u && /* @__PURE__ */ a(re, { className: "bg-accent/20 text-accent border-accent/30 text-xs", children: [
                    /* @__PURE__ */ e(ue, { className: "h-3 w-3 mr-1" }),
                    "Ativo"
                  ] })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: c.description }),
                /* @__PURE__ */ e("div", { className: "flex gap-1.5 pt-1", children: [
                  c.values.primaryColor,
                  c.values.backgroundColor,
                  c.values.titleColor,
                  c.values.secondaryColor
                ].filter(Boolean).map((x, p) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-5 h-5 rounded-full",
                    style: { backgroundColor: x }
                  },
                  p
                )) }),
                /* @__PURE__ */ e(
                  D,
                  {
                    type: "button",
                    size: "sm",
                    variant: u ? "default" : "outline",
                    className: C(
                      "w-full mt-2 text-xs",
                      u && "bg-accent hover:bg-accent/90 text-white"
                    ),
                    onClick: (x) => {
                      x.stopPropagation(), l(c);
                    },
                    children: u ? "Tema Ativo" : "Aplicar Tema"
                  }
                )
              ] })
            ]
          },
          c.id
        );
      }) }),
      f && /* @__PURE__ */ a("div", { className: "flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20", children: [
        /* @__PURE__ */ e(qt, { className: "h-4 w-4 text-amber-400" }),
        /* @__PURE__ */ e("span", { className: "text-sm text-amber-400", children: "Tema personalizado — cores ajustadas manualmente" })
      ] })
    ] }),
    /* @__PURE__ */ a(jt, { open: n, onOpenChange: d, children: [
      /* @__PURE__ */ e($t, { asChild: !0, children: /* @__PURE__ */ a(
        "button",
        {
          className: "flex items-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-muted/20 text-foreground font-semibold text-base hover:bg-muted/30 transition-colors",
          children: [
            /* @__PURE__ */ e(
              Ct,
              {
                className: C(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  n && "rotate-90"
                )
              }
            ),
            "Personalizacao Avancada",
            /* @__PURE__ */ e("span", { className: "text-xs font-normal text-muted-foreground ml-auto", children: "Cores, gradiente, glass e layout" })
          ]
        }
      ) }),
      /* @__PURE__ */ a(zt, { className: "space-y-6 pt-4", children: [
        /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Cores Principais" }),
          /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ e(
              ie,
              {
                label: "Cor Primaria *",
                value: o?.primaryColor || "",
                onChange: (c) => i("primaryColor", c),
                placeholder: "#22c55e"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Cor Secundaria",
                value: o?.secondaryColor || "",
                onChange: (c) => i("secondaryColor", c),
                placeholder: "#3b82f6"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Cor de Fundo *",
                value: o?.backgroundColor || "",
                onChange: (c) => i("backgroundColor", c),
                placeholder: "#0f172a"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Cores de Elementos" }),
          /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ e(
              ie,
              {
                label: "Botoes",
                value: o?.buttonColor || "",
                onChange: (c) => i("buttonColor", c),
                placeholder: "#22c55e"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Titulos",
                value: o?.titleColor || "",
                onChange: (c) => i("titleColor", c),
                placeholder: "#ffffff"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Bordas",
                value: o?.borderColor || "",
                onChange: (c) => i("borderColor", c),
                placeholder: "#334155"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Icones",
                value: o?.iconColor || "",
                onChange: (c) => i("iconColor", c),
                placeholder: "#22c55e"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Estrelas",
                value: o?.starColor || "",
                onChange: (c) => i("starColor", c),
                placeholder: "#facc15"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Texto Primario",
                value: o?.textPrimaryColor || "",
                onChange: (c) => i("textPrimaryColor", c),
                placeholder: "#ffffff"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Texto Secundario",
                value: o?.textSecondaryColor || "",
                onChange: (c) => i("textSecondaryColor", c),
                placeholder: "#94a3b8"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Gradiente de Fundo" }),
          /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ e(
              ie,
              {
                label: "De (inicio)",
                value: o?.gradient?.from || "",
                onChange: (c) => m("from", c),
                placeholder: "#0f172a"
              }
            ),
            /* @__PURE__ */ e(
              ie,
              {
                label: "Para (fim)",
                value: o?.gradient?.to || "",
                onChange: (c) => m("to", c),
                placeholder: "#1e293b"
              }
            )
          ] }),
          o?.gradient?.from && o?.gradient?.to && /* @__PURE__ */ e(
            "div",
            {
              className: "h-8 rounded-xl",
              style: {
                background: `linear-gradient(to right, ${o.gradient.from}, ${o.gradient.to})`
              }
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Efeito Glass" }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Intensidade" }),
              /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: (o?.glassIntensity ?? 0.1).toFixed(2) })
            ] }),
            /* @__PURE__ */ e(
              fe,
              {
                value: [o?.glassIntensity ?? 0.1],
                onValueChange: ([c]) => i("glassIntensity", c),
                min: 0,
                max: 1,
                step: 0.05,
                className: "w-full"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Layout" }),
          /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Arredondamento dos Cards" }),
              /* @__PURE__ */ a(
                de,
                {
                  value: o?.cardRoundness || "medio",
                  onValueChange: (c) => i("cardRoundness", c),
                  children: [
                    /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                    /* @__PURE__ */ a(le, { children: [
                      /* @__PURE__ */ e(R, { value: "leve", children: "Leve (8px)" }),
                      /* @__PURE__ */ e(R, { value: "medio", children: "Medio (16px)" }),
                      /* @__PURE__ */ e(R, { value: "full", children: "Arredondado (24px)" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Espacamento Vertical" }),
              /* @__PURE__ */ a(
                de,
                {
                  value: o?.verticalSpacing || "medium",
                  onValueChange: (c) => i("verticalSpacing", c),
                  children: [
                    /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                    /* @__PURE__ */ a(le, { children: [
                      /* @__PURE__ */ e(R, { value: "small", children: "Compacto" }),
                      /* @__PURE__ */ e(R, { value: "medium", children: "Medio" }),
                      /* @__PURE__ */ e(R, { value: "large", children: "Espacoso" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Fonte" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: o?.fontFamily || "",
                  onDebouncedChange: (c) => i("fontFamily", c),
                  placeholder: "Inter, sans-serif",
                  className: "input-admin"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
});
Ms.displayName = "DesignEditorV2";
const Ft = {
  hero: "Hero",
  benefits: "Beneficios",
  howItWorks: "Como Funciona",
  plans: "Planos",
  testimonials: "Depoimentos",
  kpis: "KPIs",
  about: "Sobre",
  contact: "Contato",
  beforeAfter: "Antes e Depois",
  process: "Processo",
  services: "Servicos",
  video: "Video",
  videoCarousel: "Carrossel de Videos",
  whyChoose: "Por que Escolher",
  ctaFinal: "CTA Final",
  faq: "FAQ",
  form: "Formulario",
  forWhom: "Para Quem"
}, ui = Object.keys(Ft), hi = ({ sectionId: t, isEnabled: r, onToggle: s, onRemove: o }) => {
  const {
    attributes: n,
    listeners: d,
    setNodeRef: h,
    transform: f,
    transition: l,
    isDragging: m
  } = po({ id: t }), i = {
    transform: xo.Transform.toString(f),
    transition: l
  };
  return /* @__PURE__ */ a(
    "div",
    {
      ref: h,
      style: i,
      className: C(
        "flex items-center gap-3 p-3 rounded-xl border transition-all duration-200",
        m && "opacity-80 shadow-lg z-50 scale-[1.02]",
        r ? "bg-background/50 border-border/20" : "bg-muted/30 border-border/10 opacity-60"
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: C(
              "cursor-grab active:cursor-grabbing p-1 rounded",
              "text-muted-foreground hover:text-foreground transition-colors",
              "touch-none select-none"
            ),
            ...n,
            ...d,
            children: /* @__PURE__ */ e(pe, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ e("span", { className: C(
          "flex-1 text-sm font-medium text-foreground",
          !r && "text-muted-foreground line-through"
        ), children: Ft[t] || t }),
        /* @__PURE__ */ e(
          M,
          {
            checked: r,
            onCheckedChange: () => s(),
            className: "data-[state=checked]:bg-accent data-[state=unchecked]:bg-muted"
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: o,
            className: "text-destructive hover:text-destructive text-xs h-7 px-2",
            children: "Remover"
          }
        )
      ]
    }
  );
}, Ls = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.sectionOrder || [], n = ui.filter((u) => !o.includes(u)), d = oo(
    rt(no, {
      activationConstraint: { distance: 8 }
    }),
    rt(lo, {
      activationConstraint: { delay: 200, tolerance: 5 }
    }),
    rt(io, {
      coordinateGetter: uo
    })
  ), h = (u) => {
    s("sectionOrder", u);
  }, f = (u) => {
    const { active: x, over: p } = u;
    if (p && x.id !== p.id) {
      const b = o.findIndex((I) => I === x.id), w = o.findIndex((I) => I === p.id);
      h(fo(o, b, w));
    }
  }, l = (u) => {
    h([...o, u]), r(u, "enabled", !0);
  }, m = (u) => {
    h(o.filter((x) => x !== u));
  }, i = (u) => {
    const x = t[u];
    return typeof x == "object" && x !== null && "enabled" in x ? x.enabled !== !1 : !0;
  }, c = (u) => {
    const x = i(u);
    r(u, "enabled", !x);
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Ordem das Secoes" }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
        "Secoes na Pagina (",
        o.length,
        ")"
      ] }),
      o.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-6 border border-dashed border-border/30 rounded-xl", children: "Nenhuma secao adicionada. Adicione secoes abaixo." }),
      /* @__PURE__ */ e(
        co,
        {
          sensors: d,
          collisionDetection: mo,
          onDragEnd: f,
          children: /* @__PURE__ */ e(
            ho,
            {
              items: o,
              strategy: go,
              children: /* @__PURE__ */ e("div", { className: "space-y-2", children: o.map((u) => /* @__PURE__ */ e(
                hi,
                {
                  sectionId: u,
                  isEnabled: i(u),
                  onToggle: () => c(u),
                  onRemove: () => m(u)
                },
                u
              )) })
            }
          )
        }
      )
    ] }),
    n.length > 0 && /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg", children: [
        "Secoes Disponiveis (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: n.map((u) => /* @__PURE__ */ a(
        D,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => l(u),
          className: "text-foreground border-border hover:bg-accent/10 rounded-full text-xs gap-1.5",
          children: [
            /* @__PURE__ */ e(J, { className: "h-3 w-3" }),
            Ft[u] || u
          ]
        },
        u
      )) })
    ] })
  ] });
});
Ls.displayName = "SectionOrderEditorV2";
const Vs = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.floatingWhatsapp, n = o?.stickyCta || { enabled: !1, text: "Contratar agora", link: "#plans", scrollThreshold: 30 }, d = (h, f) => {
    s("floatingWhatsapp", {
      ...o,
      stickyCta: { ...n, [h]: f }
    });
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ a("h2", { className: "text-2xl font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ e(ut, { className: "w-6 h-6 text-green-500" }),
        "CTAs Flutuantes"
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          M,
          {
            checked: o?.enabled !== !1,
            onCheckedChange: (h) => r("floatingWhatsapp", "enabled", h)
          }
        ),
        /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Ativado" })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Configuração" }),
      /* @__PURE__ */ a("div", { className: "space-y-4", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Número do WhatsApp *" }),
          /* @__PURE__ */ e(
            N,
            {
              value: o?.phoneNumber || "",
              onDebouncedChange: (h) => r("floatingWhatsapp", "phoneNumber", h),
              placeholder: "5548999999999",
              className: "input-admin font-mono"
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Formato: código do país + DDD + número (sem espaços ou caracteres)" })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Mensagem Pré-preenchida" }),
          /* @__PURE__ */ e(
            te,
            {
              value: o?.message || "",
              onDebouncedChange: (h) => r("floatingWhatsapp", "message", h),
              placeholder: "Olá! Gostaria de saber mais sobre...",
              className: "input-admin",
              rows: 3
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Esta mensagem aparecerá preenchida quando o usuário clicar no botão" })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground", children: "Texto do Botão" }),
          /* @__PURE__ */ e(
            N,
            {
              value: o?.label || "",
              onDebouncedChange: (h) => r("floatingWhatsapp", "label", h),
              placeholder: "Fale Conosco",
              className: "input-admin"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Opções Visuais" }),
      /* @__PURE__ */ a("div", { className: "space-y-4", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Efeito Pulse (Glow)" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Animação pulsante para chamar atenção" })
          ] }),
          /* @__PURE__ */ e(
            M,
            {
              checked: o?.pulseEffect !== !1,
              onCheckedChange: (h) => r("floatingWhatsapp", "pulseEffect", h)
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Exibir em Mobile" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Mostrar o botão em dispositivos móveis" })
          ] }),
          /* @__PURE__ */ e(
            M,
            {
              checked: o?.showOnMobile !== !1,
              onCheckedChange: (h) => r("floatingWhatsapp", "showOnMobile", h)
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Exibir Rótulo em Mobile" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Mostrar texto junto ao ícone em mobile" })
          ] }),
          /* @__PURE__ */ e(
            M,
            {
              checked: o?.showLabelOnMobile || !1,
              onCheckedChange: (h) => r("floatingWhatsapp", "showLabelOnMobile", h)
            }
          )
        ] })
      ] })
    ] }),
    o?.enabled && /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-3", children: [
      /* @__PURE__ */ e(g, { className: "text-foreground font-semibold text-lg", children: "Prévia" }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg", children: /* @__PURE__ */ e(ut, { className: "h-6 w-6" }) }),
        o?.label && /* @__PURE__ */ e("span", { className: "px-4 py-2 bg-background/80 rounded-full shadow text-sm font-medium text-foreground", children: o.label })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ e(ha, { className: "h-5 w-5 text-blue-400" }),
          "Sticky CTA Mobile"
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: n.enabled,
              onCheckedChange: (h) => d("enabled", h)
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: n.enabled ? "Ligado" : "Desligado" })
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Barra fixa no rodape do celular que aparece apos o visitante rolar a pagina. Ideal para manter o CTA sempre visivel." }),
      n.enabled && /* @__PURE__ */ a("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto do Botao" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n.text,
              onDebouncedChange: (h) => d("text", h),
              placeholder: "Contratar agora",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Link" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n.link,
              onDebouncedChange: (h) => d("link", h),
              placeholder: "#plans ou /checkout",
              className: "input-admin font-mono"
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "O cupom da campanha (se configurado) sera adicionado automaticamente" })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Scroll para aparecer (%)" }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: [n.scrollThreshold || 30],
                onValueChange: ([h]) => d("scrollThreshold", h),
                min: 10,
                max: 80,
                step: 5,
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-12 text-right", children: [
              n.scrollThreshold || 30,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "A barra aparece quando o visitante rolar esta porcentagem da pagina" })
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/10 rounded-xl p-4", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-xs font-semibold mb-2 block", children: "Previa (Mobile)" }),
          /* @__PURE__ */ e("div", { className: "mx-auto w-[200px] h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-white", children: n.text || "Contratar agora" }) })
        ] })
      ] })
    ] })
  ] });
});
Vs.displayName = "FloatingWhatsappEditorV2";
const ta = {
  enabled: !1,
  mode: "deadline",
  deadline: "",
  evergreenHours: 24,
  label: "Oferta termina em:",
  showInPlans: !0,
  showInCtaFinal: !0,
  expiredText: ""
}, aa = {
  enabled: !1,
  title: "Espera! Antes de ir...",
  text: "Garanta um desconto especial na sua primeira limpeza",
  ctaText: "Quero meu desconto",
  ctaLink: "/checkout",
  dismissText: "Nao, obrigado",
  frequency: "session",
  delaySeconds: 5
}, sa = {
  enabled: !1,
  items: [],
  intervalSeconds: 20,
  maxPerVisit: 5,
  position: "bottom-left"
}, js = $(({ draft: t, updateField: r, updateSection: s }) => {
  const o = t.conversion || { couponCode: "", countdown: ta, exitIntent: aa, socialProof: sa }, n = o.countdown || ta, d = o.exitIntent || aa, h = o.socialProof || sa, f = (p, b) => {
    s("conversion", { ...o, [p]: b });
  }, l = (p, b) => {
    s("conversion", {
      ...o,
      countdown: { ...n, [p]: b }
    });
  }, m = (p, b) => {
    s("conversion", {
      ...o,
      exitIntent: { ...d, [p]: b }
    });
  }, i = (p, b) => {
    s("conversion", {
      ...o,
      socialProof: { ...h, [p]: b }
    });
  }, c = () => {
    i("items", [
      ...h.items,
      { name: "", city: "", plan: "", timeAgo: "", message: "" }
    ]);
  }, u = (p) => {
    i("items", h.items.filter((b, w) => w !== p));
  }, x = (p, b, w) => {
    const I = [...h.items];
    I[p] = { ...I[p], [b]: w }, i("items", I);
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ e("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Conversao" }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ e(_r, { className: "h-5 w-5 text-accent" }),
        "Cupom da Campanha"
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Este cupom sera adicionado automaticamente aos links dos planos, exit intent e sticky CTA. O cupom precisa existir no Stripe." }),
      /* @__PURE__ */ e(
        N,
        {
          value: o.couponCode || "",
          onDebouncedChange: (p) => f("couponCode", p),
          placeholder: "Ex: PROMO25",
          className: "input-admin font-mono uppercase"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ e(Ar, { className: "h-5 w-5 text-orange-400" }),
          "Urgencia (Countdown)"
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: n.enabled,
              onCheckedChange: (p) => l("enabled", p)
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: n.enabled ? "Ligado" : "Desligado" })
        ] })
      ] }),
      n.enabled && /* @__PURE__ */ a("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Modo" }),
          /* @__PURE__ */ a(
            de,
            {
              value: n.mode,
              onValueChange: (p) => l("mode", p),
              children: [
                /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                /* @__PURE__ */ a(le, { children: [
                  /* @__PURE__ */ e(R, { value: "deadline", children: "Deadline fixa (data/hora)" }),
                  /* @__PURE__ */ e(R, { value: "evergreen", children: "Evergreen (por visitante)" }),
                  /* @__PURE__ */ e(R, { value: "roundHour", children: "Proxima hora cheia (trafego pago)" })
                ] })
              ]
            }
          )
        ] }),
        n.mode === "deadline" && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Data/Hora Limite" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "datetime-local",
              value: n.deadline || "",
              onChange: (p) => l("deadline", p.target.value),
              className: "input-admin font-mono w-full px-4 py-2 rounded-lg bg-muted/20 text-foreground"
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Selecione a data e hora limite da oferta" })
        ] }),
        n.mode === "evergreen" && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Duracao (horas)" }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: [n.evergreenHours || 24],
                onValueChange: ([p]) => l("evergreenHours", p),
                min: 1,
                max: 72,
                step: 1,
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-12 text-right", children: [
              n.evergreenHours || 24,
              "h"
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Cada visitante ve o timer a partir da primeira visita" })
        ] }),
        n.mode === "roundHour" && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Horas a frente" }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: [n.roundHourAhead || 2],
                onValueChange: ([p]) => l("roundHourAhead", p),
                min: 1,
                max: 6,
                step: 1,
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-12 text-right", children: [
              n.roundHourAhead || 2,
              "h"
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Timer conta ate a proxima hora cheia. Ex: visitante entra 15:37 com 2h → expira as 17:00. Ideal para trafego pago." })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto antes do timer" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n.label || "",
              onDebouncedChange: (p) => l("label", p),
              placeholder: "Oferta termina em:",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              M,
              {
                checked: n.showInPlans,
                onCheckedChange: (p) => l("showInPlans", p)
              }
            ),
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Mostrar nos Planos" })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              M,
              {
                checked: n.showInCtaFinal,
                onCheckedChange: (p) => l("showInCtaFinal", p)
              }
            ),
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Mostrar no CTA Final" })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto quando expirar (opcional)" }),
          /* @__PURE__ */ e(
            N,
            {
              value: n.expiredText || "",
              onDebouncedChange: (p) => l("expiredText", p),
              placeholder: "Oferta encerrada",
              className: "input-admin"
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a(g, { className: "text-foreground text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ e(Ye, { className: "h-3.5 w-3.5" }),
            "Cor de urgencia (opcional)"
          ] }),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "color",
                value: n.urgencyColor || "#DC2626",
                onChange: (p) => l("urgencyColor", p.target.value),
                className: "w-10 h-10 rounded-lg border border-border cursor-pointer"
              }
            ),
            /* @__PURE__ */ e(
              N,
              {
                value: n.urgencyColor || "",
                onDebouncedChange: (p) => l("urgencyColor", p),
                placeholder: "Vazio = cor accent do tema",
                className: "input-admin font-mono flex-1"
              }
            ),
            n.urgencyColor && /* @__PURE__ */ e(
              D,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: () => l("urgencyColor", ""),
                className: "text-xs",
                children: "Limpar"
              }
            )
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Deixe vazio para usar a cor accent do tema. Use vermelho (#DC2626) para urgencia." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ e(Ir, { className: "h-5 w-5 text-red-400" }),
          "Retencao (Exit Intent)"
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: d.enabled,
              onCheckedChange: (p) => m("enabled", p)
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: d.enabled ? "Ligado" : "Desligado" })
        ] })
      ] }),
      d.enabled && /* @__PURE__ */ a("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Titulo do Popup" }),
          /* @__PURE__ */ e(
            N,
            {
              value: d.title,
              onDebouncedChange: (p) => m("title", p),
              placeholder: "Espera! Antes de ir...",
              className: "input-admin"
            }
          ),
          /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
            "Use **texto** para negrito e ",
            "{{texto}}",
            " para destaque colorido."
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto" }),
          /* @__PURE__ */ e(
            te,
            {
              value: d.text,
              onDebouncedChange: (p) => m("text", p),
              placeholder: "Garanta 15% de desconto na sua primeira limpeza",
              className: "input-admin",
              rows: 3
            }
          ),
          /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", children: [
            "Use **texto** para negrito, ",
            "{{texto}}",
            " para destaque e quebra de linha com Enter."
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: d.titleUppercase !== !1,
              onCheckedChange: (p) => m("titleUppercase", p)
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Titulo em MAIUSCULAS" })
        ] }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto do Botao CTA" }),
            /* @__PURE__ */ e(
              N,
              {
                value: d.ctaText,
                onDebouncedChange: (p) => m("ctaText", p),
                placeholder: "Quero meu desconto",
                className: "input-admin"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Link do CTA" }),
            /* @__PURE__ */ e(
              N,
              {
                value: d.ctaLink,
                onDebouncedChange: (p) => m("ctaLink", p),
                placeholder: "/checkout",
                className: "input-admin font-mono"
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "O cupom da campanha sera adicionado automaticamente" })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Texto de dispensa" }),
          /* @__PURE__ */ e(
            N,
            {
              value: d.dismissText || "",
              onDebouncedChange: (p) => m("dismissText", p),
              placeholder: "Nao, obrigado",
              className: "input-admin"
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Texto do link para fechar o popup sem converter" })
        ] }),
        /* @__PURE__ */ a("div", { className: "bg-muted/10 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: "Imagem do Popup (opcional)" }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-6 justify-center", children: /* @__PURE__ */ e(
            O,
            {
              label: "Imagem do Popup",
              recommendedSize: "800 × 600",
              value: d.imageUrl || "",
              onChange: (p) => m("imageUrl", p)
            }
          ) }),
          d.imageUrl?.trim() && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Posicao da Imagem" }),
            /* @__PURE__ */ a(
              de,
              {
                value: d.imagePosition || "top",
                onValueChange: (p) => m("imagePosition", p),
                children: [
                  /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                  /* @__PURE__ */ a(le, { children: [
                    /* @__PURE__ */ e(R, { value: "top", children: "Topo (acima do texto)" }),
                    /* @__PURE__ */ e(R, { value: "left", children: "Lateral esquerda (desktop)" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Frequencia" }),
            /* @__PURE__ */ a(
              de,
              {
                value: d.frequency,
                onValueChange: (p) => m("frequency", p),
                children: [
                  /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                  /* @__PURE__ */ a(le, { children: [
                    /* @__PURE__ */ e(R, { value: "session", children: "1x por sessao" }),
                    /* @__PURE__ */ e(R, { value: "day", children: "1x por dia" }),
                    /* @__PURE__ */ e(R, { value: "week", children: "1x por semana" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Delay minimo (segundos)" }),
            /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e(
                fe,
                {
                  value: [d.delaySeconds || 5],
                  onValueChange: ([p]) => m("delaySeconds", p),
                  min: 0,
                  max: 30,
                  step: 1,
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-8 text-right", children: [
                d.delaySeconds || 5,
                "s"
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "So mostra se o visitante ficou pelo menos X segundos" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "bg-muted/20 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ e(kt, { className: "h-5 w-5 text-yellow-400" }),
          "Prova Social (Toasts)"
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            M,
            {
              checked: h.enabled,
              onCheckedChange: (p) => i("enabled", p)
            }
          ),
          /* @__PURE__ */ e(g, { className: "text-foreground text-sm font-semibold", children: h.enabled ? "Ligado" : "Desligado" })
        ] })
      ] }),
      h.enabled && /* @__PURE__ */ a("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ a("div", { className: "space-y-3", children: [
          /* @__PURE__ */ a(g, { className: "text-foreground text-sm font-semibold", children: [
            "Mensagens (",
            h.items.length,
            ")"
          ] }),
          h.items.map((p, b) => /* @__PURE__ */ a("div", { className: "space-y-2 bg-muted/10 rounded-lg p-3", children: [
            /* @__PURE__ */ a("div", { className: "grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2 items-end", children: [
              /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                b === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Nome" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: p.name,
                    onDebouncedChange: (w) => x(b, "name", w),
                    placeholder: "Maria",
                    className: "input-admin text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                b === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Cidade" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: p.city,
                    onDebouncedChange: (w) => x(b, "city", w),
                    placeholder: "Sao Paulo",
                    className: "input-admin text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                b === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Plano" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: p.plan,
                    onDebouncedChange: (w) => x(b, "plan", w),
                    placeholder: "Gold",
                    className: "input-admin text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                b === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Tempo" }),
                /* @__PURE__ */ e(
                  N,
                  {
                    value: p.timeAgo,
                    onDebouncedChange: (w) => x(b, "timeAgo", w),
                    placeholder: "3 min",
                    className: "input-admin text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                D,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  onClick: () => u(b),
                  className: "h-9 w-9 text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Mensagem customizada (opcional)" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: p.message || "",
                  onDebouncedChange: (w) => x(b, "message", w),
                  placeholder: "Substitui o template padrao. Ex: Maria acabou de contratar!",
                  className: "input-admin text-sm"
                }
              )
            ] })
          ] }, b)),
          /* @__PURE__ */ a(
            D,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: c,
              className: "gap-1.5",
              children: [
                /* @__PURE__ */ e(J, { className: "h-3.5 w-3.5" }),
                "Adicionar mensagem"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2", children: [
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Intervalo (segundos)" }),
            /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e(
                fe,
                {
                  value: [h.intervalSeconds || 20],
                  onValueChange: ([p]) => i("intervalSeconds", p),
                  min: 10,
                  max: 60,
                  step: 5,
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-8 text-right", children: [
                h.intervalSeconds || 20,
                "s"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Duracao do toast (segundos)" }),
            /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e(
                fe,
                {
                  value: [h.toastDuration || 4],
                  onValueChange: ([p]) => i("toastDuration", p),
                  min: 2,
                  max: 10,
                  step: 1,
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ a("span", { className: "text-sm text-foreground font-mono w-8 text-right", children: [
                h.toastDuration || 4,
                "s"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Max por visita" }),
            /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e(
                fe,
                {
                  value: [h.maxPerVisit || 5],
                  onValueChange: ([p]) => i("maxPerVisit", p),
                  min: 1,
                  max: 15,
                  step: 1,
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-sm text-foreground font-mono w-8 text-right", children: h.maxPerVisit || 5 })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e(g, { className: "text-foreground text-sm", children: "Posicao" }),
            /* @__PURE__ */ a(
              de,
              {
                value: h.position || "bottom-left",
                onValueChange: (p) => i("position", p),
                children: [
                  /* @__PURE__ */ e(ne, { className: "input-admin", children: /* @__PURE__ */ e(me, {}) }),
                  /* @__PURE__ */ a(le, { children: [
                    /* @__PURE__ */ e(R, { value: "bottom-left", children: "Inferior Esquerdo" }),
                    /* @__PURE__ */ e(R, { value: "bottom-right", children: "Inferior Direito" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
});
js.displayName = "ConversionEditorV2";
const gi = {
  enabled: !1,
  logoUrl: "",
  links: []
}, $s = $(({ draft: t, updateSection: r }) => {
  const s = t.globalMenu || gi, o = (f, l) => {
    r("globalMenu", { ...s, [f]: l });
  }, n = () => {
    o("links", [...s.links || [], { text: "", url: "" }]);
  }, d = (f) => {
    o("links", (s.links || []).filter((l, m) => m !== f));
  }, h = (f, l, m) => {
    const i = [...s.links || []];
    i[f] = { ...i[f], [l]: m }, o("links", i);
  };
  return /* @__PURE__ */ a("div", { className: "glass-primitive rounded-3xl p-10 space-y-6", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("h2", { className: "text-xl font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ e(wa, { className: "h-5 w-5" }),
        "Menu Global"
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "globalMenu-enabled", className: "text-sm font-normal", children: "Ativado" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "globalMenu-enabled",
            checked: s.enabled,
            onCheckedChange: (f) => o("enabled", f)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Header fixo translucido com logo e links de navegacao. Aparece no topo da LP." }),
    s.enabled && /* @__PURE__ */ a("div", { className: "space-y-6 pt-2", children: [
      /* @__PURE__ */ a("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(g, { className: "text-foreground font-semibold", children: "Logo do Menu" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Se vazio, usa o logo do Footer automaticamente." }),
        /* @__PURE__ */ e(
          O,
          {
            label: "Logo",
            recommendedSize: "200 x 40",
            value: s.logoUrl || "",
            onChange: (f) => o("logoUrl", f)
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-3", children: [
        /* @__PURE__ */ a(g, { className: "text-foreground font-semibold", children: [
          "Links de Navegacao (",
          (s.links || []).length,
          ")"
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: "Visiveis apenas em desktop. Use anchors como #plans, #faq, etc." }),
        (s.links || []).map((f, l) => /* @__PURE__ */ a("div", { className: "grid grid-cols-[1fr_1fr_auto] gap-2 items-end", children: [
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            l === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Texto" }),
            /* @__PURE__ */ e(
              N,
              {
                value: f.text,
                onDebouncedChange: (m) => h(l, "text", m),
                placeholder: "Ex: Planos",
                className: "input-admin text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            l === 0 && /* @__PURE__ */ e(g, { className: "text-foreground text-xs", children: "Link" }),
            /* @__PURE__ */ e(
              N,
              {
                value: f.url,
                onDebouncedChange: (m) => h(l, "url", m),
                placeholder: "Ex: #plans",
                className: "input-admin text-sm font-mono"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            D,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              onClick: () => d(l),
              className: "h-9 w-9 text-destructive hover:text-destructive",
              children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
            }
          )
        ] }, l)),
        /* @__PURE__ */ a(
          D,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: n,
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ e(J, { className: "h-3.5 w-3.5" }),
              "Adicionar link"
            ]
          }
        )
      ] })
    ] })
  ] });
});
$s.displayName = "GlobalMenuEditorV2";
const zs = $(({ draft: t, updateSection: r }) => {
  const s = t.speakers ?? {}, o = s.items || [], n = (i) => {
    r("speakers", { ...s, ...i });
  }, d = () => {
    n({
      items: [
        ...o,
        { name: "", role: "", bio: "", image: "", socials: { instagram: "", linkedin: "", website: "" } }
      ]
    });
  }, h = (i) => {
    n({ items: o.filter((c, u) => u !== i) });
  }, f = (i, c) => {
    const u = [...o], x = c === "up" ? i - 1 : i + 1;
    x < 0 || x >= u.length || ([u[i], u[x]] = [u[x], u[i]], n({ items: u }));
  }, l = (i, c, u) => {
    const x = [...o];
    x[i] = { ...x[i], [c]: u }, n({ items: x });
  }, m = (i, c, u) => {
    const x = [...o];
    x[i] = {
      ...x[i],
      socials: { ...x[i].socials, [c]: u }
    }, n({ items: x });
  };
  return /* @__PURE__ */ a("div", { className: "space-y-8", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(Ca, { className: "h-5 w-5 text-accent" }),
        /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-foreground", children: "Palestrantes" })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "speakers-enabled", className: "text-sm text-muted-foreground", children: "Ativa" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "speakers-enabled",
            checked: s.enabled ?? !1,
            onCheckedChange: (i) => n({ enabled: i })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s.title || "",
          onDebouncedChange: (i) => n({ title: i }),
          placeholder: "Ex: Nossos Palestrantes"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { children: "Subtitulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s.subtitle || "",
          onDebouncedChange: (i) => n({ subtitle: i }),
          placeholder: "Opcional"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { children: "Layout" }),
      /* @__PURE__ */ a(
        de,
        {
          value: s.layout || "grid",
          onValueChange: (i) => n({ layout: i }),
          children: [
            /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(me, {}) }),
            /* @__PURE__ */ a(le, { children: [
              /* @__PURE__ */ e(R, { value: "grid", children: "Grid (todos iguais)" }),
              /* @__PURE__ */ e(R, { value: "featured", children: "Featured (primeiro maior)" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-base font-semibold", children: [
          "Palestrantes (",
          o.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar"
        ] })
      ] }),
      o.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed border-border rounded-lg", children: 'Nenhum palestrante. Clique em "Adicionar" para comecar.' }),
      o.map((i, c) => /* @__PURE__ */ a(
        "div",
        {
          className: "p-5 border border-border/40 rounded-xl bg-background/50 space-y-4",
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a("span", { className: "text-sm font-semibold text-foreground", children: [
                "#",
                c + 1,
                " ",
                i.name || "Palestrante"
              ] }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(
                  D,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7",
                    onClick: () => f(c, "up"),
                    disabled: c === 0,
                    children: /* @__PURE__ */ e(Ke, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7",
                    onClick: () => f(c, "down"),
                    disabled: c === o.length - 1,
                    children: /* @__PURE__ */ e(Pe, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7 text-destructive hover:text-destructive",
                    onClick: () => h(c),
                    children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(
              O,
              {
                value: i.image,
                onChange: (u) => l(c, "image", u),
                label: "Foto do palestrante",
                recommendedSize: "400x400px (quadrado)"
              }
            ),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ e(g, { className: "text-xs", children: "Nome" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: i.name || "",
                  onDebouncedChange: (u) => l(c, "name", u),
                  placeholder: "Nome completo"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ e(g, { className: "text-xs", children: "Cargo / Papel" }),
              /* @__PURE__ */ e(
                N,
                {
                  value: i.role || "",
                  onDebouncedChange: (u) => l(c, "role", u),
                  placeholder: "Ex: CEO, Palestrante, Especialista"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ e(g, { className: "text-xs", children: "Bio" }),
              /* @__PURE__ */ e(
                te,
                {
                  value: i.bio || "",
                  onDebouncedChange: (u) => l(c, "bio", u),
                  placeholder: "Breve descricao do palestrante...",
                  rows: 3
                }
              ),
              /* @__PURE__ */ a("p", { className: "text-[11px] text-muted-foreground", children: [
                "Use **texto** para negrito e ",
                "{{texto}}",
                " para destaque colorido"
              ] })
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-3 pt-2 border-t border-border/30", children: [
              /* @__PURE__ */ e(g, { className: "text-xs font-semibold", children: "Redes Sociais (opcional)" }),
              /* @__PURE__ */ a("div", { className: "grid grid-cols-1 gap-3", children: [
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(yt, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ e(
                    N,
                    {
                      value: i.socials?.instagram || "",
                      onDebouncedChange: (u) => m(c, "instagram", u),
                      placeholder: "https://instagram.com/...",
                      className: "flex-1"
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(Nt, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ e(
                    N,
                    {
                      value: i.socials?.linkedin || "",
                      onDebouncedChange: (u) => m(c, "linkedin", u),
                      placeholder: "https://linkedin.com/in/...",
                      className: "flex-1"
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(ma, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ e(
                    N,
                    {
                      value: i.socials?.website || "",
                      onDebouncedChange: (u) => m(c, "website", u),
                      placeholder: "https://...",
                      className: "flex-1"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        },
        c
      ))
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Palestrantes",
        ctaData: s.footerCta,
        onUpdate: (i) => n({ footerCta: { ...s.footerCta, ...i } })
      }
    )
  ] });
});
zs.displayName = "SpeakersEditorV2";
const Fs = $(({ draft: t, updateSection: r }) => {
  const s = t.sponsors ?? {}, o = s.tiers || [], n = (u) => {
    r("sponsors", { ...s, ...u });
  }, d = () => {
    n({
      tiers: [
        ...o,
        { name: "Novo Tier", enabled: !0, color: "", logoHeight: "md", items: [] }
      ]
    });
  }, h = (u) => {
    n({ tiers: o.filter((x, p) => p !== u) });
  }, f = (u, x) => {
    const p = [...o], b = x === "up" ? u - 1 : u + 1;
    b < 0 || b >= p.length || ([p[u], p[b]] = [p[b], p[u]], n({ tiers: p }));
  }, l = (u, x, p) => {
    const b = [...o];
    b[u] = { ...b[u], [x]: p }, n({ tiers: b });
  }, m = (u) => {
    const x = [...o];
    x[u] = {
      ...x[u],
      items: [...x[u].items, { name: "", logo: "", url: "" }]
    }, n({ tiers: x });
  }, i = (u, x) => {
    const p = [...o];
    p[u] = {
      ...p[u],
      items: p[u].items.filter((b, w) => w !== x)
    }, n({ tiers: p });
  }, c = (u, x, p, b) => {
    const w = [...o], I = [...w[u].items];
    I[x] = { ...I[x], [p]: b }, w[u] = { ...w[u], items: I }, n({ tiers: w });
  };
  return /* @__PURE__ */ a("div", { className: "space-y-8", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(kt, { className: "h-5 w-5 text-accent" }),
        /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-foreground", children: "Patrocinadores" })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(g, { htmlFor: "sponsors-enabled", className: "text-sm text-muted-foreground", children: "Ativa" }),
        /* @__PURE__ */ e(
          M,
          {
            id: "sponsors-enabled",
            checked: s.enabled ?? !1,
            onCheckedChange: (u) => n({ enabled: u })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { children: "Titulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s.title || "",
          onDebouncedChange: (u) => n({ title: u }),
          placeholder: "Ex: Nossos Patrocinadores"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e(g, { children: "Subtitulo" }),
      /* @__PURE__ */ e(
        N,
        {
          value: s.subtitle || "",
          onDebouncedChange: (u) => n({ subtitle: u }),
          placeholder: "Opcional"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-6", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a(g, { className: "text-base font-semibold", children: [
          "Categorias (",
          o.length,
          ")"
        ] }),
        /* @__PURE__ */ a(D, { variant: "outline", size: "sm", onClick: d, children: [
          /* @__PURE__ */ e(J, { className: "h-4 w-4 mr-1" }),
          "Adicionar Categoria"
        ] })
      ] }),
      o.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground text-center py-8 border border-dashed border-border rounded-lg", children: 'Nenhuma categoria. Clique em "Adicionar Categoria" para comecar.' }),
      o.map((u, x) => /* @__PURE__ */ a(
        "div",
        {
          className: "border border-border/40 rounded-xl bg-background/50 overflow-hidden",
          children: [
            /* @__PURE__ */ a(
              "div",
              {
                className: "flex items-center justify-between p-4 border-b border-border/30",
                style: u.color ? { borderLeftWidth: 4, borderLeftColor: u.color } : void 0,
                children: [
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
                    /* @__PURE__ */ e(
                      M,
                      {
                        checked: u.enabled,
                        onCheckedChange: (p) => l(x, "enabled", p)
                      }
                    ),
                    /* @__PURE__ */ e(
                      N,
                      {
                        value: u.name || "",
                        onDebouncedChange: (p) => l(x, "name", p),
                        placeholder: "Nome da categoria",
                        className: "max-w-[200px] h-8 text-sm font-semibold"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ e(
                      D,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7",
                        onClick: () => f(x, "up"),
                        disabled: x === 0,
                        children: /* @__PURE__ */ e(Ke, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      D,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7",
                        onClick: () => f(x, "down"),
                        disabled: x === o.length - 1,
                        children: /* @__PURE__ */ e(Pe, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      D,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-destructive hover:text-destructive",
                        onClick: () => h(x),
                        children: /* @__PURE__ */ e(Y, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ a("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ a("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ a(g, { className: "text-xs flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e(Ye, { className: "h-3.5 w-3.5" }),
                    "Cor do tier"
                  ] }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(
                      W,
                      {
                        type: "color",
                        value: u.color || "#888888",
                        onChange: (p) => l(x, "color", p.target.value),
                        className: "w-10 h-8 p-1 cursor-pointer"
                      }
                    ),
                    /* @__PURE__ */ e(
                      N,
                      {
                        value: u.color || "",
                        onDebouncedChange: (p) => l(x, "color", p),
                        placeholder: "#FFFFFF",
                        className: "flex-1 h-8 text-xs font-mono"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ a("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ e(g, { className: "text-xs", children: "Tamanho dos logos" }),
                  /* @__PURE__ */ a(
                    de,
                    {
                      value: u.logoHeight || "md",
                      onValueChange: (p) => l(x, "logoHeight", p),
                      children: [
                        /* @__PURE__ */ e(ne, { className: "h-8 text-xs", children: /* @__PURE__ */ e(me, {}) }),
                        /* @__PURE__ */ a(le, { children: [
                          /* @__PURE__ */ e(R, { value: "sm", children: "Pequeno (48px)" }),
                          /* @__PURE__ */ e(R, { value: "md", children: "Medio (80px)" }),
                          /* @__PURE__ */ e(R, { value: "lg", children: "Grande (120px)" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ a("div", { className: "space-y-3", children: [
                /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ a(g, { className: "text-xs font-semibold", children: [
                    "Patrocinadores (",
                    u.items.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ a(
                    D,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-7 text-xs",
                      onClick: () => m(x),
                      children: [
                        /* @__PURE__ */ e(J, { className: "h-3.5 w-3.5 mr-1" }),
                        "Adicionar"
                      ]
                    }
                  )
                ] }),
                u.items.length === 0 && /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground text-center py-4 border border-dashed border-border/50 rounded-lg", children: "Nenhum patrocinador neste tier." }),
                u.items.map((p, b) => /* @__PURE__ */ a(
                  "div",
                  {
                    className: "flex items-start gap-3 p-3 border border-border/30 rounded-lg bg-background/30",
                    children: [
                      /* @__PURE__ */ e("div", { className: "shrink-0 w-24", children: /* @__PURE__ */ e(
                        O,
                        {
                          value: p.logo,
                          onChange: (w) => c(x, b, "logo", w),
                          label: "Logo",
                          recommendedSize: "200x100px"
                        }
                      ) }),
                      /* @__PURE__ */ a("div", { className: "flex-1 space-y-2 min-w-0", children: [
                        /* @__PURE__ */ e(
                          N,
                          {
                            value: p.name || "",
                            onDebouncedChange: (w) => c(x, b, "name", w),
                            placeholder: "Nome do patrocinador",
                            className: "h-8 text-sm"
                          }
                        ),
                        /* @__PURE__ */ e(
                          N,
                          {
                            value: p.url || "",
                            onDebouncedChange: (w) => c(x, b, "url", w),
                            placeholder: "Link (opcional)",
                            className: "h-8 text-xs"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e(
                        D,
                        {
                          variant: "ghost",
                          size: "icon",
                          className: "h-7 w-7 shrink-0 text-destructive hover:text-destructive",
                          onClick: () => i(x, b),
                          children: /* @__PURE__ */ e(Y, { className: "h-3.5 w-3.5" })
                        }
                      )
                    ]
                  },
                  b
                ))
              ] })
            ] })
          ]
        },
        x
      ))
    ] }),
    /* @__PURE__ */ e(
      ee,
      {
        sectionTitle: "Patrocinadores",
        ctaData: s.footerCta,
        onUpdate: (u) => n({ footerCta: { ...s.footerCta, ...u } })
      }
    )
  ] });
});
Fs.displayName = "SponsorsEditorV2";
const ct = [
  {
    group: "Configuracoes",
    icon: Ye,
    defaultOpen: !0,
    items: [
      { key: "sectionOrder", label: "Ordem das Secoes", icon: Mr },
      { key: "conversion", label: "Conversao", icon: Lr },
      { key: "globalMenu", label: "Menu Global", icon: wa },
      { key: "floatingWhatsapp", label: "CTAs Flutuantes", icon: Vr },
      { key: "design", label: "Design", icon: Ye },
      { key: "seo", label: "SEO", icon: jr },
      { key: "tracking", label: "Rastreamento", icon: $r },
      { key: "history", label: "Historico", icon: Ie }
    ]
  },
  {
    group: "Secoes",
    icon: Ot,
    defaultOpen: !0,
    items: [
      { key: "hero", label: "Hero", icon: Ze },
      { key: "benefits", label: "Beneficios", icon: la },
      { key: "howItWorks", label: "Como Funciona", icon: zr },
      { key: "plans", label: "Planos", icon: Fr },
      { key: "testimonials", label: "Depoimentos", icon: ut },
      { key: "kpis", label: "KPIs", icon: Rr },
      { key: "speakers", label: "Palestrantes", icon: Ca },
      { key: "sponsors", label: "Patrocinadores", icon: kt },
      { key: "about", label: "Sobre", icon: qr },
      { key: "contact", label: "Contato", icon: Or },
      { key: "beforeAfter", label: "Antes e Depois", icon: Wr },
      { key: "process", label: "Processo", icon: Hr },
      { key: "services", label: "Servicos", icon: Ur },
      { key: "video", label: "Video", icon: Br },
      { key: "videoCarousel", label: "Carrossel Videos", icon: Xr },
      { key: "whyChoose", label: "Por que Escolher", icon: wt },
      { key: "ctaFinal", label: "CTA Final", icon: Gr },
      { key: "faq", label: "FAQ", icon: ya },
      { key: "form", label: "Formulario", icon: Qr },
      { key: "forWhom", label: "Para Quem", icon: vt },
      { key: "footer", label: "Footer", icon: Ot }
    ]
  }
];
function ji() {
  const { lpKey: t } = ra(), r = Ks(), [s, o] = T("hero"), [n, d] = T(!1), [h, f] = T(() => {
    const v = {};
    return ct.forEach((k) => {
      v[k.group] = k.defaultOpen;
    }), v;
  });
  if (!t)
    return /* @__PURE__ */ e(bt, { to: "/admin/landpages-v2", replace: !0 });
  const {
    draft: l,
    isDirty: m,
    isLoading: i,
    saveStatus: c,
    lastSavedAt: u,
    updateField: x,
    updateNestedField: p,
    updateSection: b,
    saveNow: w
  } = vl(t), I = async () => {
    await w() ? F.success("Salvo com sucesso!") : F.error("Erro ao salvar");
  };
  Q(() => {
    const v = (k) => {
      m && k.preventDefault();
    };
    return window.addEventListener("beforeunload", v), () => window.removeEventListener("beforeunload", v);
  }, [m]);
  const S = (v) => {
    f((k) => ({ ...k, [v]: !k[v] }));
  };
  if (i)
    return /* @__PURE__ */ e("div", { className: "flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ a("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ e(ge, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: "Carregando editor..." })
    ] }) });
  if (!l)
    return /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center min-h-[400px] gap-4", children: [
      /* @__PURE__ */ e(ba, { className: "h-12 w-12 text-destructive" }),
      /* @__PURE__ */ a("p", { className: "text-muted-foreground", children: [
        "LP nao encontrada: ",
        t
      ] }),
      /* @__PURE__ */ a(D, { variant: "outline", onClick: () => window.location.reload(), children: [
        /* @__PURE__ */ e(Yr, { className: "h-4 w-4 mr-2" }),
        "Tentar novamente"
      ] })
    ] });
  const _ = { draft: l, lpKey: t, updateField: x, updateNestedField: p, updateSection: b }, y = () => {
    switch (s) {
      case "hero":
        return /* @__PURE__ */ e(xt, { ..._ });
      case "benefits":
        return /* @__PURE__ */ e(hs, { ..._ });
      case "howItWorks":
        return /* @__PURE__ */ e(gs, { ..._ });
      case "beforeAfter":
        return /* @__PURE__ */ e(fs, { ..._ });
      case "process":
        return /* @__PURE__ */ e(ps, { ..._ });
      case "forWhom":
        return /* @__PURE__ */ e(xs, { ..._ });
      case "services":
        return /* @__PURE__ */ e(bs, { ..._ });
      case "plans":
        return /* @__PURE__ */ e(vs, { ..._ });
      case "video":
        return /* @__PURE__ */ e(Ns, { ..._ });
      case "videoCarousel":
        return /* @__PURE__ */ e(ys, { ..._ });
      case "whyChoose":
        return /* @__PURE__ */ e(ws, { ..._ });
      case "testimonials":
        return /* @__PURE__ */ e(Cs, { ..._ });
      case "about":
        return /* @__PURE__ */ e(ks, { ..._ });
      case "faq":
        return /* @__PURE__ */ e(Ds, { ..._ });
      case "ctaFinal":
        return /* @__PURE__ */ e(Ss, { ..._ });
      case "contact":
        return /* @__PURE__ */ e(Es, { ..._ });
      case "kpis":
        return /* @__PURE__ */ e(Ps, { ..._ });
      case "footer":
        return /* @__PURE__ */ e(Ts, { ..._ });
      case "form":
        return /* @__PURE__ */ e(_s, { ..._ });
      case "speakers":
        return /* @__PURE__ */ e(zs, { ..._ });
      case "sponsors":
        return /* @__PURE__ */ e(Fs, { ..._ });
      case "tracking":
        return /* @__PURE__ */ e(As, { ..._ });
      case "seo":
        return /* @__PURE__ */ e(Is, { ..._ });
      case "design":
        return /* @__PURE__ */ e(Ms, { ..._ });
      case "sectionOrder":
        return /* @__PURE__ */ e(Ls, { ..._ });
      case "conversion":
        return /* @__PURE__ */ e(js, { ..._ });
      case "globalMenu":
        return /* @__PURE__ */ e($s, { ..._ });
      case "floatingWhatsapp":
        return /* @__PURE__ */ e(Vs, { ..._ });
      case "history":
        return /* @__PURE__ */ e(
          li,
          {
            tableName: "bd_cms_lp_v2",
            recordKey: t,
            title: "Historico de Versoes",
            description: "Todas as alteracoes salvas desta LP"
          }
        );
      default:
        return /* @__PURE__ */ e(xt, { ..._ });
    }
  };
  return /* @__PURE__ */ a("div", { className: "flex gap-0 min-h-[calc(100vh-80px)]", children: [
    /* @__PURE__ */ a("aside", { className: "w-64 shrink-0 border-r border-border/30 bg-background/50 backdrop-blur-sm sticky top-0 self-start max-h-screen overflow-y-auto", children: [
      /* @__PURE__ */ a("div", { className: "p-4 border-b border-border/20", children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => r("/admin/landpages-v2"),
            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group w-full",
            children: [
              /* @__PURE__ */ e(ca, { className: "h-4 w-4 group-hover:-translate-x-0.5 transition-transform" }),
              /* @__PURE__ */ e("span", { children: "Voltar ao Dashboard" })
            ]
          }
        ),
        /* @__PURE__ */ a("div", { className: "mt-3", children: [
          /* @__PURE__ */ e("h2", { className: "text-sm font-bold text-foreground truncate", children: t }),
          /* @__PURE__ */ e(
            wl,
            {
              status: c,
              lastSaved: u
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "p-3 space-y-1", children: ct.map((v) => {
        const k = v.icon, E = h[v.group] ?? !0, L = v.items.some((V) => V.key === s);
        return /* @__PURE__ */ a(
          jt,
          {
            open: E,
            onOpenChange: () => S(v.group),
            children: [
              /* @__PURE__ */ e($t, { asChild: !0, children: /* @__PURE__ */ a(
                "button",
                {
                  className: `flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${L && !E ? "bg-accent/15 text-accent" : "text-foreground/80 hover:bg-accent/5 hover:text-foreground"}`,
                  children: [
                    /* @__PURE__ */ e(k, { className: "h-4 w-4 shrink-0" }),
                    /* @__PURE__ */ e("span", { className: "flex-1 text-left", children: v.group }),
                    /* @__PURE__ */ e(
                      Ct,
                      {
                        className: `h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ${E ? "rotate-90" : ""}`
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ e(zt, { children: /* @__PURE__ */ e("nav", { className: "mt-1 ml-2 space-y-0.5 border-l border-border/30 pl-2", children: v.items.map((V) => {
                const z = V.icon, U = s === V.key;
                return /* @__PURE__ */ a(
                  "button",
                  {
                    onClick: () => o(V.key),
                    className: `flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-[13px] transition-all duration-150 ${U ? "bg-accent/20 text-accent font-semibold shadow-sm" : "text-foreground/70 hover:bg-accent/5 hover:text-foreground"}`,
                    children: [
                      /* @__PURE__ */ e(z, { className: `h-3.5 w-3.5 shrink-0 ${U ? "text-accent" : "text-muted-foreground"}` }),
                      /* @__PURE__ */ e("span", { className: "truncate", children: V.label })
                    ]
                  },
                  V.key
                );
              }) }) })
            ]
          },
          v.group
        );
      }) })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center justify-between sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-3 px-6 border-b border-border/20", children: [
        /* @__PURE__ */ e("h1", { className: "text-lg font-bold text-foreground", children: ct.flatMap((v) => v.items).find((v) => v.key === s)?.label ?? "Editor" }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ a(D, { variant: "outline", size: "sm", onClick: () => d(!0), children: [
            /* @__PURE__ */ e(pa, { className: "h-4 w-4 mr-1" }),
            "Preview"
          ] }),
          /* @__PURE__ */ a(
            D,
            {
              size: "sm",
              onClick: I,
              disabled: !m || c === "saving",
              className: m ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/25" : "",
              children: [
                c === "saving" ? /* @__PURE__ */ e(ge, { className: "h-4 w-4 mr-1 animate-spin" }) : /* @__PURE__ */ e(fa, { className: "h-4 w-4 mr-1" }),
                c === "saving" ? "Salvando..." : m ? "Salvar (⌘S)" : "Salvar"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "p-6", children: y() })
    ] }),
    /* @__PURE__ */ e(
      Ka,
      {
        open: n,
        onOpenChange: d,
        slug: t
      }
    )
  ] });
}
export {
  Io as CMSProviderV2,
  bo as DEFAULT_LP_TEMPLATE,
  ji as LPEditorV2,
  Li as LandingPageV2,
  Vi as LandingPagesV2,
  Re as applyCoupon,
  ke as applyUTMv2,
  Do as createLP,
  Co as deleteLP,
  ko as duplicateLP,
  Sa as fetchAllLPs,
  St as fetchGlobalTrackingV2,
  Fe as fetchLPByRef,
  vo as getNewLPContent,
  xe as renderRichText,
  Ea as saveContent,
  Eo as saveGlobalTrackingV2,
  Mi as saveLP,
  Wt as updateLPSettings,
  So as updateLPStatus,
  Mo as useCMSV2
};
//# sourceMappingURL=index.js.map
