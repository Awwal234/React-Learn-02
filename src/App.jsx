import React from 'react';
import LoginBoard from './components/Board/LoginBoard';

const App = () => {
	return (
		<>
			<body className="min-h-[100vh] pb-[20px] hidden lg:block loginSheet">
				<div className="mx-auto w-fit">
					<img src="/Images/circlelogo.svg" className="mx-auto" alt="" />
				</div>
				<div className="text-[#093649] mx-auto text-center leading-[24px] text-[25px] font-[500]">Welcome Let's Get Started!</div>
			  <LoginBoard/>
			</body>
		</>
	);
};

export default App;
