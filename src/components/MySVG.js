
import Svg from'../styles/Svg.css';

export default function MySVG(){

    return(
        <svg className="my-svg" width="1280px" height="1280px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle" cx="100" cy="100" r="80" />
            <rect className="rectangle" x="50" y="50" width="100" height="100" fill="black" />
        </svg>

    )
}