
const students = [
	{ 'nome': 'Mauro de Carvalho', 'curso': 'TADS', "situacao": 'APROVADO'},
	{ 'nome': 'Kessia Castro', 'curso': 'TADS', "situacao": 'EVADIDO'},
	{ 'nome': 'Gustavo Guerino', 'curso': 'TADS', "situacao": 'REPROVADO'},
	{ 'nome': 'Amarildo dos Santos', 'curso': 'Zootecnia', "situacao": 'REPROVADO'},
	{ 'nome': 'Valdisney Silva', 'curso': 'Farmácia', "situacao": 'APROVADO'},
	{ 'nome': 'Esmaraldino Custódio', 'curso': 'Engenharia de Alimentos', "situacao": 'EVADIDO'},
	{ 'nome': 'Cremilda Araújo', 'curso': 'Biologia', "situacao": 'APROVADO'},
	{ 'nome': 'Monique Pinheiros', 'curso': 'Matemática', "situacao": 'APROVADO'},
	{ 'nome': 'Clériston Passos', 'curso': 'Enfermagem', "situacao": 'REPROVADO'},
	{ 'nome': 'Tuanara Almeida', 'curso': 'Engenharia da Pesca', "situacao": 'APROVADO'},
	{ 'nome': 'Phillipy Martins', 'curso': 'Redes de Computados', "situacao": 'EVADIDO'},
	{ 'nome': 'Karla Peres', 'curso': 'Enfermagem', "situacao": 'REPROVADO'},
	{ 'nome': 'Elthon Jonhson', 'curso': 'Publicidade', "situacao": 'APROVADO'},
	{ 'nome': 'Rafael Clóvis', 'curso': 'Sistema de Informação', "situacao": 'APROVADO'},
	{ 'nome': 'Agostino Mendes', 'curso': 'Português', "situacao": 'EVADIDO'},
	{ 'nome': 'Romero Bento', 'curso': 'Educação Física', "situacao": 'REPROADO'},
	{ 'nome': 'Antônio Conselheiro', 'curso': 'Teologia', "situacao": 'APROVADO'},
	{ 'nome': 'Cristovão Colombo', 'curso': 'História', "situacao": 'APROVADO'},
	{ 'nome': 'Caio Pinto', 'curso': 'Biologia', "situacao": 'APROVADO'},
	{ 'nome': 'Florêntina de Jesus', 'curso': 'Música', "situacao": 'REPROVADO'},
	{ 'nome': 'Marcos Aurélio', 'curso': 'Português', "situacao": 'APROVADO'},
	{ 'nome': 'Lee Pai-mei', 'curso': 'Educação Física', "situacao": 'EVADIDO'},
	{ 'nome': 'Roberto Alberto', 'curso': 'Artes Cênicas', "situacao": 'EVADIDO'},
	{ 'nome': 'Boris Cazói', 'curso': 'Jornalismo', "situacao": 'APROVADO'},
	{ 'nome': 'Eliana Machado', 'curso': 'Relações Públicas', "situacao": 'EVADIDO'},
	{ 'nome': 'João Rubens', 'curso': 'Química', "situacao": 'REPROVADO'},
	{ 'nome': 'José Firmino', 'curso': 'Engenharia Mecânica', "situacao": 'APROVADO'},
	{ 'nome': 'Honoro Neto', 'curso': 'Biomedicina', "situacao": 'EVADIDO'},
	{ 'nome': 'Lucas Antônio', 'curso': 'Matemática', "situacao": 'REPROVADO'},
	{ 'nome': 'Maldonado Cavalcante', 'curso': 'Educação Física', "situacao": 'APROVADO'},
	{ 'nome': 'Ana Martins', 'curso': 'Biologia', "situacao": 'REPROVADO'},
	{ 'nome': 'Enzo Thiago', 'curso': 'Enfermagem', "situacao": 'EVADIDO'},
	{ 'nome': 'Camila dos Santos', 'curso': 'Medicina', "situacao": 'APROVADO'},
	{ 'nome': 'Paulo Carlos', 'curso': 'TADS', "situacao": 'EVADIDO'},
	{ 'nome': 'Sérgio Gomes', 'curso': 'Relações Exteriores', "situacao": 'APROVADO'},
	{ 'nome': 'Priscila Amaral', 'curso': 'Redes de Computadores', "situacao": 'APROVADO'},
	{ 'nome': 'Carlos Monte', 'curso': 'História', "situacao": 'EVADIDO'},
	{ 'nome': 'Isabela Reis', 'curso': 'Literatura', "situacao": 'REPROVADO'},
	]

function isAprovado(list) {
	return list.situacao === 'APROVADO'
}

function isReprovado(list) {
	return list.situacao === 'REPROVADO'
}

function isEvadido(list) {
	return list.situacao === 'EVADIDO'
}

export const APROVADOS = students.filter(isAprovado);

export const REPROVADOS = students.filter(isReprovado);

export const EVADIDOS = students.filter(isEvadido);
