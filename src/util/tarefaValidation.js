const tarefaController = require('../controllers/tarefaController')

const {check} = require('express-validator')

exports.listarPorId = [
    check('id')
        .exists().withMessage('O id Não pode estar em branco')
        .isInt().withMessage('O id deve ser um numero inteiro')
]

exports.inserir = [
    check('descricao').exists().trim().withMessage('A Descrição não pode estar em branco'),
   check('categoria_id').exists().withMessage('O id da categoria nao pode esta em branco')
       .isInt().withMessage('O id da categoria deve ser um nuemro inteiro'),
  check('data')
     .exists().trim().withMessage('O campo data categoria não pode ser vazia')
     .isLength({ min: 8}).withMessage('A data deve ser conter no minino 8 caracteres')  
     .isISO86019().withMessage('A data deve estar no formato valido')
 ]

exports.alterar = [
    check('id')
        .exists().withMessage('O id Não pode estar em branco')
        .isInt().withMessage('O id deve ser um numero inteiro'),
    check('descricao')
        .exists().trim().withMessage('A Descrição não pode estar em branco'),
    check('data')
        .exists().trim().withMessage('O campo data da categoria não pode ser vazio')
        .isLength({ min: 8 }).withMessage('A data deve ser conter no minimo 8 caracteres')
        .isISO8601().withMessage('A data deve estar no formato valido'),
    check('categoria_id')
        .exists().withMessage('O id da categoria nao pode esta em branco')
        .isInt().withMessage('O id da categoria deve ser um nuemro inteiro')
]

exports.delete = [
    check('id')
        .exists().withMessage('O id Não pode estar em branco')
        .isInt().withMessage('O id//  deve ser um numero inteiro')
]

exports.listarPorDescricao = [
    check('f').exists().withMessage('A descrição não pode estar em branco!').isLength({min:3}).withMessage('Por favor, informe mais de 2 caracteres!')
]

