// ============================================================
// Supabase Client — Multi LP BRZ Dev
// ============================================================
// Cada projeto define suas próprias credenciais via .env:
//   VITE_SUPABASE_URL=https://xxxxx.supabase.co
//   VITE_SUPABASE_ANON_KEY=eyJ...
// ============================================================

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    '[Multi LP] Faltam variáveis de ambiente: VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY. Configure no .env do projeto.'
  );
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
