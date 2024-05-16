const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const handleChange = (e) => {
    setCurrentNOE(e.target.value);
    let errorText;
    if (!Number.isInteger(Number(e.target.value)) || Number(e.target.value) <= 0) {
      errorText = 'Only positive numbers are allowed';
    } else {
      errorText = '';
    }
    setErrorAlert(errorText);
  };

  return (
    <div id='number-of-events'>
      <input
        type='text'
        value={currentNOE}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;
