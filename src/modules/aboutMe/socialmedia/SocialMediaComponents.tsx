import instagram from "@/images/instagram.svg";
import linkedin from "@/images/linkedin.png";
import gmail from "@/images/gmail.png";
import twitter from "@/images/twitter.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./socialmediacomponents.module.scss";

interface Isocial {
  name: string;
  img: StaticImageData;
  route: string;
}

const iconMap: Isocial[] = [
  {
    name: "instagram",
    img: instagram,
    route: "https://www.instagram.com/hustleupacademy/",
  },
  {
    name: "linkedIn",
    img: linkedin,
    route: "https://www.linkedin.com/company/hustle-up-academy/",
  },
  {
    name: "gmail",
    img: gmail,
    route: "mailto:hustleupacademy@gmail.com",
  },
  {
    name: "twitter",
    img: twitter,
    route: "https://twitter.com/hemantwebdev",
  },
];

const SocialMediaComponents = () => {
  return (
    <div className={styles.socialWrapper}>
      {iconMap.map((item: Isocial) => (
        <div key={item.name}>
          <Link target="_blank" href={item.route}>
            <Image src={item.img} width={50} height={50} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaComponents;
