import React from 'react';
import Header from '../../components/header';
import SmallSect from '../../components/SmallSect';

const System = () => {
  return (
    <>
        <body className="min-h-[100vh] hidden lg:block bg-[#FAFBFD]">
            <Header/>
            <SmallSect smallsectTitle="Monitoring Device Properties"/>
        </body>
    </>
  )
}

export default System