import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(-90deg, #7169c1, #ab59c1);
`;

export const Content = styled.div`
	width: 100%;
	max-width: 315px;
	text-align: center;

	form {
		display: flex;
		flex-direction: column;
		margin-top: 1.5em;

		input {
			height: 3rem;
			color: #fff;
			border: 0;
			border-radius: 4px;
			padding: 0 2em;
			margin: 0 0 0.8em;
			background: rgba(0, 0, 0, 0.1);

			&::placeholder {
				color: rgba(255, 255, 255, 0.7);
			}
		}

		span {
			color: #C2A96D;
			font-weight: bold;
			align-self: flex-start;
			margin: 0 30px 10px;
		}

		button {
			margin: 5px 0 0;
			height: 44px;
			font-size: 1rem;
			font-weight: bold;
			color: #fff;
			border: 0;
			border-radius: 4px;
			background: #C19BCC;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.04, '#C19BCC')};
			}
		}

		a {
			color: #fff;
			margin-top: 15px;
			font-size: 16px;
			opacity: 0.8;

			&:hover {
				opacity: 1;
			}
		}
	}
`;
