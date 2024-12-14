import { MailPlusIcon } from "lucide-react";

const Header = () => {
    return (
        <div className="sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center">
            <div className="text-6xl">David&apos;s Blog!!!!</div>
            <div>
                <a href ="mailto:shenhantong@gmail.com">
                <MailPlusIcon className="w-6 h-6"/>
                </a>
            </div>
        </div>
    );
}

export default Header;