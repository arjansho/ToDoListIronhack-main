import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zabzzldlyuqoccgctmry.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYnp6bGRseXVxb2NjZ2N0bXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyOTQzOTYsImV4cCI6MjAwODg3MDM5Nn0.ZxCbusH2R8Esq7crthq2Vzu7nh0c2yJ8lgh2b6qkT54';

export default createClient(supabaseUrl, supabaseAnonToken);
