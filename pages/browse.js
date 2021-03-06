import React from 'react'
import {css} from '@emotion/core'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import theme, {breakpoints} from '../styles/shared/Theme'

const maxq = theme.maxq

const Browse = (props) => {
	
	let mockCount = 30
	let mockArr = []
	for (let i = 0; i < mockCount; i++) {
		mockArr.push(i)
	}
	
	return <>
		<Head>
			<title>Browse the DDX Database</title>
		</Head>
		<div css={css`
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: grey;
		${maxq['sm']} {
			flex-direction: column;
		}
	`}>
			<div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1 0 400px;
				background-color: red;
				padding: 20px 10px;
				${maxq['sm']} {
					flex: 0 0 200px;
				}
			`}
			>
				<div
					css={css`
						display: flex;
						flex: 1;
						background-color: teal;
					`}
				>
				<form>
					<input type={'text'} />
				</form>
				</div>
			
			</div>
			<div
				css={css`
				display: flex;
				flex-direction: row;
				flex: 1 1 70%;
				background-color: blue;
                padding: 75px 50px 50px;
				${maxq['sm']} {
					flex: 2 1 70%;
					padding: 40px 40px;

				}
			`}
			>
				<div css={css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				flex-wrap: wrap;
				background-color: yellow;
				justify-content: space-evenly;

			`}>
					{mockArr.map(i => <div key={i}
					                       css={css`
					flex: 0 1 200px;
					min-height: 250px;
					background-color: green;
					border: 1px solid white;
					padding: 5px;
					margin: 5px;
				`}
					>
					
					</div>)}
				</div>
			</div>
		</div>
	</>
}

Browse.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(Browse, {footer: true})

