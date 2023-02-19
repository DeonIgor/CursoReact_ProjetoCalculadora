import { useState } from 'react'
import Buttom from '../Buttom'
import Display from '../Display'
import './styles.css'

export default () => {

    const [displayValue, setDisplayValue] = useState('0');

    function setDisplay(value) {

        if (displayValue.includes('.') && value === '.') return;

        if (displayValue === '0' || displayValue === 'Syntax Error') setDisplayValue(value);
        else setDisplayValue(displayValue + value);
    }

    function del() {
        if (displayValue === '0') return;

        if (displayValue.length === 1 || displayValue === 'Syntax Error') setDisplayValue('0');
        else setDisplayValue(displayValue.slice(0, -1));
    }

    function clear() {
        setDisplayValue('0')
    }

    function eq() {
        if (displayValue === '0') return;
        if (displayValue.match(/(a-z)/gi)) return;

        try {
            setDisplayValue(`${eval(displayValue)}`);
        } catch (e) {
            setDisplayValue('Syntax Error');
        }
    }

    return (
        <div className="calc-container">
            <div className="calc">
                <Display displayValue={displayValue} />
                <div className="buttons-container">
                    <Buttom bttValue={'C'} onClick={clear} />
                    <Buttom bttValue={'('} onClick={setDisplay} />
                    <Buttom bttValue={')'} onClick={setDisplay} />
                    <Buttom bttValue={'/'} onClick={setDisplay} />
                    <Buttom bttValue={'7'} onClick={setDisplay} />
                    <Buttom bttValue={'8'} onClick={setDisplay} />
                    <Buttom bttValue={'9'} onClick={setDisplay} />
                    <Buttom bttValue={'*'} onClick={setDisplay} />
                    <Buttom bttValue={'4'} onClick={setDisplay} />
                    <Buttom bttValue={'5'} onClick={setDisplay} />
                    <Buttom bttValue={'6'} onClick={setDisplay} />
                    <Buttom bttValue={'+'} onClick={setDisplay} />
                    <Buttom bttValue={'1'} onClick={setDisplay} />
                    <Buttom bttValue={'2'} onClick={setDisplay} />
                    <Buttom bttValue={'3'} onClick={setDisplay} />
                    <Buttom bttValue={'-'} onClick={setDisplay} />
                    <Buttom bttValue={'.'} onClick={setDisplay} />
                    <Buttom bttValue={'0'} onClick={setDisplay} />
                    <Buttom bttValue={'<<'} onClick={del} />
                    <Buttom bttValue={'='} onClick={eq} eq />
                </div>
            </div>
        </div>
    )

}