import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qdrimjxvmhkzvgqxzyqm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcmltanh2bWhrenZncXh6eXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjEwNzYsImV4cCI6MjAxOTIzNzA3Nn0.tPfyOOKgraX1MOpxhID6j8BeXbUer3d2kH4paKxup2M"
);

export default supabase;