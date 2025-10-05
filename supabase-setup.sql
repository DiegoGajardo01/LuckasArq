-- Crear tabla para contactos
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  city VARCHAR(100),
  topic VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_topic ON contact_submissions(topic);

-- Crear función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear trigger para actualizar updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Configurar RLS (Row Level Security) para mayor seguridad
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción desde la API (sin autenticación)
CREATE POLICY "Allow public insert on contact_submissions" 
ON contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados (opcional)
-- CREATE POLICY "Allow authenticated read on contact_submissions" 
-- ON contact_submissions 
-- FOR SELECT 
-- TO authenticated 
-- USING (true);

-- Comentarios en la tabla
COMMENT ON TABLE contact_submissions IS 'Tabla para almacenar envíos del formulario de contacto';
COMMENT ON COLUMN contact_submissions.id IS 'Identificador único del envío';
COMMENT ON COLUMN contact_submissions.name IS 'Nombre del contacto';
COMMENT ON COLUMN contact_submissions.email IS 'Email del contacto';
COMMENT ON COLUMN contact_submissions.phone IS 'Teléfono del contacto';
COMMENT ON COLUMN contact_submissions.city IS 'Ciudad del contacto (opcional)';
COMMENT ON COLUMN contact_submissions.topic IS 'Tema del mensaje';
COMMENT ON COLUMN contact_submissions.message IS 'Mensaje del contacto';
COMMENT ON COLUMN contact_submissions.created_at IS 'Fecha de creación del registro';
COMMENT ON COLUMN contact_submissions.updated_at IS 'Fecha de última actualización del registro';
