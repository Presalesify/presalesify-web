// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tciflxjflgwmpqeckwfg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaWZseGpmbGd3bXBxZWNrd2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NjM2NzIsImV4cCI6MjA1MDIzOTY3Mn0.bT2GnBccExiHiFAK2DcnSURZrx4AsKhWoZtaemaJdvM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);