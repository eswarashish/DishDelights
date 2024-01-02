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
  {}
]
export function CarouselDemo() {
  return (
    <Carousel className="max-h-screen h-auto">
      <CarouselContent className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex-shrink-0">
            <div className="p-1 max-h-screen h-auto">
              <Card className="max-w-screen-md mx-auto max-h-screen h-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6 max-h-xs h-auto max-w-screen-lg">
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
