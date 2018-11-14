import React from 'react';
import theme from '../constants/theme/web';
import { Footer, Title } from '@appbaseio/designkit';

const titleStyle = {
	margin: '0.9rem 0px',
	color: '#ffffff',
	opacity: 0.5,
};
export default () => (
	<Footer style={{ backgroundColor: theme.primaryDark }}>
		<Footer.Brand>
			<img
				width="100%"
				src="https://opensource.appbase.io/reactivesearch/images/logo.svg"
				alt="appbase.io"
			/>
		</Footer.Brand>
		<Footer.Links>
			<Footer.List>
				<Title style={titleStyle}>Documentation</Title>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactive-manual/vue/getting-started/reactivesearch.html"
					>
						Quick Start Guide
					</a>
				</li>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactive-manual/vue/base-components/selectedfilters.html"
					>
						Base Components
					</a>
				</li>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactive-manual/vue/search-components/datasearch.html"
					>
						Search Components
					</a>
				</li>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://opensource.appbase.io/reactive-manual/vue/result-components/reactivelist.html"
					>
						Result Components
					</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title style={titleStyle}>Community</Title>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/appbaseio/reactivesearch/"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://gitter.im/appbaseio/reactivesearch"
					>
						Gitter
					</a>
				</li>
				<li>
					<a
						style={{ color: '#FFFFFF' }}
						target="_blank"
						rel="noopener noreferrer"
						href="https://stackoverflow.com/questions/tagged/reactivesearch"
					>
						Stackoverflow
					</a>
				</li>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/appbaseio">
						Twitter
					</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title style={titleStyle}>Helpful Tools</Title>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="https://opensource.appbase.io/dejavu/">
						Data Browser
					</a>
				</li>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="https://opensource.appbase.io/mirage/">
						GUI Query Builder
					</a>
				</li>
			</Footer.List>

			<Footer.List>
				<Title style={titleStyle} className="heading">
					More
				</Title>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="https://medium.appbase.io/">
						Medium Publication
					</a>
				</li>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="http://docs.appbase.io/">
						Appbase.io Docs
					</a>
				</li>
				<li>
					<a style={{ color: '#FFFFFF' }} target="_blank" rel="noopener noreferrer" href="mailto:support@appbase.io">
						Support Email
					</a>
				</li>
			</Footer.List>
		</Footer.Links>
	</Footer>
);
