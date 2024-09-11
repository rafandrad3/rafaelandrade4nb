 import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://ads_ehgl_user:3ULOPgOAp4q1ERBB7sF6VOBZ6SzcuTa0@dpg-cr75tlbqf0us73fbuf10-a.oregon-postgres.render.com/ads_ehgl';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
