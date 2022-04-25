const { Transaction } = require('../models/transaction.model')
class TransactionController {
	static getRecord = async(req, res) => {
		try {
			const { idUser } = req.query
			const data = await Transaction.getTransactionUser(idUser)
			if (data) return res.send(data)
			else throw new Error()
			
		} catch(error) {
			return res.status(400).json({message: 'gagal'})
		}
	}
	static insertRecord = async(req, res) => {
		console.log('insertt')
		try {
			console.log('reqbodyyy ', req.body)
			const data = await Transaction.insertTransactionUser(req.body)		
			return res.json({message: 'input data berhasil'})
		} catch(error) {
			return res.status(400).json({message: 'gagal insert'})
		}
	}
	static deleteRecord = async(req, res) => {
		try {
			const { id } = req.body
			const data = await Transaction.deleteTransactionUser(id)		
			if(data) {
				return res.json({message: 'hapus data berhasil'})
			} else {
				throw new Error()
			}
		} catch(error) {
			console.log('catcherror')			
			return res.status(400).json({message: 'gagal hapus'})
		}
	}
}

module.exports = {TransactionController}