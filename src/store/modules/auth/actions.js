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

// Falha do login in.
export function signFailure() {
	return {
		type: '@auth/SIGN_FAILURE',
	};
}
