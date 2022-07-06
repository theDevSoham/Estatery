const Button = ({ isBg, text, clickEvent }) => {


  const handleClick = (e) => {
    e.preventDefault();
    clickEvent(e);
  }


  return (
    
    <div className={isBg ?'bg-button' : 'not-bg-button'}>
      <button onClick={(e) => handleClick(e)}>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
