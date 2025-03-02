import { useState, useEffect } from 'react'

const chars = {
	lowercase: 'abcdefghijklmnñopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
	numbers: '0123456789',
	symbols: '@!|#"/()=?¡¿[]{}-_.,´¨^~+`:;*¬°'
}

export const usePasswordGenerator = () => {
	const [pass, setPass] = useState('')
	const [length, setLength] = useState(8)

	const generatePass = () => {
		const characters = chars.lowercase + chars.uppercase + chars.numbers + chars.symbols
		let password = ''
		for (let i = 0; i < length; i++) {
			password += characters[Math.floor(Math.random() * characters.length)]
		}
		setPass(password)
	}

	useEffect(() => {
		generatePass()
	}, [])

	const onSetLength = ({ target: { value } }) => {
		if (value < 8 || value > 128) return
		setLength(value)
		generatePass(value)
	}

	const onCopy = () => navigator.clipboard.writeText(pass)

	return { pass, generatePass, length, onSetLength, onCopy }
}
