/*
  # Create AI Assistant Tables for SMSM

  1. New Tables
    - `startup_projects` - Stores user startup information
      - `id` (uuid, primary key)
      - `user_id` (text, user identifier)
      - `business_name` (text)
      - `industry` (text)
      - `form_data` (jsonb, complete form data)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `ai_conversations` - Stores SMSM chat history
      - `id` (uuid, primary key)
      - `project_id` (uuid, foreign key)
      - `messages` (jsonb, array of messages)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `ai_recommendations` - Tracks AI suggestions made
      - `id` (uuid, primary key)
      - `project_id` (uuid, foreign key)
      - `field_name` (text)
      - `recommendation` (text)
      - `reasoning` (text)
      - `accepted` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

CREATE TABLE IF NOT EXISTS startup_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  business_name text,
  industry text,
  form_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE startup_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects"
  ON startup_projects FOR SELECT
  TO authenticated
  USING (user_id = auth.uid()::text);

CREATE POLICY "Users can create projects"
  ON startup_projects FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid()::text);

CREATE POLICY "Users can update own projects"
  ON startup_projects FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid()::text)
  WITH CHECK (user_id = auth.uid()::text);

CREATE TABLE IF NOT EXISTS ai_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES startup_projects(id) ON DELETE CASCADE,
  messages jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view conversations for their projects"
  ON ai_conversations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );

CREATE POLICY "Users can create conversations for their projects"
  ON ai_conversations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );

CREATE POLICY "Users can update conversations for their projects"
  ON ai_conversations FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );

CREATE TABLE IF NOT EXISTS ai_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES startup_projects(id) ON DELETE CASCADE,
  field_name text NOT NULL,
  recommendation text NOT NULL,
  reasoning text,
  accepted boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_recommendations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view recommendations for their projects"
  ON ai_recommendations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );

CREATE POLICY "Users can create recommendations for their projects"
  ON ai_recommendations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );

CREATE POLICY "Users can update recommendations for their projects"
  ON ai_recommendations FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM startup_projects
      WHERE startup_projects.id = project_id
      AND startup_projects.user_id = auth.uid()::text
    )
  );
