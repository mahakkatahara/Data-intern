/*
  # Data Intern Platform Schema

  ## Overview
  Creates the database schema for the Data Intern internship platform, including
  user profiles and internship applications management.

  ## New Tables
  
  ### `profiles`
  - `id` (uuid, primary key) - References auth.users.id
  - `full_name` (text) - User's full name
  - `email` (text) - User's email address
  - `mobile` (text) - Contact number
  - `created_at` (timestamptz) - Profile creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `applications`
  - `id` (uuid, primary key) - Unique application ID
  - `user_id` (uuid) - References profiles.id
  - `domain` (text) - Internship domain (Data Science, Web Dev, etc.)
  - `status` (text) - Application status (pending, shortlisted, accepted, rejected)
  - `created_at` (timestamptz) - Application submission time
  - `updated_at` (timestamptz) - Last status update time

  ## Security
  - Enable RLS on all tables
  - Users can read and update their own profile
  - Users can create and view their own applications
  - Users cannot modify application status (admin only)
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  domain text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (user_id IN (SELECT id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "Users can create applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id IN (SELECT id FROM profiles WHERE id = auth.uid()));