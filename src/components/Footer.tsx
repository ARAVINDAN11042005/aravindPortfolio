import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Aravindan R
          </p>
          <p className="text-xs text-muted mt-2">
            © 2024 Aravindan R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;