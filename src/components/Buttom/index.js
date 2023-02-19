import './styles.css'

export default ({ bttValue, eq, onClick }) => {

    return (
        <div className="buttom-container">
            <button className={`${eq ? 'eq' : 'number'}`}
                onClick={() => onClick(bttValue)}>
                {bttValue}
            </button>
        </div>
    );

}
