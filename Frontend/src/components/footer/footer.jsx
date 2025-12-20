import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div id='footer' className='footer min-h-50 md:min-h-45 px-14 py-14 flex flex-col gap-5 justify-between'>
        <div className="flex md:justify-between md:flex-row flex-col md:gap-0 gap-20">
            <div className='moto text-black h-60 flex flex-col bold font-extrabold px-2 py-10 text-3xl'>
                <span className='md:max-w-[calc(70%)]'>Curiosity keeps this moving.</span>
                <span className='md:max-w-[calc(70%)]'>There's always something new taking shape.</span>
                <div className="goofey"></div>
            </div>
            <div className="msg-container md:w-[calc(60%)] md:py-8 md:py-4">
                <div className="from-msg">
                    Hey, how can I get in touch with you?
                </div>
                <div className="to-msg">
                    Hey! You can email me at&nbsp;
                    <a href="mailto:melvingeorge204@gmail.com">
                        melvingeorge204@gmail.com
                    </a>
                </div>
            </div>
        </div>
        <div className="copyright-part text-black flex items-center justify-between text-m px-16 md:py-6 py-10">
            <div className="copyright-text flex gap-1">
                <span>&#169;</span>
                <span>Copyright 2025</span>
            </div>
            <div className="logos flex gap-4 px-10">
                <a href="https://www.linkedin.com/in/melvin-yesudas-george-807322230/">
                    <LinkedInIcon/>
                </a>
                <a href="https://github.com/MelvinYG">
                    <GitHubIcon/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer