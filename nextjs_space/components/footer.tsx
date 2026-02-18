import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              LAST <span className="text-cyan-400">PROMPT</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Immersive simulation games where every decision shapes your fate.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Games</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/colony" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Colony
                </Link>
              </li>
              <li>
                <Link href="/corporate-crisis" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Corporate Crisis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delete-data" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Delete My Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Last Prompt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}