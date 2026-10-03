# Turn on secure cloud backup

The app is ready to back up data to a private Supabase database. It needs a one-time free Supabase project setup.

1. Create a project at https://supabase.com/dashboard.
2. Open SQL Editor, create a new query, paste the contents of supabase-schema.sql, and run it.
3. Open Project Settings then API. Copy the Project URL and Publishable key (or legacy anon key).
4. Open the My Money app, go to Cloud backup, expand Connect cloud service, and paste both values.
5. Create an account using your email and a password. If Supabase requests email confirmation, confirm it and then sign in.
6. Click Back up now.

On a new phone or after reinstalling, enter the same Project URL and key, sign in with the same email/password, and click Restore cloud backup.

The public project URL/key only identify the app connection. Row Level Security in supabase-schema.sql prevents users from reading another user's backup.
