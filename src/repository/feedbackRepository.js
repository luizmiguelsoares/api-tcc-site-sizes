import con from "./connection.js";


export async function inserirfeedback(feedback) {
    const comando = `

    insert into feedback(feedback)
    values (?);
    `;
    
    let resposta = await con.query(comando, [feedback.feedback])
    let tcc = resposta[0];
    
    return tcc.insertId;
}
