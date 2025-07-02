
-- Add policies to allow INSERT, UPDATE, and DELETE operations on merchandise table
CREATE POLICY "Allow all operations on merchandise" ON public.merchandise FOR ALL USING (true) WITH CHECK (true);

-- Add policies to allow INSERT, UPDATE, and DELETE operations on belts table  
CREATE POLICY "Allow all operations on belts" ON public.belts FOR ALL USING (true) WITH CHECK (true);

-- Add policies to allow INSERT, UPDATE, and DELETE operations on documents table
CREATE POLICY "Allow all operations on documents" ON public.documents FOR ALL USING (true) WITH CHECK (true);
