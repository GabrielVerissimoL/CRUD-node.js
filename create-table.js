import { sql } from './postgres.js'

async function createTable() {
  try {
    await sql`
      CREATE TABLE videos (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration INTEGER
      );
    `
    console.log('Tabela "videos" criada com sucesso! ✅')
  } catch (error) {
    console.error('Falha ao criar a tabela:', error)
  } finally {
    // É importante fechar a conexão após o script terminar
    await sql.end()
  }
}

createTable()