"use client";
import { Button } from "@nextui-org/button";
import { Download } from "lucide-react";

const DownloadButton = () => {
  return (
    <a download="Habibur_Rahman_Resume.pdf" href="/HabiburRahmanResume_FrontEnd_Dev.pdf">
      <Button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-full 
                   flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300 
                   hover:scale-105"
      >
        <Download size={20} />
        Download Resume
      </Button>
    </a>
  );
};

export default DownloadButton;