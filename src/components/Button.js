const Button = ({btntext, pageUrl, setPageUrl}) =>{
    return(
        <div>
            <button onClick={()=>setPageUrl(btntext)} className={pageUrl===btntext?'focus':null}>{btntext}</button>
        </div>
    )
}
export default Button