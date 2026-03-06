import actLogo from "@/assets/act-audio-logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <img src={actLogo} alt="ACT Audio" className="h-8 mx-auto mb-4" />
        <p className="text-muted-foreground text-sm mb-2">
          458 Talcottville Rd, Vernon, CT 06066 • 860-870-7676
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} ACT Audio, Inc. All rights reserved. Since 2000.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
