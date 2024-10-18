export default function SideBar(props){
    const {count, setCount, close} = props;
    return (
        <div className="sidebar">
         <div className="sidebar_info"> 
            <div className="sidebar_info_first">

                <div>
                <p>
            Colorful Aurora over New Zealand
            </p>
                </div>
                 
                <div>
                <p>
            Sometimes the night sky is full of surprises. Take the sky 
            over Lindis Pass, South Island, New Zealand one-night last week. Instead of a typically calm night sky filled with constant stars,
            </p>
                </div>
                
                
            
            </div>
          <button onClick={()=>{close()}}>Close</button>
         </div>
        </div>
    )
}