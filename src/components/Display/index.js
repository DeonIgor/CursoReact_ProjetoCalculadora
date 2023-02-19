import './styles.css'

export default ({displayValue}) => {

    return (
        <div className="display-container">
            <input type="text" className='display' value={displayValue} readOnly/>
        </div>
    );

}