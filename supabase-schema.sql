-- Run this once in Supabase: SQL Editor → New query → Run.
-- It creates one encrypted-in-transit cloud snapshot per signed-in user.
create table if not exists public.my_money_backups (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.my_money_backups enable row level security;

create policy "Users manage only their own backup"
on public.my_money_backups
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
