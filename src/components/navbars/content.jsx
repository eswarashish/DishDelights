"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github } from "lucide-react";

const components = [
  {
    title: "Recipes",
    href: "/recipes",
    description:
      "Explore a variety of recipes and cooking tips.",
  },
  {
    title: "Home",
    href: "/",
    description: "Discover the latest updates and news.",
  },
  {
    title: "My Profile",
    href: "https://github.com/20bec023IIITDWD",
    description: "Visit my GitHub profile.",
  },
  {
    title: "Add Recipe",
    href: "/recipes/add",
    description: "Contribute by adding a new recipe.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu >
      <NavigationMenuList >
        <NavigationMenuItem >
          <NavigationMenuTrigger className="dark:bg-slate-900">Tech stack I have used</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-slate-900">
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-slate-900">
  <li className="row-span-3">
    <NavigationMenuLink asChild>
      <a
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        href="https://shadcn.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mb-2 mt-4 text-lg font-medium">
          <img
            src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
            alt="Shadcn Logo"
            className="h-8 w-8 mr-2 inline"
          />
          Shadcn/UI
        </div>
        <p className="text-sm leading-tight text-muted-foreground">
          Beautifully designed components for your UI. Accessible.
          Customizable. Open Source.
        </p>
      </a>
    </NavigationMenuLink>
  </li>
  <ListItem href="https://nextjs.org/" title="Next.js">
    <img
      src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
      alt="Next.js Logo"
      className="h-6 w-6 mr-2 inline"
    />
    The React framework for building fast and scalable web applications.
  </ListItem>
  <ListItem href="https://next-auth.js.org/" title="NextAuth">
    <img
      src="https://next-auth.js.org/img/logo/logo-sm.png"
      alt="NextAuth Logo"
      className="h-6 w-6 mr-2 inline"
    />
    Authentication library for Next.js applications.
  </ListItem>
  <ListItem href="https://www.mongodb.com/" title="MongoDB">
    <img
      src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
      alt="MongoDB Logo"
      className="h-6 w-6 mr-2 inline"
    />
    The NoSQL database for modern applications.
  </ListItem>
</ul>

  <ListItem href="/" >
   
  </ListItem>
</ul>

          </NavigationMenuContent>
        </NavigationMenuItem >
        <NavigationMenuItem >
          <NavigationMenuTrigger className="dark:bg-slate-900">Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-slate-900">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${'dark:bg-slate-900'}`} >
            <Github className="mr-2 h-5 w-5" />
            {/* <span>GitHub</span> */}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
     
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
