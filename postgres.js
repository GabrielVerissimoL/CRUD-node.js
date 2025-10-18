import 'dotenv/config'
import postgres from 'postgres'

// Carrega a URL do banco de dados do arquivo .env
const connectionString = process.env.DATABASE_URL

// Cria a conexão usando a biblioteca 'postgres'
// e EXPORTA a variável 'sql' para que outros arquivos possam usá-la.
export const sql = postgres(connectionString, { ssl: 'require' })