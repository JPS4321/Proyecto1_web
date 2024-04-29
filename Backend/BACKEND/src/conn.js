import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'mysql',
    user: 'blog_user',
    database: 'blog_db',
    port: 3306,
    password: 'blog_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;