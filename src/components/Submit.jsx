

function Submit() {

    function submitHandler() {
        console.log("KHATAM, TATA, BYE BYE, GAYA");
    }

    return (
        <div className="submit">
            <button className="submit-button" onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default Submit;