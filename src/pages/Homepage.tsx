import HeroSection from "../components/HeroSections";
import { NavigationMenuDemo } from "../components/NavigationMenuDemo";
import { Button } from "../components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../components/ui/navigation-menu"


const Homepage = () => {
    return (
        <>
            <HeroSection />
            <Button>Click me</Button>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenuDemo/>
        </>
    )
}
export default Homepage;