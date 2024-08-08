import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztwddaakzjxscozvfxtl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0d2RkYWFremp4c2NvenZmeHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0Mzc4NzYsImV4cCI6MjAzODAxMzg3Nn0.9utW_SXBuMBpooAW6satWbblx-jPn_TKvirK6wGPPLY'
export   const supabase = createClient(supabaseUrl, supabaseKey);
