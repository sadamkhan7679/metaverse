import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headline, Paragraph, StrobeText } from "./SplashScreen/Text";
import { faqData } from "@/src/data/faqData";
import { ButtonBase } from "./Button";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);
  const [show, setShow] = useState(false);
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const toggleFaq = () => setShow((prev) => !prev);

  return (
    <section className="faq">
      <header className="section__header">
        <Headline>Know it all</Headline>
        <StrobeText>FAQ</StrobeText>
        <ButtonBase className="faq__button" onClick={() => toggleFaq()}>
          Click here to expand FAQ list
        </ButtonBase>
      </header>
      <motion.article
        className="faq__wrapper"
        style={{ overflow: "hidden" }}
        initial="hidden"
        animate={show ? "expand" : "hidden"}
        exit="hidden"
        variants={{
          hidden: { height: 0, opacity: 0 },
          expand: { height: "auto", opacity: 1 },
        }}
      >
        <section className="faq__section">
          <h3 className="faq__heading">Basics</h3>
          {idList1.map((i) => (
            <FaqItem
              listId={1}
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </section>
        <section className="faq__section">
          <h3 className="faq__heading">In-Game</h3>
          {idList2.map((i) => (
            <FaqItem
              listId={2}
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </section>
        <section className="faq__section">
          <h3 className="faq__heading">Economy</h3>
          {idList3.map((i) => (
            <FaqItem
              listId={3}
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </section>
        <section className="faq__section">
          <h3 className="faq__heading">Community & Vision</h3>
          {idList4.map((i) => (
            <FaqItem
              listId={4}
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </section>
      </motion.article>
    </section>
  );
};

export default Faq;

const FaqItem = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="faq__item">
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <FaqQuestion faqId={i} />
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <FaqAnswer faqId={i} />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const idList1 = [0, 1, 2];
const idList2 = [3, 4, 5];
const idList3 = [6, 7, 8];
const idList4 = [9, 10, 11, 12];

const FaqQuestion = ({ faqId }) => {
  const { question } = faqData.find((item) => item.id === faqId);
  return (
    <motion.div
      variants={{
        collapsed: {
          scale: 0.8,
          height: 0,
        },
        open: {
          scale: 1,
          height: "auto",
        },
      }}
      transition={{ duration: 0.8 }}
      className="faq__question"
    >
      <Paragraph>{question}</Paragraph>
    </motion.div>
  );
};

const FaqAnswer = ({ faqId }) => {
  const { answer } = faqData.find((item) => item.id === faqId);

  return (
    <div className="faq__answer">
      <Paragraph>
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
      </Paragraph>
    </div>
  );
};
