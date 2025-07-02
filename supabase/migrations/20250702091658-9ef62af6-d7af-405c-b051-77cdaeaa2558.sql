
-- Create a table for merchandise
CREATE TABLE public.merchandise (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'merch',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for belts
CREATE TABLE public.belts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  image_url TEXT,
  championship_level TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for PDF documents
CREATE TABLE public.documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (making these tables publicly readable for now)
ALTER TABLE public.merchandise ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.belts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view merchandise" ON public.merchandise FOR SELECT USING (true);
CREATE POLICY "Anyone can view belts" ON public.belts FOR SELECT USING (true);
CREATE POLICY "Anyone can view documents" ON public.documents FOR SELECT USING (true);

-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('merchandise', 'merchandise', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('belts', 'belts', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Create storage policies for public access
CREATE POLICY "Anyone can view merchandise files" ON storage.objects FOR SELECT USING (bucket_id = 'merchandise');
CREATE POLICY "Anyone can upload merchandise files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'merchandise');
CREATE POLICY "Anyone can update merchandise files" ON storage.objects FOR UPDATE USING (bucket_id = 'merchandise');
CREATE POLICY "Anyone can delete merchandise files" ON storage.objects FOR DELETE USING (bucket_id = 'merchandise');

CREATE POLICY "Anyone can view belt files" ON storage.objects FOR SELECT USING (bucket_id = 'belts');
CREATE POLICY "Anyone can upload belt files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'belts');
CREATE POLICY "Anyone can update belt files" ON storage.objects FOR UPDATE USING (bucket_id = 'belts');
CREATE POLICY "Anyone can delete belt files" ON storage.objects FOR DELETE USING (bucket_id = 'belts');

CREATE POLICY "Anyone can view document files" ON storage.objects FOR SELECT USING (bucket_id = 'documents');
CREATE POLICY "Anyone can upload document files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'documents');
CREATE POLICY "Anyone can update document files" ON storage.objects FOR UPDATE USING (bucket_id = 'documents');
CREATE POLICY "Anyone can delete document files" ON storage.objects FOR DELETE USING (bucket_id = 'documents');
