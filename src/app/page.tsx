"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-pizza", "url": "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two gourmet pizzas with unique toppings: salmon with zucchini and classic margherita." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Pizzeria Delight" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-yellow-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Pizzeria Delight"
            description="Experience the best Italian flavors in town!"
            imageSrc={assetMap.find(a => a.id === 'hero-pizza')?.url}
            imageAlt={assetMap.find(a => a.id === 'hero-pizza')?.alt}
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}/>
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-yellow-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our passion for authentic Italian pizza drives us to deliver delicious experiences." />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-yellow-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Wood-fired Oven", description: "Perfectly crusted pizzas from our traditional oven.", imageSrc: assetMap.find(a => a.id === 'hero-pizza')?.url, imageAlt: assetMap.find(a => a.id === 'hero-pizza')?.alt },
              { title: "Fresh Ingredients", description: "Only the best, freshest ingredients used.", imageSrc: assetMap.find(a => a.id === 'hero-pizza')?.url, imageAlt: assetMap.find(a => a.id === 'hero-pizza')?.alt }
            ]} />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-yellow-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in touch with us!"
            description="We’d love to hear from you. Order now or ask any questions!"
            imageSrc={assetMap.find(a => a.id === 'hero-pizza')?.url}
            inputPlaceholder="Your email address"
            buttonText="Send Message"
            termsText="We respect your privacy. Unsubscribe at any time."/>
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-yellow-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "Menu", href: "menu" }, { label: "About Us", href: "about" }] }
            ]}
            copyrightText="© 2025 Pizzeria Delight"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}