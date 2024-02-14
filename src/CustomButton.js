function CustomButton({text, disabled}){
    return(
        <>
            <button type="button" disabled={disabled}>{text}</button>
        </>
    );
}

export default CustomButton;