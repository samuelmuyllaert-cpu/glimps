/*
  # Create page status table for maintenance mode

  1. New Tables
    - `page_status`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - the page route slug
      - `is_active` (boolean) - whether the page is online or offline
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `page_status` table
    - Add policy for public read access (anyone can check if a page is active)
*/

CREATE TABLE IF NOT EXISTS page_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE page_status ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read page status"
  ON page_status
  FOR SELECT
  TO public
  USING (true);

INSERT INTO page_status (slug, is_active) VALUES ('absolute-teamsport', false)
ON CONFLICT (slug) DO UPDATE SET is_active = false;
