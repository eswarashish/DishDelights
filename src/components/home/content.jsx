"use-client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Array_1 = [
  {
    title: "Discover Delicious Recipes",
    description: "Explore a wide variety of mouth-watering recipes shared by our vibrant community.",
  },
  {
    title: "Share Your Culinary Creations",
    description: "Showcase your cooking skills by sharing your own unique and tasty recipes with the DishDelights community.",
  },
  {
    title: "Connect with Food Enthusiasts",
    description: "Join a passionate community of food lovers, share tips, and connect with others who share your culinary interests.",
  },
  {
    title: "Learn Cooking Tips and Techniques",
    description: "Improve your cooking skills with valuable tips and techniques shared by experienced chefs and home cooks alike.",
  },
  {
    title: "Follow your favourite chef",
    description: "You can also view the profiles of your fabourite and well known chefs.",
  },
];
export function CarouselDemo() {
  return (
    <Carousel className="max-h-screen h-auto">
      <CarouselContent className="flex">
      {Array_1.map((item, index) => (
          <CarouselItem key={index} className="flex-shrink-0 max-h-sm max-w-sm">
            <div className="p-1  h-auto">
              <Card className="">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 max-h-xs h-auto max-w-screen-lg">
                  <span className="text-4xl font-semibold">{item.title}</span>
                  <br /><p className="pt-14">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="self-center text-2xl" />
      <CarouselNext className="self-center text-2xl" />
    </Carousel>
  );
}
