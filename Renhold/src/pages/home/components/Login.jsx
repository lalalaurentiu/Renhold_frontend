import { useUserStore } from "../../../store/user.state";

/**
 * Renders the Login component.
 * @returns {JSX.Element} The rendered Login component.
 */
export function Login() {
  const { language } = useUserStore();

  /**
   * Object containing words for different languages.
   * @type {Object}
   * @property {Object} EN - Words in English.
   * @property {string} EN.email - Email word in English.
   * @property {string} EN.login - Login word in English.
   * @property {Object} NO - Words in Norwegian.
   * @property {string} NO.email - Email word in Norwegian.
   * @property {string} NO.login - Login word in Norwegian.
   */
  const words = {
    EN: { email: "Email", login: "Login" },
    NO: { email: "E-post", login: "Logg inn" },
  };

  return (
    <div className="absolute h-1/2 w-1/2 rounded-lg backdrop-blur-[1px]">
      <form className="inset-50 absolute flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg bg-gray-100/60 px-5 py-5 shadow-xl">
        <input
          className="text-center focus:outline-none w-full rounded-lg border-2 border-gray-300 p-1 focus:border-none focus:ring-2 focus:ring-[#FF2F00] focus:ring-opacity-50"
          type="email"
          placeholder={words[language].email}
        ></input>
        <button
          className="w-1/2 rounded-lg bg-gradient-to-l from-[#FF2F00] to-[#FDA692] p-1 text-white"
          type="submit"
        >
          {words[language].login}
        </button>
      </form>
    </div>
  );
}
