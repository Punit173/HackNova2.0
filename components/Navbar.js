import { FaMessage } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const myDiv = useRef(null);
  const links = useRef([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const selectedElements = document.querySelectorAll(".md\\:flex h1");
    links.current = selectedElements;
  }, []);

  const openDrawer = () => {
    const drawer = myDiv.current;
    drawer.style.display = "block";
    drawer.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
    setIsDrawerOpen(true);
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const closeDrawer = () => {
    const drawer = myDiv.current;
    drawer.style.transform = "translateX(100%)"; 
    enableScroll();
    setTimeout(() => {
      drawer.style.display = "none";
      setIsDrawerOpen(false);
    }, 0); 
  };

  const animation = () => {
    const solveMilliseconds = 1000;
    const characterSelectionMilliseconds = 40;
    const delayMilliseconds = 250;
    const characters = [..."*#@/*!%&^"];

    links.current.forEach((element) => {
      element.style.width = `${element.clientWidth}px`;

      element.addEventListener("mouseenter", (e) => {
        const element = e.target;
        scrambleText(element);
        e.preventDefault();
      });
    });

    function scrambleText(element) {
      if (element.classList.contains("active") === false) {
        const elementText = element.innerText;
        const elementCharacters = [...elementText];
        const lockMilliseconds =
          delayMilliseconds * elementCharacters.length + solveMilliseconds;

        element.classList.add("active");

        setTimeout(() => {
          element.classList.remove("active");
        }, lockMilliseconds);

        elementCharacters.forEach((character, index) => {
          setTimeout(() => {
            let intervalId = setInterval(() => {
              const randomCharacter =
                characters[(characters.length * Math.random()) | 0];
              element.innerText = replaceCharacter(
                element.innerText,
                index,
                randomCharacter
              );

              setTimeout(() => {
                clearInterval(intervalId);
                element.innerText = replaceCharacter(
                  element.innerText,
                  index,
                  elementCharacters[index]
                );
              }, solveMilliseconds / 2);
            }, characterSelectionMilliseconds);
          }, delayMilliseconds * index);
        });
      }
    }

    function replaceCharacter(str, index, chr) {
      return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
    }
  };

  const closeDrawerAndScroll = () => {
    closeDrawer();
  };

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const buttonVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
    transition: { duration: 0.3 },
  };
  
  return (
    <div style={{ backgroundColor: isDrawerOpen ? "black" : "rgba(0, 0, 0, 0.45)", backdropFilter: "blur(10px)" }} className="flex flex-row justify-between py-6 px-2 md:px-4 text-xl text-white relative sticky top-0 z-50">
      <div className="w-12 shrink-0 flex justify-center items-center">
        <img src="logo.svg" alt="NSCC SRM logo" className="" />
      </div>
      <div onMouseOver={animation} className="md:flex flex-row hidden gap-x-[3vh] justify-center items-center">
        <Link className="cursor-pointer" to="home" smooth={true}>
          <h1>HOME</h1>
        </Link>
        <Link className="cursor-pointer" to="community" smooth={true}>
          <h1>COMMUNITY</h1>
        </Link>
        <Link className="cursor-pointer" to="timeline" smooth={true}>
          <h1>TIMELINE</h1>
        </Link>
        <Link className="cursor-pointer" to="tracks" smooth={true}>
          <h1 className="">TRACKS</h1>
        </Link>
        <Link className="cursor-pointer" to="faq" smooth={true}>
          <h1>FAQ</h1>
        </Link>
      </div>
      <div className="md:flex flex-row gap-x-3 justify-center items-center hidden">
        <FaMessage size={30} />
        <Link className="cursor-pointer" to="contact" smooth={true}>
          <h1>CONTACT</h1>
        </Link>
      </div>
      <div className="xl:hidden menu flex justify-center items-center">
        <motion.button onClick={toggleDrawer} whileTap={{ scale: 0.9 }}>
          <AnimatePresence>
            {isDrawerOpen ? (
              <motion.div key="close" variants={buttonVariants} initial="closed" animate="open">
                <FaXmark size={35} />
              </motion.div>
            ) : (
              <motion.div key="open" variants={buttonVariants} initial="open" animate="closed">
                <IoMenu size={35} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <div ref={myDiv} className={`bg-black right-0 z-50 w-[70vw] lg:w-[50vw] xl:w-[30vw] lg:hidden absolute hidden flex-col gap-y-6 p-[10vw] lg:p-[15vw] text-x2 text-left top-full ${isDrawerOpen ? 'open' : 'closed'}`}>
  <div className="left-0 bg-black relative h-screen">
    <ul className="pl-4">
      <Link to="home" smooth={true} onClick={closeDrawerAndScroll}>
        <li className="my-6 cursor-pointer text-white text-lg">1. Home</li>
      </Link>
      <Link to="community" smooth={true} onClick={closeDrawerAndScroll}>
        <li className="my-6 cursor-pointer text-white text-lg">2. Community</li>
      </Link>
      <Link to="timeline" smooth={true} onClick={closeDrawerAndScroll}>
        <li className="my-6 cursor-pointer text-white text-lg">3. Timeline</li>
      </Link>
      <Link to="tracks" smooth={true} onClick={closeDrawerAndScroll}>
        <li className="my-6 cursor-pointer text-white text-lg">4. Track</li>
      </Link>
      <Link to="faq" smooth={true} onClick={closeDrawerAndScroll}>
        <li className="my-6 cursor-pointer text-white text-lg">5. FAQ</li>
      </Link>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;