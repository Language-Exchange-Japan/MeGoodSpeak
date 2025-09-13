export const FooterPolicies = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 md:flex-row md:space-y-0">
      <p className="text-sm text-gray-600">© 2024 LangExchange. All rights reserved.</p>

      <div className="flex space-x-6 text-sm">
        <a
          href="/privacy"
          className="text-gray-600 transition-colors duration-200 hover:text-black"
        >
          Privacy Policy
        </a>
        <a href="/terms" className="text-gray-600 transition-colors duration-200 hover:text-black">
          Terms of Service
        </a>
        <a
          href="/cookies"
          className="text-gray-600 transition-colors duration-200 hover:text-black"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
};
