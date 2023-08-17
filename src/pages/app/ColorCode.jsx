//A project that enters a color name and prints out the color and navigate to the params
//ToDo: make a react qrcode project next

import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import QRCode from 'react-qr-code';

const drinks = ['Pepsi', 'Fanta', 'Malt', 'Monster']

const MapList = () => {
    return(
        <div className="mx-auto px-[30px] bg-[#fff] w-full overflow-x-[hidden] py-[20px] bottom-0 fixed w-fit">
            <div className='font-bold mt-[20px] text-[17px]'>Sponsored Ads:</div>
            {/*snippet for map */}
            <div className='flex space-x-[8px]'>
                {drinks.map((drink, index)=>(
                    <div className='mt-[10px] text-[14px]' key={index}>{drink}</div>
                ))}
            </div>
        </div>
    )
}

//Implemeting third party ro react e.g react-qr-code
function QrCreate(){
    const [qrValue, setQrValue] = useState('Monitoring Properties')
    return(
        <>
            <div className="w-[40%] mx-auto mt-[53px] h-[250px] bg-[#fff] shadow-md rounded-[3px] px-[8px] py-[1px]">
                <QRCode 
                    value={qrValue} 
                    className='w-full h-full'
                    bgColor='white'
                    fgColor='blue'
                />
            </div>
        </>
    )
}

const ColorCode = () => {
    const [color, setColor] = useState('');
    const [valueinput, setValue] = useState('');
    const shapeWidth = '250px';
    const params = useParams()
    console.log(params.colorId)

    const changeInput = (event) => {
        setValue(event.target.value)
    }

    const changeColor = () => {
        const colorValue = valueinput;
        setColor(colorValue);
    };
  return (
    <>
        <div className="mx-auto w-fit pt-[100px]">
            <div style={{background: color, width: shapeWidth}} className={`h-[150px] border`}></div>
            <input type="text" onKeyUp={changeColor} value={valueinput} onChange={changeInput} className='border text-center mt-[5px] w-[250px] py-[3px] focus:outline-none' autoComplete='off' />
            <Link to={`/color/${color}`}>ToLink</Link>
        </div>

        {/*added a map list to this fun project */}
        
        <MapList />
        <QrCreate />
    </>
  )
}

export default ColorCode;