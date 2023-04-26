import FeedbackCard from './FeedbackCard';
import { feedback } from '../constants';
import styles from '../style';
const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* TODO: */}
      <div className="absolute w-[60%] h-[60%] z-[0] blue__gradient rounded-full -right-1/2" />
      <div className="w-full flex md:flex-row flex-col items-center justify-between relative z-[1] mb-6 sm:mb-16">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
