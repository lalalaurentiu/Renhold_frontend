import { useState, useEffect } from "react";
import { clsx } from "clsx";

import { useUserStore } from "../../../store/user.state";
import EN from "../../../assets/language/EN.png";
import NO from "../../../assets/language/NO.png";

/**
 * Renders a language component that allows the user to switch between English and Norwegian.
 */
export function Language() {
  const { language, setLanguageState } = useUserStore();
  const [languageState, setLanguage] = useState(language);

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  /**
   * An object that contains the words for each language.
   */
  const words = {
    EN: { language: "Language" },
    NO: { language: "Språk" },
  };

  /**
   * An object that contains the images for each language.
   */
  const images = {
    EN,
    NO,
  };

  /**
   * The image corresponding to the current language state.
   */
  const languageImage = images[languageState];

  /**
   * Handles the click event when the language component is clicked.
   * Toggles the language state between English and Norwegian.
   */
  const handleClick = () => {
    setLanguageState(languageState === "EN" ? "NO" : "EN");
  };

  /**
   * The CSS class for the language image.
   */
  const imageClass = clsx(
    "h-[20px] w-[20px] rounded-full bg-cover bg-center transition-all duration-500 ease-in-out",
    { "translate-x-full": languageState === "NO" },
  );

  return (
    <div className="flex w-full  items-center justify-end p-4">
      <div className="items-centern w-[44px] cursor-pointer rounded-full border-2">
        <img
          /**
           * The title attribute for the language image.
           */
          title={words[languageState].language}
          /**
           * The alt attribute for the language image.
           */
          alt={words[languageState].language}
          /**
           * The click event handler for the language image.
           */
          onClick={handleClick}
          /**
           * The source URL for the language image.
           */
          src={languageImage}
          /**
           * The CSS class for the language image.
           */
          className={imageClass}
        ></img>
      </div>
    </div>
  );
}
