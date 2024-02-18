import { LinkedIn,GitHub,Email } from "@mui/icons-material"; 
import './footer.styles.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="socialMedia">
                <LinkedIn
                    onClick={()=>{
                    window.open("https://www.linkedin.com/in/stefan-scinteie-51b88825b/")
                    }}
                />
                <GitHub 
                onClick={()=>{
                    window.open("https://github.com/SparkFlowGt")
                }}/>
                <Email 
                onClick ={()=>{
                    window.open("mailto:scinteiestefan@gmail.com")
                }}>
                </Email>
            </div>
            <p>&copy; 2024 scinteietech.com</p>
        </div>
    )
}

export default Footer;