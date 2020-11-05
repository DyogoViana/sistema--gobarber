// Requeisição do login in.
export function signInRequest(email, password) {
	return {
		type: '@auth/SIGN_IN_REQUEST',
		payload: { email, password },
	};
}

// Logado com sucesso.
export function signInSuccess(token, user) {
	return {
		type: '@auth/SIGN_IN_SUCCESS',
		payload: { token, user },
	};
}

export function signUpRequest(name, email, password) {
	return {
		type: '@auth/SIGN_UP_REQUEST',
		payload: { name, email, password },
	};
}

// Falha do login in.
export function signFailure() {
	return {
		type: '@auth/SIGN_FAILURE',
	};
}
