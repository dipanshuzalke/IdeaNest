import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "IdeaNest",
      logo: GalleryVerticalEnd,
      // plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Ideas",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
      ],
    },
    {
      title: "Events",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Hackathons",
          url: "#",
        },
        {
          title: "Webinar",
          url: "#",
        },
        {
          title: "Workshops",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Global",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "DM",
          url: "#",
        },
      ],
    },
    {
      title: "Create",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Search",
      url: "#",
      icon: BookOpen,
    }
  ],
  projects: [
    {
      name: "Mentorship",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
