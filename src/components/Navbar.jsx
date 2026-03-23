import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { proceduresData } from "../data/proceduresData";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Procedure", path: "/procedure", hasDropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Certification", path: "/certification" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileProcedureOpen, setIsMobileProcedureOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[color:rgb(128_200_138/0.35)] bg-[color:rgb(196_228_194/0.32)] backdrop-blur-xl shadow-[0_8px_30px_rgba(17,66,85,0.18)]">
      <div className="pointer-events-none absolute inset-0 border-b border-[color:rgb(153_198_57/0.35)] shadow-[inset_0_1px_0_rgba(245,249,235,0.45),inset_0_-1px_0_rgba(43,164,212,0.22)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="cursor-grow text-2xl md:text-3xl font-bold text-[#03966a] tracking-tight"
            >
              Sarangi <span className="text-[#03966a]">Dentistry</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="group/dropdown relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-grow group relative isolate overflow-hidden rounded-lg px-4 py-2.5 text-[#022431] hover:text-[#03966a] font-mono font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#03966a]" : ""
                    } flex items-center`
                  }
                >
                  <span className="relative z-20">{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/dropdown:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <span className="absolute left-4 right-4 bottom-1.5 z-20 h-0.5 bg-[#03966a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </NavLink>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 -translate-x-1/2 pt-4 w-[280px] z-50 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover/dropdown:pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-xl border border-[#03966a]/10 shadow-[0_20px_40px_rgba(26,98,127,0.15)] rounded-2xl overflow-hidden p-4 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#03966a]/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#03966a]/5 rounded-full blur-3xl"></div>

                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#e8f1f5]">
                        <h3 className="text-lg font-bold text-[#03966a] font-mono tracking-tight">
                          Our Procedures
                        </h3>
                      </div>

                      <div className="flex flex-col gap-y-0 relative z-10">
                        {proceduresData.map((proc) => (
                          <Link
                            key={proc.id}
                            to={proc.path}
                            className="cursor-grow group/item flex flex-col p-2.5 rounded-xl hover:bg-[#f5f9eb]/80 transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-[#022431] group-hover/item:text-[#03966a] transition-colors">
                                {proc.title}
                              </span>
                              <span className="text-[#03966a] opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300">
                                →
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/book-appointment"
              className="cursor-grow ml-4 md:ml-6 px-6 py-2.5 bg-[#03966a] text-white font-mono font-bold rounded-xl hover:bg-[#03966a] transition-colors duration-300 shadow-lg shadow-[#03966a]/20 hover:-translate-y-0.5"
            >
              BOOK APPOINTMENT
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#022431] p-2 rounded-lg hover:bg-[#dfe8ec] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-8 h-8 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-0 w-4/5 max-w-sm bg-[color:rgb(65_88_67/0.9)] backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 overflow-y-auto">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col border-b border-[#c0d2d8]"
            >
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-5 text-xl font-mono font-medium text-[#ebf4d7] hover:text-[#f5f9eb] transition-colors flex-grow ${
                      isActive ? "text-[#f5f9eb]" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
                {item.hasDropdown && (
                  <button
                    onClick={() =>
                      setIsMobileProcedureOpen(!isMobileProcedureOpen)
                    }
                    className="p-4 text-[#ebf4d7] hover:bg-[#344636] rounded-lg transition-colors"
                  >
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isMobileProcedureOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <AnimatePresence>
                {item.hasDropdown && isMobileProcedureOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden flex flex-col pl-4 pb-4 space-y-3"
                  >
                    {proceduresData.map((proc) => (
                      <Link
                        key={proc.id}
                        to={proc.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-[#c0d2d8] hover:text-[#f5f9eb] border-l-2 border-[#03966a]/50 pl-4 py-2 hover:border-[#f5f9eb] transition-all"
                      >
                        {proc.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="mt-8 mb-6">
            <Link
              to="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center px-6 py-4 bg-[#03966a] text-white font-mono font-bold rounded-xl hover:bg-[#f5f9eb] hover:text-[#03966a] transition-all duration-300 shadow-lg shadow-[#03966a]/20"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[color:rgb(1_25_35/0.55)] backdrop-blur-s z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
