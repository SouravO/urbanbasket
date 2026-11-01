-- Hello Stores schema migration for partner enquiries
-- Table: partner_enquiries

CREATE TABLE IF NOT EXISTS partner_enquiries (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  business VARCHAR(160),
  city VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_partner_enquiries_role ON partner_enquiries(role);
CREATE INDEX IF NOT EXISTS idx_partner_enquiries_created_at ON partner_enquiries(created_at DESC);
