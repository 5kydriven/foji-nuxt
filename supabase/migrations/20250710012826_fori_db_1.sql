-- Create menus table
CREATE TABLE IF NOT EXISTS public.menus (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    japanese_name text,
    price numeric NOT NULL,
    image text,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Disable RLS on menus
ALTER TABLE public.menus
  DISABLE ROW LEVEL SECURITY;


-- Storage policies for 'images' bucket

-- Allow upload (INSERT)
CREATE POLICY "Allow all to upload files to images bucket"
  ON storage.objects
  FOR INSERT
  USING (
    bucket_id = 'images'
  );

-- Allow download/view (SELECT)
CREATE POLICY "Allow all to download files from images bucket"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'images'
  );

-- Allow update (UPDATE)
CREATE POLICY "Allow all to update files in images bucket"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'images'
  );

-- Allow delete (DELETE)
CREATE POLICY "Allow all to delete files in images bucket"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'images'
  );
