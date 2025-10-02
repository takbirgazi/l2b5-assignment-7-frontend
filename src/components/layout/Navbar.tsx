import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import Bar from "@/assets/icon/Bar";
import logoMain from '@/assets/images/logo-main.png';



// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
];


export default function Component() {

    return (
        <header className="px-4 md:px-6 bg-gray-900">
            <div className="flex h-16 items-center justify-between gap-4 container mx-auto">
                {/* Left side */}
                <div className="flex items-center gap-2 w-full">
                    {/* Mobile menu trigger */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="group size-8 md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <Bar />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-36 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index} className="w-full">
                                            <NavigationMenuLink
                                                asChild
                                                className="py-1.5"
                                            >
                                                <Link href={link.href}>
                                                    {link.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* Main nav */}
                    <div className="flex items-center justify-between w-full">
                        <Link className="" href="/">
                            <Image
                                src={logoMain}
                                width={100}
                                height={35}
                                alt="Main Logo"
                                priority
                            />
                        </Link>
                        {/* Navigation menu */}
                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            asChild
                                            className="text-white hover:text-primary py-1.5 font-medium"
                                        >
                                            <Link href={link.href}>
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}