"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { href: "/", label: "Головна" },
  { href: { pathname: "/", hash: "services" }, label: "Послуги" },
  { href: { pathname: "/", hash: "masters" }, label: "Майстри" },
  { href: { pathname: "/", hash: "pricing" }, label: "Ціни" },
  { href: { pathname: "/", hash: "contacts" }, label: "Контакти" },
];

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b h-[var(--header-h)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[var(--header-h)] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/barber-logo.svg" alt="FreakCut" width={36} height={36} priority />
            <div className="flex flex-col leading-none">
              <span className="font-semibold tracking-wide">FreakCut</span>
              <span className="text-xs text-muted-foreground">Барбершоп</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={`${item.label}`}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href as any} className="px-3 py-2 rounded-md hover:bg-accent">
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild><Link href="/book">Записатися</Link></Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Відкрити меню">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[360px]" aria-describedby="mobile-menu-desc">
  <SheetHeader className="sr-only">
    <SheetTitle>Мобільне меню</SheetTitle>
    <SheetDescription id="mobile-menu-desc">Навігація по сторінках сайту</SheetDescription>
  </SheetHeader>

  <nav className="mt-6 grid gap-1">
    {navItems.map((item) => (
      <Link key={item.label} href={item.href as any} className="px-3 py-2 rounded-md hover:bg-accent">
        {item.label}
      </Link>
    ))}
  </nav>

  <div className="mt-4">
    <Button asChild className="w-full"><Link href="/book">Записатися</Link></Button>
  </div>
</SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
