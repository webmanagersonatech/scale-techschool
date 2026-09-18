import { useState } from "react";
import { Facebook, Linkedin, Link2, Check, Share2 } from "lucide-react";

interface ShareIconsProps {
  url: string;
  title: string;
  className?: string;
}

/** X (Twitter) logo isn't in lucide-react's stable set on all versions, so it's inlined. */
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.21-1.44a9.87 9.87 0 0 0 4.83 1.24h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm0 17.9h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.09.85.83-3.02-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.53 3.69-8.22 8.23-8.22 4.53 0 8.22 3.69 8.22 8.22 0 4.53-3.69 8.19-8.23 8.19zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}

export default function ShareIcons({ url, title, className = "" }: ShareIconsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon size={17} />,
      hover: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <Linkedin size={17} />,
      hover: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <XIcon size={16} />,
      hover: "hover:bg-black hover:text-white hover:border-black",
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <Facebook size={17} />,
      hover: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <Share2 size={14} /> Share
      </span>
      <div className="flex items-center gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            title={l.label}
            className={`w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 bg-white transition-colors duration-200 ${l.hover}`}
          >
            {l.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          title="Copy link"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 bg-white hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors duration-200"
        >
          {copied ? <Check size={17} /> : <Link2 size={17} />}
        </button>
      </div>
      {copied && <span className="text-xs text-emerald-600 font-medium">Link copied</span>}
    </div>
  );
}
