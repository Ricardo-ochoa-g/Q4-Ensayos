-- Tabla de pruebas, exclusiva para el clon "Q4-Ensayos"
-- No la usa ni la referencia el proyecto original (q4ingenieros).
-- Ejecutar en Supabase SQL Editor: https://supabase.com/dashboard/project/vgstltszjpbsngzwcleh/sql

CREATE TABLE IF NOT EXISTS ensayos_test (
  id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre     TEXT NOT NULL DEFAULT '',
  valor      TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Row Level Security) — misma política que otras tablas
ALTER TABLE ensayos_test ENABLE ROW LEVEL SECURITY;

-- Permitir todo al service role (la app usa service key)
CREATE POLICY "service_role_all" ON ensayos_test
  FOR ALL USING (true) WITH CHECK (true);
