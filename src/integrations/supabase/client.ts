import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://bliuiewjvvxemivdiies.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaXVpZXdqdnZ4ZW1pdmRpaWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NTA1OTYsImV4cCI6MjA4MjAyNjU5Nn0.4PwRIe1dhOb-FQYiMrhSOOnvzZ2-ByV3CRvEmW_aZS0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
});
