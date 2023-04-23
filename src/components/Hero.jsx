import { robot, discount } from '../assets';
import styles from '../style';
const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col  ${styles.paddingY}  `}>
      <div
        className={`flex-col ${styles.flexStart} flex-1 sm:px-16 xl:px-0 px-6 `}>
        <div className="flex items-center flex-row bg-discount-graident px-4 py-[6px] rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
