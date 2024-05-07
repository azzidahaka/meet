const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  return (
    <div id='number-of-events'>
      <input
        type='text'
        value={currentNOE}
        onChange={(e) => {
          setCurrentNOE(e.target.value);
        }}
      />
    </div>
  );
};

export default NumberOfEvents;
