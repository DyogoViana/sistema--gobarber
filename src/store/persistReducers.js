import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
	const persistedReducer = persistReducer(
		{
			key: 'gobarber', // 'Senha' para limitar qual app vai usar o localhost.
			storage,
			whitelist: ['auth', 'user'], // Nomes dos reduces que precisam armazenar informações.
		},
		reducers
	);

	return persistedReducer;
};
