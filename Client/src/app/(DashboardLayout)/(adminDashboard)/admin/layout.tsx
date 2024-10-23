import type { Metadata } from "next";

import {
  Home,
  BookOpenText,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { FaReact } from "react-icons/fa";

import Sidebar from "@/src/components/modules/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Discover, share, and explore travel stories, tips, and guides from a community of travel enthusiasts. Plan your next adventure with expert advice and unique insights into destinations around the world.",
};

export default function AdminDashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const adminLinks = [
      {
        label: "Dashboard",
        href: "/admin",
        icon: <Home size={18} />,
      },
      {
        label: "Manage Skills",
        href: "/admin/skills",
        icon: <FaReact size={18} />,
      },
      {
        label: "Manage Blog",
        href: "/admin/blog",
        icon: <BookOpenText size={18} />,
      },
      {
        label: "Manage Projects",
        href: "/admin/projects",
        icon: <LayoutDashboard size={18} />,
      },
      {
        label: "Manage Experience",
        href: "/admin/experience",
        icon: <TrendingUp size={18} />,
      },
    ];
  
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar specificLinks={adminLinks} title="Admin Panel" />
        <main className="flex-1 overflow-y-auto px-3 my-12 sm:my-5">{children}</main>
      </div>
    );
  }