import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
  return (<footer className="flex justify-between items-center p-6 md:px-24">
    <h2 className="font-bold text-2xl md:text-4xl text-gray-800">Follow Us</h2>
    <div className="flex justify-between items-center gap-2">
      <a href="https://www.instagram.com" className="">
        <div className="rounded-full border-pink-400 border-2 w-10 h-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-400" />
        </div>
      </a>
      <a href="https://www.twitter.com" className="">
        <div className="rounded-full border-blue-400 border-2 w-10 h-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
        </div>
      </a>
      <a href="https://www.facebook.com" className="">
        <div className="rounded-full border-blue-500 border-2 w-10 h-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
        </div>
      </a>
    </div>
  </footer>)
}