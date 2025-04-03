import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-slate-700 mt-10 border-t border-gray-200">
      <div className="flex flex-wrap justify-between items-start gap-10 px-6 sm:px-16 py-10">

        <div className="flex gap-4 max-w-xs">
          <Image
            src="/GatherWiseIcon/GatherWiseIcon.svg"
            alt="GatherWise logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div>
            <p className="text-sm leading-relaxed text-gray-600">© 2025 GatherWise.</p>
            <p className="text-sm leading-relaxed text-gray-600">All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700 transition">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-gray-700 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
