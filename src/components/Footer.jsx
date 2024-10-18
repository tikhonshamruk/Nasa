export default function Footer(props){
    const {count, setCount, close} = props;
    return (
        <div className="footer">
            <div className="footer_info">
                <div className="footer_info_div">
                <p className="footer_name">APOD PROJECT</p>
                <p className="footer_nature">Colorful Aurora over New Zealand</p>
                </div>
          
            <button onClick={()=>{close()}}>add</button>
            </div>
        
        </div>
    )
}
  