import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono items-center">
      <div className="grow text-left">© 2026 Samuel Forrest</div>
      <SocialLinks />
      <div className="ml-4">Accurate as of 09/05/2026</div>
    </footer>
  );
}
