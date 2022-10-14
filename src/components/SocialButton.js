import { RiMessage2Fill } from 'react-icons/ri';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import { IoArrowRedo } from 'react-icons/io5';

const SocialButton = () => {
    return (
        <div className="social-button">
            <button className="me-2"><BsFillHandThumbsUpFill style={{width:"24px", color: "#fff"}} /></button>
            <button className="me-2"><BsFillHandThumbsDownFill style={{width:"24px", color: "#fff"}} /></button>
            <button className="me-2"><RiMessage2Fill style={{width:"24px", color: "#fff"}} /></button>
            <button><IoArrowRedo style={{width:"24px", color: "#fff"}} /></button>
        </div>
    );
};

export default SocialButton;
