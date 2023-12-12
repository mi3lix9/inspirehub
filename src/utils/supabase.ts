import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
