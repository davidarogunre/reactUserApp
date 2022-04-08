import Button from './Button'
const Options = ({pageUrl, setPageUrl}) =>{
    return(
        <div className='options'>
            <Button btntext="users" pageUrl={pageUrl} setPageUrl={setPageUrl}/>
            <Button btntext="posts" pageUrl={pageUrl} setPageUrl={setPageUrl}/>
            <Button btntext="comments" pageUrl={pageUrl} setPageUrl={setPageUrl}/>
        </div>
    )

}

export default Options