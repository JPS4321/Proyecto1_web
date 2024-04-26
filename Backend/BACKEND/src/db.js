import conn from './conn.js'

export async function getAllPosts() {
    try {
        
        const [rows] = await conn.query('SELECT * FROM blogs')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function GetPostID(id) {
    try {
        
        console.log(id)
        const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id}`);
        return rows;
    } catch (e) {
        console.log(e);
        return e;
    }
}

export async function createPost(title, content, image_data) {
    try {
        
        const [result] = await conn.query(`INSERT INTO blogs (title, content, image_data) VALUES ('${title}', '${content}', '${image_data}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function deletePost(id) {
    try {
        const [result] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function putpost(id, title, content, image_data) {
    try {
      
      const [result] = await conn.query(`UPDATE blogs SET title = '${title}', content = '${content}', image_data = '${image_data}'
      WHERE id = ${id}`);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
}
