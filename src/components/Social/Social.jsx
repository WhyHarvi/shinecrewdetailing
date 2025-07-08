import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function SocialMediaSection() {
  return (
    <section
      className="bg-white w-full py-10 px-4 md:px-16 border-t border-gray-200"
      id="socials"
    >
      <div className="text-left mb-6">
        <p className="text-red-600 text-sm font-semibold uppercase tracking-wider">
          FOLLOW US{" "}
          <span className="inline-block ml-2 w-8 h-[2px] bg-red-600 align-middle"></span>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold italic mt-2">
          SEE OUR WORKS <br />
          <span className="text-black">FOLLOW ON </span>
          <span className="text-red-500">SOCIAL MEDIA</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-300 divide-x divide-gray-300 rounded overflow-hidden">
        <SocialBox
          icon={<FaFacebookF className="text-blue-600 text-2xl" />}
          label="Facebook"
          link="https://facebook.com/"
        />
        <SocialBox
          icon={<FaInstagram className="text-pink-600 text-2xl" />}
          label="Instagram"
          link="https://instagram.com/shinecrew_detailing/"
        />
        <SocialBox
          icon={<FaWhatsapp className="text-green-500 text-2xl" />}
          label="WhatsApp"
          link="https://wa.me/+14375661305"
        />
        <SocialBox
          icon={<FaTiktok className="text-red-600 text-2xl" />}
          label="TikTok"
          link="https://www.tiktok.com/@shinecrew_detaili?_t=ZM-8xqFW7Nuqer&_r=1"
        />
      </div>
    </section>
  );
}

function SocialBox({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center py-6 bg-white hover:bg-gray-50 transition-all"
    >
      {icon}
      <span className="mt-2 font-bold text-sm">{label.toUpperCase()}</span>
    </a>
  );
}
